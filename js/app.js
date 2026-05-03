// ─────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────
const STATE = {
  checked: JSON.parse(localStorage.getItem('mth_checked') || '{}'),
  totalTime: Number(localStorage.getItem('mth_time') || 0),
  streak: Number(localStorage.getItem('mth_streak') || 0),
  lastStudy: localStorage.getItem('mth_lastStudy') || '',
  notes: JSON.parse(localStorage.getItem('mth_notes') || '[]'),
  currentNote: null,
  fcCards: [], fcIndex: 0, fcFlipped: false,
  fcKnown: 0, fcUnknown: 0,
  pomoDuration: 25 * 60, pomoLeft: 25 * 60,
  pomoRunning: false, pomoInterval: null,
  pomoSessions: 0, pomoMode: 'focus',
  chatFile: null, chatFileData: null,
  chatHistory: [],
  todayTime: 0, todayInterval: null
};

function save() {
  localStorage.setItem('mth_checked', JSON.stringify(STATE.checked));
  localStorage.setItem('mth_time', STATE.totalTime);
  localStorage.setItem('mth_streak', STATE.streak);
  localStorage.setItem('mth_lastStudy', STATE.lastStudy);
  localStorage.setItem('mth_notes', JSON.stringify(STATE.notes));
}

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateStreak();
  buildCurriculum();
  buildDashboard();
  updateOverallProgress();
  initNotes();
  loadFlashcards();
  startTodayTimer();

  // nav buttons
  document.querySelectorAll('.nav-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });
});

function startTodayTimer() {
  STATE.todayInterval = setInterval(() => {
    if (STATE.pomoRunning) return; // don't double count
    STATE.todayTime++;
    updateTodayDisplay();
  }, 1000);
}

function updateTodayDisplay() {
  const m = Math.floor(STATE.todayTime / 60);
  const h = Math.floor(m / 60);
  const el = document.getElementById('today-time');
  if (el) el.textContent = h > 0 ? `${h}j ${m % 60}m` : `${m}m`;
}

// ─────────────────────────────────────────────────────────────
// STREAK
// ─────────────────────────────────────────────────────────────
function updateStreak() {
  const today = new Date().toDateString();
  const last = STATE.lastStudy;
  if (last !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (last === yesterday) STATE.streak++;
    else if (last !== today) STATE.streak = 1;
    STATE.lastStudy = today;
    save();
  }
}

// ─────────────────────────────────────────────────────────────
// VIEW SWITCHING
// ─────────────────────────────────────────────────────────────
function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const view = document.getElementById('view-' + name);
  if (view) view.classList.add('active');
  const btn = document.querySelector(`.nav-btn[data-view="${name}"]`);
  if (btn) btn.classList.add('active');
  if (name === 'dashboard') buildDashboard();
  if (name === 'curriculum') buildCurriculum();
  closeSidebar();
}

// ─────────────────────────────────────────────────────────────
// SIDEBAR (mobile)
// ─────────────────────────────────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// ─────────────────────────────────────────────────────────────
// PROGRESS CALCULATIONS
// ─────────────────────────────────────────────────────────────
function calcOverall() {
  let total = 0, done = 0;
  CURRICULUM.forEach(cat => cat.sections.forEach(sec => sec.topics.forEach(t => {
    total++; if (STATE.checked[t.id]) done++;
  })));
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}

function calcCat(cat) {
  let total = 0, done = 0;
  cat.sections.forEach(sec => sec.topics.forEach(t => {
    total++; if (STATE.checked[t.id]) done++;
  }));
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}

function updateOverallProgress() {
  const { total, done, pct } = calcOverall();
  const bar = document.getElementById('overall-bar');
  const pctEl = document.getElementById('overall-pct');
  const sub = document.getElementById('overall-sub');
  if (bar) bar.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (sub) sub.textContent = done + ' / ' + total + ' topik';
}

