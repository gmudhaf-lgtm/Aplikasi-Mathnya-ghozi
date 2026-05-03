// ─────────────────────────────────────────────────────────────
// CURRICULUM DATA
// ─────────────────────────────────────────────────────────────
const CURRICULUM = [
  {
    id: "sma10", label: "Kelas 10", color: "#60A5FA",
    sections: [
      {
        title: "Aljabar & Fungsi",
        topics: [
          { id: "t001", name: "Sistem bilangan real dan sifat-sifatnya" },
          { id: "t002", name: "Persamaan linear satu variabel" },
          { id: "t003", name: "Pertidaksamaan linear satu variabel" },
          { id: "t004", name: "Nilai mutlak" },
          { id: "t005", name: "Persamaan kuadrat" },
          { id: "t006", name: "Diskriminan dan sifat akar" },
          { id: "t007", name: "Pertidaksamaan kuadrat" },
          { id: "t008", name: "Fungsi: definisi, domain, range" },
          { id: "t009", name: "Fungsi linear dan grafiknya" },
          { id: "t010", name: "Fungsi kuadrat dan grafiknya" },
          { id: "t011", name: "Komposisi fungsi" },
          { id: "t012", name: "Fungsi invers" },
        ]
      },
      {
        title: "Sistem Persamaan & Pertidaksamaan",
        topics: [
          { id: "t013", name: "SPLDV (substitusi, eliminasi, grafik)" },
          { id: "t014", name: "SPLTV" },
          { id: "t015", name: "Pertidaksamaan linear dua variabel" },
          { id: "t016", name: "Program linear" },
        ]
      },
      {
        title: "Geometri & Trigonometri Dasar",
        topics: [
          { id: "t017", name: "Perbandingan trigonometri dasar" },
          { id: "t018", name: "Sudut istimewa: sin, cos, tan" },
          { id: "t019", name: "Aturan sinus dan cosinus" },
          { id: "t020", name: "Luas segitiga dengan trigonometri" },
          { id: "t021", name: "Vektor di bidang" },
          { id: "t022", name: "Dot product dan sudut antar vektor" },
        ]
      },
      {
        title: "Statistika & Peluang Dasar",
        topics: [
          { id: "t023", name: "Penyajian data" },
          { id: "t024", name: "Ukuran pemusatan: mean, median, modus" },
          { id: "t025", name: "Ukuran penyebaran" },
          { id: "t026", name: "Peluang klasik" },
          { id: "t027", name: "Kejadian saling lepas dan komplemen" },
        ]
      }
    ]
  },
  {
    id: "sma11", label: "Kelas 11", color: "#34D399",
    sections: [
      {
        title: "Barisan & Deret",
        topics: [
          { id: "t028", name: "Barisan aritmetika" },
          { id: "t029", name: "Barisan geometri" },
          { id: "t030", name: "Deret geometri tak hingga" },
          { id: "t031", name: "Aplikasi barisan & deret" },
        ]
      },
      {
        title: "Eksponen & Logaritma",
        topics: [
          { id: "t032", name: "Sifat-sifat eksponen" },
          { id: "t033", name: "Fungsi eksponen dan grafiknya" },
          { id: "t034", name: "Persamaan eksponen" },
          { id: "t035", name: "Pertidaksamaan eksponen" },
          { id: "t036", name: "Sifat-sifat logaritma" },
          { id: "t037", name: "Persamaan logaritma" },
          { id: "t038", name: "Pertidaksamaan logaritma" },
        ]
      },
      {
        title: "Trigonometri Lanjut",
        topics: [
          { id: "t039", name: "Identitas trigonometri dasar" },
          { id: "t040", name: "Rumus penjumlahan dan selisih sudut" },
          { id: "t041", name: "Rumus sudut ganda" },
          { id: "t042", name: "Persamaan trigonometri" },
          { id: "t043", name: "Grafik fungsi trigonometri" },
        ]
      },
      {
        title: "Geometri Ruang",
        topics: [
          { id: "t044", name: "Jarak titik ke garis dan bidang" },
          { id: "t045", name: "Sudut antar garis dan bidang" },
          { id: "t046", name: "Volume & luas permukaan bangun ruang" },
        ]
      },
      {
        title: "Kombinatorik & Peluang",
        topics: [
          { id: "t047", name: "Kaidah perkalian dan penjumlahan" },
          { id: "t048", name: "Permutasi" },
          { id: "t049", name: "Kombinasi" },
          { id: "t050", name: "Peluang bersyarat dan kejadian independen" },
        ]
      },
      {
        title: "Polinomial",
        topics: [
          { id: "t051", name: "Operasi dan pembagian polinomial" },
          { id: "t052", name: "Teorema sisa dan faktor" },
          { id: "t053", name: "Akar-akar polinomial" },
        ]
      }
    ]
  },
  {
    id: "sma12", label: "Kelas 12", color: "#FBBF24",
    sections: [
      {
        title: "Limit & Kekontinuan",
        topics: [
          { id: "t054", name: "Intuisi dan definisi limit" },
          { id: "t055", name: "Limit aljabar dan limit tak hingga" },
          { id: "t056", name: "Kekontinuan fungsi" },
          { id: "t057", name: "Limit fungsi trigonometri" },
        ]
      },
      {
        title: "Diferensial (Turunan)",
        topics: [
          { id: "t058", name: "Definisi turunan sebagai limit" },
          { id: "t059", name: "Aturan diferensiasi dasar" },
          { id: "t060", name: "Aturan rantai (chain rule)" },
          { id: "t061", name: "Turunan fungsi trigonometri" },
          { id: "t062", name: "Turunan eksponen dan logaritma" },
          { id: "t063", name: "Aplikasi turunan: max, min, sketsa kurva" },
        ]
      },
      {
        title: "Integral",
        topics: [
          { id: "t064", name: "Integral tak tentu" },
          { id: "t065", name: "Integral substitusi" },
          { id: "t066", name: "Integral tentu dan teorema dasar kalkulus" },
          { id: "t067", name: "Luas daerah dan volume benda putar" },
        ]
      },
      {
        title: "Statistika Lanjut",
        topics: [
          { id: "t068", name: "Distribusi binomial" },
          { id: "t069", name: "Distribusi normal" },
        ]
      },
      {
        title: "Matriks",
        topics: [
          { id: "t070", name: "Operasi matriks" },
          { id: "t071", name: "Determinan dan invers matriks" },
          { id: "t072", name: "Penerapan matriks pada SPLDV" },
        ]
      }
    ]
  },
  {
    id: "osn-dasar", label: "Olimpiade Dasar", color: "#C084FC",
    sections: [
      {
        title: "Aljabar Olimpiade",
        topics: [
          { id: "t073", name: "Inequalitas AM-GM" },
          { id: "t074", name: "Inequalitas Cauchy-Schwarz" },
          { id: "t075", name: "Relasi Vieta pada polinomial" },
          { id: "t076", name: "Persamaan fungsional dasar" },
          { id: "t077", name: "Teknik SOS (Sum of Squares)" },
        ]
      },
      {
        title: "Teori Bilangan",
        topics: [
          { id: "t078", name: "Keterbagian dan algoritma Euclid" },
          { id: "t079", name: "Aritmetika modular" },
          { id: "t080", name: "Teorema Fermat kecil" },
          { id: "t081", name: "Chinese Remainder Theorem" },
          { id: "t082", name: "Persamaan Diofantus linear" },
        ]
      },
      {
        title: "Kombinatorik Olimpiade",
        topics: [
          { id: "t083", name: "Prinsip Pigeonhole" },
          { id: "t084", name: "Prinsip inklusi-eksklusi" },
          { id: "t085", name: "Koefisien binomial dan identitas Pascal" },
          { id: "t086", name: "Rekursi dan relasi rekurensi" },
          { id: "t087", name: "Invariant dan monovariant" },
        ]
      },
      {
        title: "Geometri Olimpiade",
        topics: [
          { id: "t088", name: "Titik-titik istimewa segitiga" },
          { id: "t089", name: "Lingkaran: sifat dan teorema" },
          { id: "t090", name: "Power of a Point" },
          { id: "t091", name: "Teorema Ptolemy" },
          { id: "t092", name: "Teorema Menelaus dan Ceva" },
        ]
      },
      {
        title: "Teknik & Strategi",
        topics: [
          { id: "t093", name: "Induksi matematika" },
          { id: "t094", name: "Bukti kontradiksi dan kontraposisi" },
          { id: "t095", name: "Extremal principle" },
          { id: "t096", name: "Double counting" },
        ]
      }
    ]
  },
  {
    id: "osn-lanjut", label: "Olimpiade Lanjut", color: "#F472B6",
    sections: [
      {
        title: "Aljabar Lanjut",
        topics: [
          { id: "t097", name: "Inequalitas Schur dan Muirhead" },
          { id: "t098", name: "Persamaan fungsional lanjut" },
        ]
      },
      {
        title: "Teori Bilangan Lanjut",
        topics: [
          { id: "t099", name: "Lifting the Exponent Lemma (LTE)" },
          { id: "t100", name: "Quadratic residues" },
          { id: "t101", name: "Pell equation" },
        ]
      },
      {
        title: "Kombinatorik Lanjut",
        topics: [
          { id: "t102", name: "Teori Ramsey dasar" },
          { id: "t103", name: "Probabilistic method" },
        ]
      },
      {
        title: "Geometri Lanjut",
        topics: [
          { id: "t104", name: "Inversif dan spiral similarity" },
          { id: "t105", name: "Barycentric coordinates" },
          { id: "t106", name: "Complex numbers dalam geometri" },
        ]
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────
// TOPIC CONTENT (materi + contoh soal per topik)
// ─────────────────────────────────────────────────────────────
const TOPIC_CONTENT = {

  t001: {
    title: "Sistem Bilangan Real",
    cat: "Kelas 10 — Aljabar & Fungsi",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>Bilangan real adalah semua bilangan yang bisa direpresentasikan pada garis bilangan, mencakup bilangan rasional dan irasional.</p>
        <div class="highlight-box">
          <strong>[STRUKTUR]</strong>
          <p>ℝ (Real) ⊃ ℚ (Rasional) ⊃ ℤ (Bulat) ⊃ ℕ (Asli)</p>
          <p>ℝ juga mengandung ℝ∖ℚ = bilangan irasional (√2, π, e, ...)</p>
        </div>
        <h3>Sifat-Sifat Bilangan Real</h3>
        <ul>
          <li><strong>Komutatif:</strong> $a + b = b + a$ dan $a \cdot b = b \cdot a$</li>
          <li><strong>Asosiatif:</strong> $(a+b)+c = a+(b+c)$</li>
          <li><strong>Distributif:</strong> $a(b+c) = ab + ac$</li>
          <li><strong>Identitas:</strong> $a + 0 = a$ dan $a \cdot 1 = a$</li>
          <li><strong>Invers:</strong> $a + (-a) = 0$ dan $a \cdot \frac{1}{a} = 1$ (untuk $a \neq 0$)</li>
        </ul>
        <div class="highlight-box blue">
          <strong>[VISUAL] Garis Bilangan</strong>
          <p style="font-family:monospace">←──────[-2]──[-1]──[0]──[1]──[√2]──[2]──[π]──[3]──→</p>
          <p>Setiap titik pada garis ini adalah bilangan real.</p>
        </div>
        <h3>Sifat Urutan</h3>
        <ul>
          <li>Jika $a > b$ dan $b > c$, maka $a > c$ (transitif)</li>
          <li>Jika $a > b$, maka $a + c > b + c$</li>
          <li>Jika $a > b$ dan $c > 0$, maka $ac > bc$</li>
          <li><strong>Perhatian:</strong> jika $c < 0$, maka $ac < bc$ (tanda berubah!)</li>
        </ul>
      </div>
    `,
    examples: [
      {
        num: "Soal 1",
        problem: "Buktikan bahwa $\\sqrt{2}$ adalah bilangan irasional.",
        solution: `<div class="step"><strong>Langkah 1 — Asumsikan rasional:</strong> Misalkan $\\sqrt{2} = \\frac{p}{q}$ dengan $p, q \\in \\mathbb{Z}$, $q \\neq 0$, dan $\\gcd(p,q) = 1$.</div>
        <div class="step"><strong>Langkah 2 — Kuadratkan:</strong> $2 = \\frac{p^2}{q^2}$, maka $p^2 = 2q^2$.</div>
        <div class="step"><strong>Langkah 3:</strong> $p^2$ genap → $p$ genap → tulis $p = 2k$. Maka $4k^2 = 2q^2$ → $q^2 = 2k^2$ → $q$ genap.</div>
        <div class="step"><strong>Kesimpulan:</strong> $p$ dan $q$ sama-sama genap, kontradiksi dengan $\\gcd(p,q) = 1$. Jadi $\\sqrt{2}$ irasional. ∎</div>`
      }
    ]
  },

  t005: {
    title: "Persamaan Kuadrat",
    cat: "Kelas 10 — Aljabar & Fungsi",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>Persamaan kuadrat berbentuk $ax^2 + bx + c = 0$ dengan $a \neq 0$.</p>
        <h3>Tiga Cara Menyelesaikan</h3>
        <div class="highlight-box">
          <strong>[1] Faktorisasi</strong>
          <p>Cari dua bilangan $p, q$ sehingga $p \cdot q = ac$ dan $p + q = b$, lalu faktorkan.</p>
        </div>
        <div class="highlight-box blue">
          <strong>[2] Rumus ABC (Kuadratik)</strong>
          $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
        </div>
        <div class="highlight-box green">
          <strong>[3] Melengkapi Kuadrat</strong>
          <p>Ubah ke bentuk $(x+h)^2 = k$, lalu akarkan kedua ruas.</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal 1 — Faktorisasi",
        problem: "Selesaikan $x^2 - 5x + 6 = 0$.",
        solution: `<div class="step"><strong>Cari p·q = 6, p+q = -5:</strong> $p = -2, q = -3$</div>
        <div class="step"><strong>Faktorkan:</strong> $(x-2)(x-3) = 0$</div>
        <div class="step"><strong>Jawaban:</strong> $x = 2$ atau $x = 3$</div>`
      },
      {
        num: "Soal 2 — Rumus ABC",
        problem: "Selesaikan $2x^2 - 3x - 2 = 0$.",
        solution: `<div class="step"><strong>Identifikasi:</strong> $a=2, b=-3, c=-2$</div>
        <div class="step"><strong>Diskriminan:</strong> $D = (-3)^2 - 4(2)(-2) = 9 + 16 = 25$</div>
        <div class="step"><strong>Hitung:</strong> $x = \\frac{3 \\pm 5}{4}$</div>
        <div class="step"><strong>Jawaban:</strong> $x = 2$ atau $x = -\\frac{1}{2}$</div>`
      }
    ]
  },

  t006: {
    title: "Diskriminan dan Sifat Akar",
    cat: "Kelas 10 — Aljabar & Fungsi",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>Diskriminan $D = b^2 - 4ac$ menentukan jenis akar persamaan kuadrat $ax^2 + bx + c = 0$.</p>
        <div class="highlight-box">
          <strong>[DIAGRAM] Jenis Akar</strong>
          <p>$D > 0$ → dua akar real berbeda</p>
          <p>$D = 0$ → dua akar real sama (kembar): $x = -\\frac{b}{2a}$</p>
          <p>$D < 0$ → tidak ada akar real (akar imajiner)</p>
        </div>
        <h3>Hubungan Akar dan Koefisien (Vieta)</h3>
        <p>Jika $x_1, x_2$ adalah akar-akar $ax^2 + bx + c = 0$:</p>
        $$x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}$$
        <div class="highlight-box green">
          <strong>[TIPS OLIMPIADE]</strong>
          <p>Vieta sangat berguna di olimpiade untuk mencari nilai ekspresi yang melibatkan akar tanpa harus menghitung akarnya satu per satu.</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal Olimpiade",
        problem: "Jika $x_1, x_2$ adalah akar $x^2 - 5x + 3 = 0$, cari nilai $x_1^2 + x_2^2$.",
        solution: `<div class="step"><strong>Dari Vieta:</strong> $x_1 + x_2 = 5$ dan $x_1 x_2 = 3$</div>
        <div class="step"><strong>Gunakan identitas:</strong> $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$</div>
        <div class="step"><strong>Substitusi:</strong> $= 25 - 6 = \\boxed{19}$</div>`
      }
    ]
  },

  t028: {
    title: "Barisan Aritmetika",
    cat: "Kelas 11 — Barisan & Deret",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>Barisan aritmetika adalah barisan dengan selisih antara suku berurutan selalu sama (disebut beda, $b$).</p>
        <div class="highlight-box blue">
          <strong>[VISUAL] Contoh Barisan Aritmetika</strong>
          <p style="font-family:monospace">2, 5, 8, 11, 14, ...</p>
          <p style="font-family:monospace">   +3  +3  +3  +3  → beda b = 3</p>
        </div>
        <h3>Rumus-Rumus Penting</h3>
        <div class="highlight-box">
          <strong>[RUMUS]</strong>
          <p>Suku ke-$n$: $U_n = a + (n-1)b$</p>
          <p>Jumlah $n$ suku pertama: $S_n = \\frac{n}{2}(2a + (n-1)b) = \\frac{n}{2}(a + U_n)$</p>
          <p>di mana $a = U_1$ adalah suku pertama.</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal 1",
        problem: "Barisan aritmetika: 3, 7, 11, 15, ... Cari $U_{20}$ dan $S_{20}$.",
        solution: `<div class="step"><strong>Identifikasi:</strong> $a = 3$, $b = 4$</div>
        <div class="step"><strong>$U_{20}$:</strong> $= 3 + (20-1) \\cdot 4 = 3 + 76 = 79$</div>
        <div class="step"><strong>$S_{20}$:</strong> $= \\frac{20}{2}(3 + 79) = 10 \\times 82 = 820$</div>`
      },
      {
        num: "Soal Olimpiade",
        problem: "Jumlah 10 bilangan bulat positif berurutan adalah 155. Cari bilangan terkecilnya.",
        solution: `<div class="step"><strong>Misal:</strong> 10 bilangan berurutan = $a, a+1, ..., a+9$</div>
        <div class="step"><strong>Jumlah:</strong> $10a + (0+1+...+9) = 10a + 45 = 155$</div>
        <div class="step"><strong>Jawaban:</strong> $10a = 110 \\Rightarrow a = 11$</div>`
      }
    ]
  },

  t029: {
    title: "Barisan Geometri",
    cat: "Kelas 11 — Barisan & Deret",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>Barisan geometri adalah barisan dengan rasio antara suku berurutan selalu sama (disebut rasio, $r$).</p>
        <div class="highlight-box blue">
          <strong>[VISUAL]</strong>
          <p style="font-family:monospace">2, 6, 18, 54, 162, ...</p>
          <p style="font-family:monospace">  ×3  ×3  ×3  ×3  → rasio r = 3</p>
        </div>
        <h3>Rumus-Rumus Penting</h3>
        <div class="highlight-box">
          <strong>[RUMUS]</strong>
          <p>Suku ke-$n$: $U_n = a \cdot r^{n-1}$</p>
          <p>Jumlah $n$ suku: $S_n = a \cdot \\frac{r^n - 1}{r - 1}$ (untuk $r \\neq 1$)</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal 1",
        problem: "Barisan geometri: 2, 6, 18, ... Cari $U_6$ dan $S_6$.",
        solution: `<div class="step"><strong>Identifikasi:</strong> $a = 2$, $r = 3$</div>
        <div class="step"><strong>$U_6$:</strong> $= 2 \\cdot 3^5 = 2 \\cdot 243 = 486$</div>
        <div class="step"><strong>$S_6$:</strong> $= 2 \\cdot \\frac{3^6 - 1}{3-1} = 2 \\cdot \\frac{728}{2} = 728$</div>`
      }
    ]
  },

  t073: {
    title: "Inequalitas AM-GM",
    cat: "Olimpiade Dasar — Aljabar",
    content: `
      <div class="content-section">
        <h2>Pernyataan Utama</h2>
        <p>Untuk bilangan real non-negatif $a_1, a_2, \ldots, a_n$:</p>
        $$\\frac{a_1 + a_2 + \\cdots + a_n}{n} \\geq \\sqrt[n]{a_1 a_2 \\cdots a_n}$$
        <p>dengan kesamaan ketika $a_1 = a_2 = \cdots = a_n$.</p>
        <div class="highlight-box">
          <strong>[KUNCI] Kasus $n = 2$</strong>
          $$\\frac{a+b}{2} \\geq \\sqrt{ab} \\quad \\Leftrightarrow \\quad a + b \\geq 2\\sqrt{ab}$$
          <p>Bukti: $(\\sqrt{a} - \\sqrt{b})^2 \\geq 0$ → $a - 2\\sqrt{ab} + b \\geq 0$ → $a + b \\geq 2\\sqrt{ab}$ ✓</p>
        </div>
        <h3>Strategi Penggunaan AM-GM di Olimpiade</h3>
        <ul>
          <li>Untuk mencari nilai minimum suatu ekspresi</li>
          <li>Untuk membuktikan suatu ekspresi selalu ≥ konstanta tertentu</li>
          <li>Kunci: pilih "split" variabel dengan cerdas agar suku-suku di AM sama</li>
        </ul>
        <div class="highlight-box green">
          <strong>[TIPS OLIMPIADE]</strong>
          <p>Kalau diminta cari minimum $f(x) = x + \\frac{1}{x}$ untuk $x > 0$:</p>
          <p>AM-GM: $x + \\frac{1}{x} \\geq 2\\sqrt{x \\cdot \\frac{1}{x}} = 2$, minimum saat $x = 1$.</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal OSN",
        problem: "Untuk $a, b > 0$ dengan $a + b = 1$, buktikan $a^2 + b^2 \\geq \\frac{1}{2}$.",
        solution: `<div class="step"><strong>Gunakan AM-GM:</strong> $a^2 + b^2 \\geq 2ab$</div>
        <div class="step"><strong>Dari $(a+b)^2 = 1$:</strong> $a^2 + 2ab + b^2 = 1$</div>
        <div class="step"><strong>Kombinasi:</strong> $2(a^2+b^2) \\geq a^2 + 2ab + b^2 = 1$, jadi $a^2+b^2 \\geq \\frac{1}{2}$. ∎</div>`
      },
      {
        num: "Soal Klasik",
        problem: "Cari nilai minimum $f(x) = \\frac{x^2+1}{x}$ untuk $x > 0$.",
        solution: `<div class="step"><strong>Tulis ulang:</strong> $f(x) = x + \\frac{1}{x}$</div>
        <div class="step"><strong>AM-GM:</strong> $x + \\frac{1}{x} \\geq 2\\sqrt{x \\cdot \\frac{1}{x}} = 2$</div>
        <div class="step"><strong>Minimum = 2</strong> dicapai saat $x = \\frac{1}{x}$, yaitu $x = 1$.</div>`
      }
    ]
  },

  t079: {
    title: "Aritmetika Modular",
    cat: "Olimpiade Dasar — Teori Bilangan",
    content: `
      <div class="content-section">
        <h2>Definisi</h2>
        <p>$a \\equiv b \\pmod{m}$ dibaca "$a$ kongruen dengan $b$ modulo $m$", artinya $m \mid (a - b)$.</p>
        <div class="highlight-box blue">
          <strong>[VISUAL] Jam sebagai analogi mod 12</strong>
          <p style="font-family:monospace">13 ≡ 1 (mod 12) → jam 13 = jam 1 siang</p>
          <p style="font-family:monospace">25 ≡ 1 (mod 12) → jam 25 = jam 1 siang</p>
        </div>
        <h3>Sifat-Sifat Kongruensi</h3>
        <ul>
          <li>$a \\equiv b$ dan $c \\equiv d \\Rightarrow a+c \\equiv b+d$ dan $ac \\equiv bd \\pmod{m}$</li>
          <li>$a \\equiv b \\Rightarrow a^n \\equiv b^n \\pmod{m}$</li>
        </ul>
        <div class="highlight-box">
          <strong>[KUNCI] Digit Terakhir = mod 10</strong>
          <p>Untuk mencari digit terakhir $3^{100}$: cari $3^{100} \\pmod{10}$.</p>
          <p>Pola: $3^1=3, 3^2=9, 3^3=27, 3^4=81, 3^5=243, ...$</p>
          <p>Digit terakhir: 3,9,7,1,3,9,7,1,... (periode 4)</p>
          <p>$100 = 4 \\times 25 \\Rightarrow 3^{100} \\equiv 1 \\pmod{10}$, digit terakhir = <strong>1</strong>.</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal OSN",
        problem: "Tentukan sisa pembagian $7^{2023}$ oleh $5$.",
        solution: `<div class="step"><strong>Pola mod 5:</strong> $7^1 \\equiv 2$, $7^2 \\equiv 4$, $7^3 \\equiv 3$, $7^4 \\equiv 1 \\pmod 5$ (periode 4)</div>
        <div class="step"><strong>$2023 = 4 \\times 505 + 3$</strong>, jadi $7^{2023} \\equiv 7^3 \\equiv 3 \\pmod 5$</div>
        <div class="step"><strong>Sisa = 3</strong></div>`
      }
    ]
  },

  t083: {
    title: "Prinsip Pigeonhole",
    cat: "Olimpiade Dasar — Kombinatorik",
    content: `
      <div class="content-section">
        <h2>Pernyataan</h2>
        <p>Jika $n+1$ benda dimasukkan ke $n$ kotak, maka minimal satu kotak berisi 2 atau lebih benda.</p>
        <div class="highlight-box blue">
          <strong>[VISUAL]</strong>
          <p style="font-family:monospace">5 merpati → 4 kandang</p>
          <p style="font-family:monospace">[🐦🐦] [🐦] [🐦] [🐦]</p>
          <p>Minimal satu kandang pasti isi ≥ 2 merpati.</p>
        </div>
        <h3>Versi Umum (Generalized Pigeonhole)</h3>
        <div class="highlight-box">
          <strong>[RUMUS]</strong>
          <p>Jika $kn+1$ benda dimasukkan ke $n$ kotak, minimal satu kotak berisi $\geq k+1$ benda.</p>
        </div>
        <h3>Kunci Menggunakan Pigeonhole di Olimpiade</h3>
        <ul>
          <li>Identifikasi "benda" (objek) dan "kotak" (kategori)</li>
          <li>Pastikan jumlah benda > jumlah kotak</li>
          <li>Seringkali butuh kreativitas dalam mendefinisikan "kotak"-nya</li>
        </ul>
      </div>
    `,
    examples: [
      {
        num: "Soal Klasik",
        problem: "Dari 13 orang, buktikan ada 2 orang yang lahir di bulan yang sama.",
        solution: `<div class="step"><strong>Kotak:</strong> 12 bulan dalam setahun</div>
        <div class="step"><strong>Benda:</strong> 13 orang</div>
        <div class="step">13 > 12 → Pigeonhole: minimal satu bulan dihuni ≥ 2 orang. ∎</div>`
      },
      {
        num: "Soal OSN",
        problem: "Pilih 5 bilangan dari $\\{1, 2, ..., 8\\}$. Buktikan ada 2 yang jumlahnya 9.",
        solution: `<div class="step"><strong>Definisikan kotak:</strong> {1,8}, {2,7}, {3,6}, {4,5} → 4 pasang yang jumlahnya 9</div>
        <div class="step"><strong>5 bilangan → 4 kotak</strong> → Pigeonhole: dua bilangan jatuh di kotak yang sama → jumlahnya 9. ∎</div>`
      }
    ]
  },

  t093: {
    title: "Induksi Matematika",
    cat: "Olimpiade Dasar — Teknik & Strategi",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>Induksi matematika adalah teknik pembuktian untuk pernyataan yang berlaku untuk semua bilangan asli.</p>
        <div class="highlight-box">
          <strong>[LANGKAH WAJIB]</strong>
          <ol>
            <li><strong>Basis:</strong> Buktikan untuk $n = 1$ (atau $n = 0$)</li>
            <li><strong>Hipotesis Induksi:</strong> Asumsikan benar untuk $n = k$</li>
            <li><strong>Langkah Induksi:</strong> Buktikan benar untuk $n = k+1$ menggunakan asumsi di langkah 2</li>
          </ol>
        </div>
        <div class="highlight-box blue">
          <strong>[ANALOGI VISUAL] Domino</strong>
          <p style="font-family:monospace">|→| | | | | | | ...</p>
          <p>Basis = domino pertama jatuh. Induksi = jika satu jatuh, berikutnya juga jatuh. Maka semua jatuh.</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal Klasik",
        problem: "Buktikan $1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$ untuk semua $n \\geq 1$.",
        solution: `<div class="step"><strong>Basis ($n=1$):</strong> Ruas kiri = 1. Ruas kanan = $\\frac{1 \\cdot 2}{2} = 1$. ✓</div>
        <div class="step"><strong>Hipotesis:</strong> Asumsikan $1+2+\\cdots+k = \\frac{k(k+1)}{2}$.</div>
        <div class="step"><strong>Langkah Induksi ($n=k+1$):</strong><br/>$1+2+\\cdots+k+(k+1) = \\frac{k(k+1)}{2} + (k+1) = (k+1)\\left(\\frac{k}{2}+1\\right) = \\frac{(k+1)(k+2)}{2}$ ✓ ∎</div>`
      }
    ]
  },

  t058: {
    title: "Definisi Turunan",
    cat: "Kelas 12 — Diferensial",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>Turunan fungsi $f$ di titik $x$ adalah limit dari rasio perubahan:</p>
        $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
        <div class="highlight-box blue">
          <strong>[VISUAL] Interpretasi Geometri</strong>
          <p>Turunan di titik $x$ = kemiringan garis singgung grafik $f$ di titik $(x, f(x))$.</p>
          <p style="font-family:monospace">     f(x+h)●</p>
          <p style="font-family:monospace">           /</p>
          <p style="font-family:monospace">   f(x)●  /  ← garis tali busur</p>
          <p style="font-family:monospace">        \/</p>
          <p>Saat $h \to 0$, garis tali busur → garis singgung.</p>
        </div>
        <h3>Aturan Turunan Dasar</h3>
        <ul>
          <li>$(x^n)' = nx^{n-1}$</li>
          <li>$(f+g)' = f' + g'$</li>
          <li>$(fg)' = f'g + fg'$ (aturan perkalian)</li>
          <li>$\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ (aturan pembagian)</li>
          <li>$(f(g(x)))' = f'(g(x)) \\cdot g'(x)$ (chain rule)</li>
        </ul>
      </div>
    `,
    examples: [
      {
        num: "Soal 1",
        problem: "Dengan definisi limit, cari turunan $f(x) = x^2$.",
        solution: `<div class="step">$f'(x) = \\lim_{h\\to 0} \\frac{(x+h)^2 - x^2}{h}$</div>
        <div class="step">$= \\lim_{h\\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\lim_{h\\to 0} (2x + h) = 2x$</div>`
      }
    ]
  },

  t064: {
    title: "Integral Tak Tentu",
    cat: "Kelas 12 — Integral",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>Integral tak tentu adalah kebalikan dari turunan (antiturunan). $\int f(x)\,dx = F(x) + C$ artinya $F'(x) = f(x)$.</p>
        <div class="highlight-box">
          <strong>[RUMUS DASAR]</strong>
          <ul>
            <li>$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ (untuk $n \\neq -1$)</li>
            <li>$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$</li>
            <li>$\\int e^x\\,dx = e^x + C$</li>
            <li>$\\int \\sin x\\,dx = -\\cos x + C$</li>
            <li>$\\int \\cos x\\,dx = \\sin x + C$</li>
          </ul>
        </div>
        <div class="highlight-box blue">
          <strong>[VISUAL] Interpretasi</strong>
          <p>Integral tentu = luas daerah di bawah kurva $f(x)$ pada interval $[a,b]$.</p>
          <p style="font-family:monospace">f(x) |   ___</p>
          <p style="font-family:monospace">     |  /███\</p>
          <p style="font-family:monospace">     | /█████\</p>
          <p style="font-family:monospace">     +--a---b--→ x</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal 1",
        problem: "Hitung $\\int (3x^2 + 2x - 1)\\,dx$.",
        solution: `<div class="step">$= \\frac{3x^3}{3} + \\frac{2x^2}{2} - x + C$</div>
        <div class="step">$= x^3 + x^2 - x + C$</div>`
      }
    ]
  },

  t078: {
    title: "Keterbagian dan Algoritma Euclid",
    cat: "Olimpiade Dasar — Teori Bilangan",
    content: `
      <div class="content-section">
        <h2>Konsep Utama</h2>
        <p>$a \mid b$ ("$a$ habis membagi $b$") artinya ada $k \in \mathbb{Z}$ sehingga $b = ka$.</p>
        <h3>Sifat Keterbagian</h3>
        <ul>
          <li>$a \mid b$ dan $a \mid c \Rightarrow a \mid (mb + nc)$ untuk semua $m, n \in \mathbb{Z}$</li>
          <li>$a \mid b$ dan $b \mid c \Rightarrow a \mid c$ (transitif)</li>
        </ul>
        <h3>Algoritma Euclid</h3>
        <p>Untuk mencari $\gcd(a, b)$: gunakan pembagian berulang.</p>
        <div class="highlight-box">
          <strong>[RUMUS]</strong>
          <p>$\gcd(a, b) = \gcd(b, a \bmod b)$, terus sampai sisa = 0.</p>
        </div>
        <div class="highlight-box blue">
          <strong>[VISUAL] Contoh $\gcd(48, 18)$</strong>
          <p style="font-family:monospace">48 = 2×18 + 12</p>
          <p style="font-family:monospace">18 = 1×12 + 6</p>
          <p style="font-family:monospace">12 = 2×6  + 0  ← selesai!</p>
          <p>$\gcd(48, 18) = 6$</p>
        </div>
        <div class="highlight-box green">
          <strong>[TIPS OLIMPIADE] Identitas Bezout</strong>
          <p>Selalu ada $x, y \in \mathbb{Z}$ sehingga $ax + by = \gcd(a,b)$.</p>
          <p>Ini penting untuk persamaan Diofantus!</p>
        </div>
      </div>
    `,
    examples: [
      {
        num: "Soal OSN",
        problem: "Buktikan bahwa $\gcd(n^2+1, n+1) \mid 2$ untuk semua $n \in \mathbb{Z}$.",
        solution: `<div class="step">Misal $d = \\gcd(n^2+1, n+1)$. Maka $d \\mid (n^2+1)$ dan $d \\mid (n+1)$.</div>
        <div class="step">$d \\mid (n+1)^2 = n^2+2n+1$, maka $d \\mid (n^2+2n+1) - (n^2+1) = 2n$.</div>
        <div class="step">$d \\mid (n+1)$ dan $d \\mid 2n$ → $d \\mid 2n - 2(n+1) + 2 = 2$ → $d \\in \\{1,2\\}$ → $d \\mid 2$. ∎</div>`
      }
    ]
  }
};

