
const projects = [
  {
    number: "01",
    title: "Inventaris Toko Pertanian Mbah Meth",
    category: "WEB DEVELOPMENT",
    description:
      "Sistem informasi inventaris untuk membantu pengelolaan data barang dan stok toko pertanian.",
    tags: ["PHP", "MySQL"],
    color: "from-emerald-400/20 to-teal-500/5",
    icon: "🌱",
    href: "/projects/mbah-meth",
  },
  {
    number: "02",
    title: "K_Rent",
    category: "RENTAL APPLICATION",
    description:
      "Aplikasi penyewaan kostum dengan katalog, pilihan tanggal sewa, pembayaran, dan pengelolaan produk.",
    tags: ["Project Manager", "Mobile App"],
    color: "from-violet-400/20 to-fuchsia-500/5",
    icon: "👗",
    href: "/projects/k-rent",
  },
  {
    number: "03",
    title: "JosLearn",
    category: "EDUCATION PLATFORM",
    description:
      "Platform web dan mobile untuk mendukung pengelolaan absensi dan laporan nilai siswa.",
    tags: ["Web", "Mobile App"],
    color: "from-sky-400/20 to-blue-500/5",
    icon: "🎓",
    href: "/projects/joslearn",
  },
];

const skills = [
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "Laravel",
  "Flutter",
  "MySQL",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080B1A] font-sans text-white selection:bg-violet-500/40">
      <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080B1A]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3 font-bold tracking-wide">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm">
              F.
            </span>
            <span>Farin<span className="text-violet-400">.dev</span></span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-violet-300">Home</a>
            <a href="#about" className="transition hover:text-violet-300">About</a>
            <a href="#skills" className="transition hover:text-violet-300">Skills</a>
            <a href="#projects" className="transition hover:text-violet-300">Projects</a>
            <a href="#contact" className="transition hover:text-violet-300">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-violet-400/40 px-4 py-2 text-xs font-semibold text-violet-200 transition hover:bg-violet-500/15 sm:text-sm"
          >
            Let&apos;s Connect ↗
          </a>
        </div>
      </nav>

      <section id="home" className="relative isolate">
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-blue-600/15 blur-[110px]" />

        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-4 py-2 text-sm text-violet-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Informatics Engineering Student
            </div>

            <p className="mb-3 text-lg text-slate-300">Halo, saya</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Farin Sevany
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Kasih.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Mahasiswa D4 Teknik Informatika yang tertarik membangun website
              dan aplikasi digital yang fungsional, bermanfaat, dan mudah digunakan.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:shadow-violet-500/20"
              >
                Jelajahi Proyek ↗
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400/50 hover:bg-white/5"
              >
                Tentang Saya
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>✦ Web Development</span>
              <span>✦ Mobile Application</span>
              <span>✦ Project Collaboration</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-violet-600/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.02] p-5 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-slate-200">My Developer Space</span>
                <span className="text-xs text-violet-300">PORTFOLIO / 2026</span>
              </div>

              <div className="my-6 flex aspect-square flex-col items-center justify-center rounded-3xl border border-violet-300/15 bg-gradient-to-br from-blue-500/15 via-[#171536] to-violet-500/20 p-6 text-center">
                <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-violet-300/40 bg-gradient-to-br from-blue-500/30 to-violet-600/40 text-4xl font-bold shadow-xl shadow-violet-900/40">
                  F.
                </div>
                <h2 className="text-2xl font-bold">Creative Learner.</h2>
                <p className="mt-2 text-sm text-slate-400">Building ideas into digital experiences.</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-200">Web</span>
                  <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-200">Mobile</span>
                  <span className="rounded-full bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200">UI / UX</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/[0.08] bg-black/15 p-3 text-center">
                  <p className="text-2xl font-bold text-blue-300">03</p>
                  <p className="mt-1 text-xs text-slate-400">Projects</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-black/15 p-3 text-center">
                  <p className="text-2xl font-bold text-violet-300">07</p>
                  <p className="mt-1 text-xs text-slate-400">Tech Skills</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-black/15 p-3 text-center">
                  <p className="text-2xl font-bold text-fuchsia-300">∞</p>
                  <p className="mt-1 text-xs text-slate-400">Ideas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/[0.07] bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">A Little About Me</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Belajar, Berkarya,
              <span className="block text-slate-400">Terus Bertumbuh.</span>
            </h2>
          </div>
          <p className="leading-8 text-slate-400">
            Saya menempuh pendidikan D4 Teknik Informatika di Politeknik Negeri
            Jember, PSDKU Nganjuk. Saya senang belajar teknologi, berkolaborasi
            dalam proyek, dan mengembangkan solusi digital sebagai bagian dari
            perjalanan saya di bidang teknologi informasi.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">What I Work With</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Skills & Technologies</h2>
          <p className="mt-3 text-slate-400">Teknologi yang saya pelajari dan gunakan dalam proyek.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/[0.07] bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Selected Work</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Proyek Pilihan Saya</h2>
              <p className="mt-3 text-slate-400">Beberapa proyek dalam perjalanan belajar dan berkolaborasi.</p>
            </div>
            <span className="text-sm text-slate-500">03 Featured Projects ↘</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#10152A] transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-950/20"
              >
                <div className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.16),transparent_60%)]" />
                  <span className="relative text-6xl transition duration-300 group-hover:scale-110">{project.icon}</span>
                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                    PROJECT {project.number}
                  </span>
                  <span className="absolute bottom-4 right-5 text-sm text-slate-400">↗</span>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-violet-300">{project.category}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug">{project.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-slate-200 transition hover:text-violet-300"
                  >
                    Lihat Detail Proyek <span className="transition group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">
            Catatan: halaman detail proyek akan kita buat pada tahap berikutnya.
          </p>
        </div>
      </section>

      <section id="contact" className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Get In Touch</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Let&apos;s Build Something Meaningful.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Terbuka untuk belajar, berkolaborasi, dan bertukar ide tentang pengembangan web maupun aplikasi.
          </p>
          <a
            href="mailto:farinsevanykasih@gmail.com"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-4 text-sm font-semibold shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5"
          >
            Hubungi Saya ↗
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Farin Sevany Kasih</p>
          <p>Designed with curiosity &amp; built with Next.js.</p>
          <a href="#home" className="transition hover:text-violet-300">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