// ─────────────────────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────────────────────
function buildDashboard() {
  const { total, done, pct } = calcOverall();
  const totalMin = Math.floor(STATE.totalTime / 60);
  const h = Math.floor(totalMin / 60);
  setText('dash-done', done);
  setText('dash-total', total);
  setText('dash-time', h > 0 ? h + 'j' : totalMin + 'm');
  setText('dash-streak', STATE.streak);

  // cat progress
  const catList = document.getElementById('cat-progress-list');
  if (catList) {
    catList.innerHTML = CURRICULUM.map(cat => {
      const { done: d, total: t, pct: p } = calcCat(cat);
      return `<div class="cat-progress-item">
        <div class="cat-progress-header">
          <span style="color:${cat.color}">${cat.label}</span>
          <span style="font-family:monospace;font-size:0.75rem;color:var(--muted)">${d}/${t} · ${p}%</span>
        </div>
        <div class="cat-progress-bar"><div class="cat-progress-fill" style="width:${p}%;background:${cat.color}"></div></div>
      </div>`;
    }).join('');
  }

  // continue list: first unchecked topic per cat
  const contList = document.getElementById('continue-list');
  if (contList) {
    const items = [];
    CURRICULUM.forEach(cat => {
      cat.sections.forEach(sec => {
        sec.topics.forEach(t => {
          if (!STATE.checked[t.id] && items.length < 4) {
            items.push({ id: t.id, name: t.name, cat: cat.label, color: cat.color });
          }
        });
      });
    });
    contList.innerHTML = items.map(i => `
      <div class="continue-item" onclick="openTopic('${i.id}')">
        <div class="continue-topic">${i.name}</div>
        <div class="continue-cat" style="color:${i.color}">${i.cat}</div>
      </div>`).join('') || '<div style="color:var(--muted);font-size:0.8rem">Semua topik selesai! 🎉</div>';
  }
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ─────────────────────────────────────────────────────────────
// CURRICULUM
// ─────────────────────────────────────────────────────────────
function buildCurriculum(filter = '') {
  const container = document.getElementById('curriculum-content');
  if (!container) return;
  const fl = filter.toLowerCase();
  container.innerHTML = CURRICULUM.map(cat => {
    const sections = cat.sections.map(sec => {
      const topics = sec.topics.filter(t => !fl || t.name.toLowerCase().includes(fl));
      if (!topics.length) return '';
      const done = topics.filter(t => STATE.checked[t.id]).length;
      return `<div class="sec-block">
        <div class="sec-header" onclick="toggleSection(this)">
          <span>${sec.title}</span>
          <span class="sec-count">${done}/${topics.length} ▼</span>
        </div>
        <div class="topic-list ${fl ? 'open' : ''}">
          ${topics.map(t => topicRow(t, cat)).join('')}
        </div>
      </div>`;
    }).join('');
    if (!sections.trim()) return '';
    const { done, total, pct } = calcCat(cat);
    return `<div class="cat-block">
      <div class="cat-header" onclick="toggleCat(this)">
        <div class="cat-color-dot" style="background:${cat.color}"></div>
        <span class="cat-header-label">${cat.label}</span>
        <span class="cat-header-pct" style="color:${cat.color}">${done}/${total}</span>
        <span class="cat-header-arrow">▼</span>
      </div>
      ${sections}
    </div>`;
  }).join('');
}

function topicRow(t, cat) {
  const done = !!STATE.checked[t.id];
  const hasContent = !!TOPIC_CONTENT[t.id];
  return `<div class="topic-row">
    <button class="topic-check ${done ? 'done' : ''}" onclick="toggleCheck('${t.id}','${cat.id}')" style="${done ? 'border-color:' + cat.color : ''}">${done ? '✓' : ''}</button>
    <span class="topic-label ${done ? 'done' : ''}" onclick="${hasContent ? "openTopic('" + t.id + "')" : ''}" style="cursor:${hasContent ? 'pointer' : 'default'}">${t.name}${!hasContent ? '' : ''}</span>
    <button class="topic-study-btn" onclick="openTopic('${t.id}')">${hasContent ? 'Belajar →' : 'Tanya AI →'}</button>
  </div>`;
}

function toggleSection(header) {
  const list = header.nextElementSibling;
  list.classList.toggle('open');
  const arrow = header.querySelector('.sec-count');
  if (arrow) arrow.textContent = arrow.textContent.replace(list.classList.contains('open') ? '▼' : '▲', list.classList.contains('open') ? '▲' : '▼');
}

function toggleCat(header) {
  const sections = header.parentElement.querySelectorAll('.sec-block');
  const isOpen = header.parentElement.querySelector('.topic-list.open');
  sections.forEach(s => {
    const list = s.querySelector('.topic-list');
    if (list) list.classList.toggle('open', !isOpen);
  });
}

function toggleCheck(topicId, catId) {
  STATE.checked[topicId] = !STATE.checked[topicId];
  save();
  buildCurriculum(document.getElementById('topic-search')?.value || '');
  updateOverallProgress();
}

function searchTopics(val) {
  buildCurriculum(val);
}

// ─────────────────────────────────────────────────────────────
// TOPIC DETAIL
// ─────────────────────────────────────────────────────────────
function openTopic(topicId) {
  const content = TOPIC_CONTENT[topicId];
  // Find topic info
  let topicInfo = null;
  CURRICULUM.forEach(cat => cat.sections.forEach(sec => sec.topics.forEach(t => {
    if (t.id === topicId) topicInfo = { t, cat };
  })));
  if (!topicInfo) return;

  const isDone = !!STATE.checked[topicId];
  const detailEl = document.getElementById('topic-detail-content');

  if (!content) {
    // No content: switch to chat with pre-filled question
    switchView('chat');
    document.getElementById('chat-input').value = `Jelaskan materi "${topicInfo.t.name}" (${topicInfo.cat.label}) untuk pemula olimpiade. Mulai dari konsep dasar, berikan contoh visual, dan kalau relevan tunjukkan soal olimpiade-nya.`;
    return;
  }

  detailEl.innerHTML = `
    <div class="topic-detail-header">
      <div class="topic-detail-cat" style="color:${topicInfo.cat.color}">${content.cat}</div>
      <div class="topic-detail-title">${content.title}</div>
      <button class="topic-done-btn ${isDone ? 'done' : ''}" onclick="markTopicDone('${topicId}',this)">
        ${isDone ? '✓ Sudah Dipelajari' : 'Tandai Selesai'}
      </button>
    </div>
    ${content.content}
    <div class="content-section">
      <h2>Contoh Soal</h2>
      ${(content.examples || []).map(ex => `
        <div class="example-block">
          <div class="example-num">${ex.num}</div>
          <div class="example-problem">${ex.problem}</div>
          <div class="example-solution">${ex.solution}</div>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="topic-study-btn" style="padding:8px 16px;font-size:0.8rem" onclick="askAIAbout('${topicInfo.t.name}')">💬 Tanya AI tentang topik ini</button>
    </div>
  `;

  switchView('topic');
  // Render math
  setTimeout(() => {
    if (window.renderMathInElement) {
      renderMathInElement(detailEl, {
        delimiters: [
          {left:'$$', right:'$$', display:true},
          {left:'$', right:'$', display:false}
        ]
      });
    }
  }, 100);
}

function markTopicDone(topicId, btn) {
  STATE.checked[topicId] = !STATE.checked[topicId];
  save();
  const isDone = STATE.checked[topicId];
  btn.textContent = isDone ? '✓ Sudah Dipelajari' : 'Tandai Selesai';
  btn.classList.toggle('done', isDone);
  updateOverallProgress();
}

function askAIAbout(topicName) {
  switchView('chat');
  document.getElementById('chat-input').value = `Jelaskan lebih dalam tentang "${topicName}". Berikan contoh soal olimpiade beserta solusinya, dan tips penggunaan konsep ini di kompetisi.`;
}

// ─────────────────────────────────────────────────────────────
// CHAT / AI TUTOR
// ─────────────────────────────────────────────────────────────
const CHAT_SYSTEM = `Kamu adalah tutor matematika olimpiade expert. User berumur 20 tahun, baru mulai olimpiade, dan adalah visual learner.

ATURAN WAJIB:
1. Kesimpulan/inti DULU, baru detail
2. Gunakan visualisasi teks: ASCII diagram, tabel pola, flowchart, number line
3. Jelaskan MENGAPA, bukan hanya BAGAIMANA
4. Tandai dengan [KUNCI], [PERHATIAN], atau [TIPS OLIMPIADE]
5. Untuk soal: tulis ulang soal → jawaban → penjelasan step-by-step
6. Tulis formula matematika dalam format LaTeX: $...$ atau $$...$$
7. Bahasa Indonesia, to the point
8. Jika ada file: analisis dan jelaskan isinya
9. Jika ada link YouTube: jelaskan konsep yang kemungkinan dibahas`;

async function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text && !STATE.chatFile) return;

  appendMsg('user', text || `[Upload: ${STATE.chatFile?.name}]`, STATE.chatFile?.name);
  input.value = '';
  input.style.height = 'auto';

  const typingId = appendTyping();

  // Build API messages
  const userContent = [];
  if (STATE.chatFileData) {
    const { base64, mediaType } = STATE.chatFileData;
    if (mediaType === 'application/pdf') {
      userContent.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: base64 } });
    } else if (mediaType.startsWith('image/')) {
      userContent.push({ type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } });
    }
  }

  let txt = text;
  const yt = text.match(/(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//);
  if (yt) txt = `Link YouTube: ${text}\n\nJelaskan konsep matematika yang kemungkinan dibahas di video ini.`;
  if (STATE.chatFile && !text) txt = 'Analisis dan jelaskan materi dari file ini. Identifikasi topik, konsep kunci, dan beri penjelasan step-by-step.';
  userContent.push({ type: 'text', text: txt });

  STATE.chatHistory.push({ role: 'user', content: userContent });
  clearFile();

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: CHAT_SYSTEM,
        messages: STATE.chatHistory
      })
    });
    const data = await res.json();
    const reply = data.content?.map(b => b.text || '').join('') || 'Error. Coba lagi.';
    STATE.chatHistory.push({ role: 'assistant', content: reply });
    removeTyping(typingId);
    appendMsg('assistant', reply);
  } catch (e) {
    removeTyping(typingId);
    appendMsg('assistant', 'Koneksi gagal. Pastikan internet aktif dan coba lagi.');
  }
}

function appendMsg(role, text, attachment) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  const avatar = role === 'assistant' ? 'M' : 'K';
  const body = role === 'assistant' ? formatChatText(text) : escHtml(text);
  div.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-body">
      ${attachment ? `<div style="font-size:0.7rem;color:var(--muted);margin-bottom:5px;padding:2px 6px;background:rgba(255,255,255,0.04);border-radius:4px">📎 ${escHtml(attachment)}</div>` : ''}
      ${body}
    </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  // Render math in new message
  setTimeout(() => {
    if (window.renderMathInElement) {
      renderMathInElement(div, { delimiters: [{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}] });
    }
  }, 50);
  return div;
}

function formatChatText(text) {
  let html = '';
  const lines = text.split('\n');
  let inList = false;
  lines.forEach(line => {
    if (line.startsWith('# ')) { if(inList){html+='</ul>';inList=false;} html += `<h3 style="color:#fff;margin:10px 0 5px;font-size:0.95rem">${escHtml(line.slice(2))}</h3>`; }
    else if (line.startsWith('## ')) { if(inList){html+='</ul>';inList=false;} html += `<h4 style="color:#E2E8F0;margin:8px 0 4px;font-size:0.88rem">${escHtml(line.slice(3))}</h4>`; }
    else if (line.startsWith('### ')) { if(inList){html+='</ul>';inList=false;} html += `<h5 style="color:var(--purple);margin:6px 0 3px;font-size:0.82rem">${escHtml(line.slice(4))}</h5>`; }
    else if (line.includes('[KUNCI]')) { if(inList){html+='</ul>';inList=false;} html += `<div class="kunci">${boldify(escHtml(line))}</div>`; }
    else if (line.includes('[PERHATIAN]')) { if(inList){html+='</ul>';inList=false;} html += `<div class="perhatian">${boldify(escHtml(line))}</div>`; }
    else if (line.includes('[TIPS OLIMPIADE]')) { if(inList){html+='</ul>';inList=false;} html += `<div class="tips">${boldify(escHtml(line))}</div>`; }
    else if (/^[-•] /.test(line)) { if(!inList){html+='<ul>';inList=true;} html += `<li>${boldify(escHtml(line.slice(2)))}</li>`; }
    else if (/^\d+\. /.test(line)) { if(inList){html+='</ul>';inList=false;} html += `<p style="padding-left:12px">${boldify(escHtml(line))}</p>`; }
    else if (line.trim() === '') { if(inList){html+='</ul>';inList=false;} html += '<br>'; }
    else { if(inList){html+='</ul>';inList=false;} html += `<p>${boldify(escHtml(line))}</p>`; }
  });
  if (inList) html += '</ul>';
  return html;
}

function boldify(s) {
  return s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

let typingCounter = 0;
function appendTyping() {
  const id = 'typing-' + (++typingCounter);
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg assistant'; div.id = id;
  div.innerHTML = `<div class="msg-avatar">M</div><div class="msg-body"><div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return id;
}
function removeTyping(id) {
  document.getElementById(id)?.remove();
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
}
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

async function handleFileUpload(e) {
  const file = e.target.files[0]; if (!file) return;
  const base64 = await fileToBase64(file);
  STATE.chatFile = file;
  STATE.chatFileData = { base64, mediaType: file.type || 'application/pdf' };
  document.getElementById('file-preview').style.display = 'flex';
  document.getElementById('file-name').textContent = file.name;
  e.target.value = '';
}

function clearFile() {
  STATE.chatFile = null; STATE.chatFileData = null;
  document.getElementById('file-preview').style.display = 'none';
}

function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(',')[1]);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