// ─────────────────────────────────────────────────────────────
// FLASHCARDS
// ─────────────────────────────────────────────────────────────
const FLASHCARDS = {
  sma10: [
    { front: "Rumus diskriminan persamaan kuadrat $ax^2+bx+c=0$", back: "$D = b^2 - 4ac$\n\nD>0: dua akar real beda\nD=0: akar kembar\nD<0: tidak ada akar real" },
    { front: "Rumus jumlah dan hasil kali akar persamaan kuadrat (Vieta)", back: "$x_1+x_2 = -\\frac{b}{a}$\n\n$x_1 \\cdot x_2 = \\frac{c}{a}$" },
    { front: "Rumus fungsi invers: jika $y = f(x)$, apa $f^{-1}(x)$?", back: "Tukar $x$ dan $y$, lalu nyatakan $y$ dalam $x$.\n\nCatatan: domain $f^{-1}$ = range $f$" },
    { front: "Syarat fungsi memiliki invers", back: "Fungsi harus bijektif (injektif + surjektif)\n= Fungsi harus satu-satu (setiap nilai $y$ hanya dari satu $x$)" },
    { front: "Definisi nilai mutlak $|x|$", back: "$|x| = x$ jika $x \\geq 0$\n$|x| = -x$ jika $x < 0$\n\nInterpretasi: jarak $x$ dari titik 0 di garis bilangan" },
    { front: "Rumus aturan cosinus", back: "$c^2 = a^2 + b^2 - 2ab\\cos C$\n\nDipakai jika diketahui dua sisi dan sudut apitnya (SAS) atau tiga sisi (SSS)" },
    { front: "Rumus aturan sinus", back: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$\n\n$R$ = jari-jari lingkaran luar segitiga" },
  ],
  sma11: [
    { front: "Rumus suku ke-$n$ barisan aritmetika", back: "$U_n = a + (n-1)b$\n\n$a$ = suku pertama, $b$ = beda" },
    { front: "Rumus jumlah $n$ suku pertama barisan aritmetika", back: "$S_n = \\frac{n}{2}(2a + (n-1)b) = \\frac{n}{2}(U_1 + U_n)$" },
    { front: "Rumus suku ke-$n$ barisan geometri", back: "$U_n = a \\cdot r^{n-1}$\n\n$a$ = suku pertama, $r$ = rasio" },
    { front: "Rumus deret geometri tak hingga ($|r|<1$)", back: "$S_\\infty = \\frac{a}{1-r}$\n\nSyarat: $|r| < 1$ (rasio antara -1 dan 1)" },
    { front: "Sifat logaritma: $\\log_a (xy)$", back: "$\\log_a(xy) = \\log_a x + \\log_a y$" },
    { front: "Sifat logaritma: $\\log_a \\frac{x}{y}$", back: "$\\log_a\\frac{x}{y} = \\log_a x - \\log_a y$" },
    { front: "Rumus double angle: $\\sin 2\\theta$", back: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$" },
    { front: "Rumus double angle: $\\cos 2\\theta$", back: "$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 1-2\\sin^2\\theta = 2\\cos^2\\theta-1$" },
    { front: "Rumus $C(n,k)$ (kombinasi)", back: "$C(n,k) = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$\n\n= Banyak cara memilih $k$ dari $n$ tanpa memperhatikan urutan" },
    { front: "Teorema sisa: sisa $f(x)$ dibagi $(x-a)$", back: "Sisa = $f(a)$\n\nContoh: sisa $x^3-2x+1$ dibagi $(x-2)$ = $8-4+1=5$" },
  ],
  sma12: [
    { front: "Definisi turunan $f'(x)$", back: "$f'(x) = \\lim_{h\\to 0} \\frac{f(x+h)-f(x)}{h}$\n\nInterpretasi: kemiringan garis singgung di titik $x$" },
    { front: "Turunan $x^n$", back: "$(x^n)' = nx^{n-1}$\n\nContoh: $(x^5)' = 5x^4$" },
    { front: "Aturan rantai (chain rule)", back: "$(f(g(x)))' = f'(g(x)) \\cdot g'(x)$\n\nContoh: $\\frac{d}{dx}\\sin(x^2) = \\cos(x^2) \\cdot 2x$" },
    { front: "Integral $\\int x^n\\,dx$", back: "$\\frac{x^{n+1}}{n+1} + C$ (untuk $n \\neq -1$)\n\nContoh: $\\int x^3\\,dx = \\frac{x^4}{4} + C$" },
    { front: "Teorema Dasar Kalkulus", back: "$\\int_a^b f(x)\\,dx = F(b) - F(a)$\n\ndi mana $F$ adalah antiturunan $f$" },
    { front: "Determinan matriks $2\\times 2$: $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$", back: "$\\det = ad - bc$" },
    { front: "Invers matriks $2\\times 2$", back: "$\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$" },
  ],
  osn: [
    { front: "Pernyataan AM-GM untuk 2 variabel", back: "$\\frac{a+b}{2} \\geq \\sqrt{ab}$ untuk $a,b \\geq 0$\n\nKesamaan iff $a = b$" },
    { front: "Pernyataan Cauchy-Schwarz (Engel form / Titu's lemma)", back: "$\\frac{a_1^2}{b_1} + \\frac{a_2^2}{b_2} + \\cdots + \\frac{a_n^2}{b_n} \\geq \\frac{(a_1+\\cdots+a_n)^2}{b_1+\\cdots+b_n}$" },
    { front: "Teorema Fermat Kecil", back: "Jika $p$ prima dan $\\gcd(a,p)=1$, maka $a^{p-1} \\equiv 1 \\pmod{p}$\n\nCorollary: $a^p \\equiv a \\pmod{p}$" },
    { front: "Prinsip Pigeonhole", back: "Jika $n+1$ objek dimasukkan ke $n$ kotak, minimal 1 kotak berisi ≥ 2 objek.\n\nVersi umum: $kn+1$ objek ke $n$ kotak → ada kotak isi ≥ $k+1$" },
    { front: "Identitas $x_1+x_2$ dan $x_1x_2$ (Vieta untuk kuadrat)", back: "Untuk $ax^2+bx+c=0$:\n$x_1+x_2 = -\\frac{b}{a}$, $x_1 x_2 = \\frac{c}{a}$" },
    { front: "Chinese Remainder Theorem — kondisi ada solusi", back: "Sistem $x \\equiv a_i \\pmod{m_i}$ punya solusi unik mod $M = m_1 m_2 \\cdots m_k$ jika semua $m_i$ saling relatif prima." },
    { front: "Identitas $x^3+y^3$", back: "$x^3+y^3 = (x+y)(x^2-xy+y^2)$" },
    { front: "Identitas $x^3-y^3$", back: "$x^3-y^3 = (x-y)(x^2+xy+y^2)$" },
    { front: "Power of a Point — untuk titik di luar lingkaran", back: "Jika dari titik $P$ di luar lingkaran ditarik dua secant, memotong lingkaran di $A,B$ dan $C,D$:\n$PA \\cdot PB = PC \\cdot PD$" },
    { front: "Teorema Ptolemy", back: "Untuk segiempat siklis $ABCD$:\n$AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$" },
    { front: "Teorema Ceva", back: "Untuk $\\triangle ABC$, cevian $AD$, $BE$, $CF$ konkuren iff:\n$\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$" },
    { front: "Prinsip Extremal", back: "Pilih elemen ekstrem (terbesar/terkecil) dari himpunan, lalu deduksi sifat yang diinginkan. Berguna ketika sulit memilih elemen awal secara acak." },
  ]
};