// ─────────────────────────────────────────────────────────────
// FLASHCARDS
// ─────────────────────────────────────────────────────────────
function loadFlashcards() {
  const cat = document.getElementById('fc-category')?.value || 'all';
  let cards = [];
  if (cat === 'all') {
    Object.values(FLASHCARDS).forEach(arr => cards.push(...arr));
  } else {
    cards = FLASHCARDS[cat] || [];
  }
  STATE.fcCards = [...cards];
  STATE.fcIndex = 0; STATE.fcFlipped = false;
  STATE.fcKnown = 0; STATE.fcUnknown = 0;
  renderCard();
}

function shuffleCards() {
  for (let i = STATE.fcCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [STATE.fcCards[i], STATE.fcCards[j]] = [STATE.fcCards[j], STATE.fcCards[i]];
  }
  STATE.fcIndex = 0; STATE.fcFlipped = false;
  renderCard();
}

function renderCard() {
  const cards = STATE.fcCards;
  if (!cards.length) return;
  const card = cards[STATE.fcIndex];
  const fc = document.getElementById('flashcard');
  const front = document.getElementById('fc-front');
  const back = document.getElementById('fc-back');
  if (!fc || !front || !back) return;
  front.textContent = card.front;
  back.innerHTML = card.back.replace(/\n/g, '<br>');
  fc.classList.remove('flipped');
  STATE.fcFlipped = false;
  document.getElementById('fc-counter').textContent = (STATE.fcIndex + 1) + ' / ' + cards.length;
  document.getElementById('fc-known').textContent = STATE.fcKnown;
  document.getElementById('fc-unknown').textContent = STATE.fcUnknown;
  // Render math
  setTimeout(() => {
    if (window.renderMathInElement) {
      renderMathInElement(document.getElementById('fc-front'), {delimiters:[{left:'$',right:'$',display:false},{left:'$$',right:'$$',display:true}]});
      renderMathInElement(document.getElementById('fc-back'), {delimiters:[{left:'$',right:'$',display:false},{left:'$$',right:'$$',display:true}]});
    }
  }, 50);
}

function flipCard() {
  const fc = document.getElementById('flashcard');
  STATE.fcFlipped = !STATE.fcFlipped;
  fc.classList.toggle('flipped', STATE.fcFlipped);
}
function nextCard() {
  if (STATE.fcIndex < STATE.fcCards.length - 1) { STATE.fcIndex++; renderCard(); }
}
function prevCard() {
  if (STATE.fcIndex > 0) { STATE.fcIndex--; renderCard(); }
}
function markKnown() { STATE.fcKnown++; nextCard(); }
function markUnknown() { STATE.fcUnknown++; nextCard(); }

// ─────────────────────────────────────────────────────────────
// POMODORO
// ─────────────────────────────────────────────────────────────
function setMode(mode, minutes) {
  STATE.pomoMode = mode;
  STATE.pomoDuration = minutes * 60;
  STATE.pomoLeft = STATE.pomoDuration;
  clearInterval(STATE.pomoInterval);
  STATE.pomoRunning = false;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  updatePomoDisplay();
}

function startPomo() {
  if (STATE.pomoRunning) return;
  STATE.pomoRunning = true;
  STATE.pomoInterval = setInterval(() => {
    STATE.pomoLeft--;
    STATE.totalTime++;
    STATE.todayTime++;
    updateTodayDisplay();
    save();
    updatePomoDisplay();
    if (STATE.pomoLeft <= 0) {
      clearInterval(STATE.pomoInterval);
      STATE.pomoRunning = false;
      STATE.pomoSessions++;
      document.getElementById('pomo-sessions').textContent = STATE.pomoSessions;
      alert(STATE.pomoMode === 'focus' ? '⏰ Sesi fokus selesai! Saatnya istirahat.' : '✅ Istirahat selesai! Ayo fokus lagi.');
    }
  }, 1000);
}

function pausePomo() {
  clearInterval(STATE.pomoInterval);
  STATE.pomoRunning = false;
}

function resetPomo() {
  clearInterval(STATE.pomoInterval);
  STATE.pomoRunning = false;
  STATE.pomoLeft = STATE.pomoDuration;
  updatePomoDisplay();
}

function updatePomoDisplay() {
  const m = Math.floor(STATE.pomoLeft / 60).toString().padStart(2, '0');
  const s = (STATE.pomoLeft % 60).toString().padStart(2, '0');
  document.getElementById('pomo-display').textContent = m + ':' + s;
  // Update ring
  const circ = 603;
  const offset = circ - (STATE.pomoLeft / STATE.pomoDuration) * circ;
  const ring = document.getElementById('pomo-ring');
  if (ring) ring.style.strokeDashoffset = offset;
  const label = document.getElementById('pomo-label');
  if (label) label.textContent = STATE.pomoMode === 'focus' ? 'Fokus' : 'Istirahat';
}

// ─────────────────────────────────────────────────────────────
// NOTES
// ─────────────────────────────────────────────────────────────
function initNotes() {
  if (!STATE.notes.length) {
    STATE.notes = [{
      id: Date.now(), title: 'Catatan Pertama',
      body: 'Selamat datang di fitur catatan!\n\nKamu bisa menulis catatan, rumus, atau soal di sini.\nFormula LaTeX: $\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$\n\nKlik "Render Math" untuk menampilkan formula.',
      date: new Date().toLocaleDateString('id-ID')
    }];
    save();
  }
  renderNotesList();
  if (STATE.notes.length) openNote(STATE.notes[0].id);
}

function renderNotesList() {
  const list = document.getElementById('notes-list');
  if (!list) return;
  list.innerHTML = STATE.notes.map(n => `
    <div class="note-item ${STATE.currentNote === n.id ? 'active' : ''}" onclick="openNote(${n.id})">
      <div class="note-item-title">${escHtml(n.title || 'Tanpa Judul')}</div>
      <div class="note-item-date">${n.date}</div>
    </div>`).join('');
}

function openNote(id) {
  STATE.currentNote = id;
  const note = STATE.notes.find(n => n.id === id);
  if (!note) return;
  document.getElementById('note-title').value = note.title;
  document.getElementById('note-body').value = note.body;
  document.getElementById('note-preview').style.display = 'none';
  renderNotesList();
}

function newNote() {
  const note = { id: Date.now(), title: 'Catatan Baru', body: '', date: new Date().toLocaleDateString('id-ID') };
  STATE.notes.unshift(note);
  save();
  renderNotesList();
  openNote(note.id);
}

function saveCurrentNote() {
  if (!STATE.currentNote) return;
  const note = STATE.notes.find(n => n.id === STATE.currentNote);
  if (!note) return;
  note.title = document.getElementById('note-title').value;
  note.body = document.getElementById('note-body').value;
  note.date = new Date().toLocaleDateString('id-ID');
  save();
  renderNotesList();
}

function renderNotePreview() {
  const body = document.getElementById('note-body').value;
  const preview = document.getElementById('note-preview');
  preview.innerHTML = body.replace(/\n/g, '<br>');
  preview.style.display = 'block';
  if (window.renderMathInElement) {
    renderMathInElement(preview, { delimiters: [{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}] });
  }
}

function deleteCurrentNote() {
  if (!STATE.currentNote) return;
  if (!confirm('Hapus catatan ini?')) return;
  STATE.notes = STATE.notes.filter(n => n.id !== STATE.currentNote);
  STATE.currentNote = null;
  save();
  renderNotesList();
  if (STATE.notes.length) openNote(STATE.notes[0].id);
  else { document.getElementById('note-title').value = ''; document.getElementById('note-body').value = ''; }
}

// ─────────────────────────────────────────────────────────────
// EXPORT / IMPORT PROGRESS
// ─────────────────────────────────────────────────────────────
function exportProgress() {
  const data = {
    checked: STATE.checked,
    totalTime: STATE.totalTime,
    streak: STATE.streak,
    notes: STATE.notes,
    exported: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'mathplatform-progress.json';
  a.click();
}

function importProgress(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const d = JSON.parse(ev.target.result);
      if (d.checked) STATE.checked = d.checked;
      if (d.totalTime) STATE.totalTime = d.totalTime;
      if (d.streak) STATE.streak = d.streak;
      if (d.notes) STATE.notes = d.notes;
      save();
      buildDashboard();
      buildCurriculum();
      updateOverallProgress();
      renderNotesList();
      alert('Progress berhasil diimport!');
    } catch { alert('File tidak valid.'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}
