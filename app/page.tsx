npx create-next-app eloise-site
cd eloise-site
npm install framer-motion lucide-react
npm run dev
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const signals = [
  {
    id: "science",
    page: "01",
    title: "Science",
    eyebrow: "Private archive",
    description:
      "Life science, research curiosity, and the quiet precision of wanting to understand what lives beneath the surface.",
    accent: "from-[#f3ecdf] via-[#fbf7f0] to-[#efe5d6]",
    link: "#science",
    meta: ["Life Sciences", "Research-minded", "Quiet precision"],
  },
  {
    id: "creative",
    page: "02",
    title: "Creative",
    eyebrow: "Visual language",
    description:
      "Design, baking, images, pages, textures, and the instinct to make everything feel soft, considered, and memorable.",
    accent: "from-[#ead8c7] via-[#f8f1e8] to-[#efe2d5]",
    link: "#creative",
    meta: ["Design", "Baking", "Aesthetic work"],
  },
  {
    id: "montreal",
    page: "03",
    title: "Montreal",
    eyebrow: "Current chapter",
    description:
      "Student life, cafés, cold light, campus afternoons, and the editorial mood of living and becoming in a new city.",
    accent: "from-[#ebe6de] via-[#f8f4ee] to-[#f2ede7]",
    link: "#montreal",
    meta: ["McGill", "Student life", "City diary"],
  },
  {
    id: "future",
    page: "04",
    title: "Future",
    eyebrow: "Long horizon",
    description:
      "Ambition shaped by beauty, science, and a life that feels global, thoughtful, and deeply your own.",
    accent: "from-[#efe1d8] via-[#fbf7f2] to-[#f2e9df]",
    link: "#future",
    meta: ["Ambition", "Global path", "Elegant direction"],
  },
];

function BookPage({ item, index, current, onOpen }) {
  const turned = index < current;
  const active = index === current;

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      whileHover={{ y: -5, rotateZ: active ? 0 : -0.4 }}
      className="absolute inset-0 m-auto h-[460px] w-[312px] origin-left cursor-pointer rounded-r-[24px] rounded-l-[10px] border border-[#b7a894]/25 bg-[#fffdf9]/85 text-left shadow-[0_22px_70px_rgba(62,42,24,0.16)] backdrop-blur transition-transform duration-700 [transform-style:preserve-3d] focus:outline-none"
      style={{
        zIndex: active ? 60 : 40 - index,
        transform: `perspective(2000px) rotateY(${turned ? -162 : active ? -7 : 0}deg) translateX(${index * 6}px)`,
        boxShadow: active
          ? "0 34px 90px rgba(65,45,28,0.18)"
          : "0 20px 48px rgba(65,45,28,0.10)",
      }}
    >
      <div className="relative flex h-full overflow-hidden rounded-r-[24px] rounded-l-[10px] [transform-style:preserve-3d]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.accent}`}
          style={{ backfaceVisibility: "hidden" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.65),transparent_30%,transparent_70%,rgba(118,90,63,0.05))]" />
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#5d4938]/18 to-transparent" />
        <div className="absolute left-5 top-5 h-[calc(100%-40px)] w-[calc(100%-40px)] rounded-[18px] border border-[#9f8d79]/15" />

        <div className="relative flex h-full w-full flex-col justify-between p-8" style={{ backfaceVisibility: "hidden" }}>
          <div>
            <div className="mb-10 flex items-center justify-between text-[11px] uppercase tracking-[0.34em] text-[#8a7660]">
              <span>{item.eyebrow}</span>
              <span>{item.page}</span>
            </div>
            <div className="mb-8 h-px w-16 bg-[#b49c81]/45" />
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#9c8874]">Signal</p>
            <h3 className="max-w-[190px] text-[2.35rem] font-semibold leading-[0.94] tracking-[-0.08em] text-[#2e241d]">
              {item.title}
            </h3>
            <p className="mt-6 max-w-[220px] text-sm leading-7 text-[#5d5147]">
              {item.description}
            </p>
          </div>

          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {item.meta.map((entry) => (
                <span
                  key={entry}
                  className="rounded-full border border-[#b8a591]/35 bg-white/55 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#78695c]"
                >
                  {entry}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#342921]">
              <span>Enter chapter</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-r-[24px] rounded-l-[10px] border border-black/5 bg-[linear-gradient(160deg,#241b16_0%,#32261f_42%,#1d1713_100%)] px-8 py-9 text-stone-100"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#cdb8a1]/60">Inside the archive</p>
              <h4 className="mt-4 text-[2rem] font-semibold tracking-[-0.06em]">{item.title}</h4>
              <p className="mt-4 max-w-[220px] text-sm leading-7 text-stone-300">
                This side can later hold a quote, miniature gallery, project list, or a short personal note before opening the full section.
              </p>
            </div>
            <div>
              <div className="mb-3 h-px w-16 bg-[#c8b29c]/30" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#cdb8a1]/55">Eloise Private Edition</p>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export default function Eloise3DBookWebsite() {
  const [current, setCurrent] = useState(0);
  const active = signals[current];

  const sectionMap = useMemo(
    () => ({
      science: {
        title: "Science",
        body:
          "A refined academic chapter for your coursework, research interests, lab experience, and the scientific questions that genuinely move you.",
      },
      creative: {
        title: "Creative",
        body:
          "A curated space for baking, design, visual storytelling, posters, videos, and the softer polished parts of your identity.",
      },
      montreal: {
        title: "Montreal",
        body:
          "A city diary made of campus light, routines, cafés, small rituals, and the atmosphere of building a life in Montreal.",
      },
      future: {
        title: "Future",
        body:
          "A long-form vision page for your ambitions, future paths, international plans, and the kind of elegant life you want to create.",
      },
    }),
    []
  );

  const goPrev = () => setCurrent((p) => (p === 0 ? signals.length - 1 : p - 1));
  const goNext = () => setCurrent((p) => (p === signals.length - 1 ? 0 : p + 1));

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.78),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(228,211,191,0.45),transparent_26%),linear-gradient(135deg,#e9e0d4_0%,#f6f1ea_38%,#ece1d3_100%)] text-[#2e241d]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex flex-col gap-5 rounded-[32px] border border-white/60 bg-white/40 px-6 py-5 shadow-[0_14px_45px_rgba(68,48,34,0.09)] backdrop-blur-xl md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#8f7c69]">Museum Book × Editorial Portfolio</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.06em] md:text-3xl">Eloise — Opening Chapter</h1>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm text-stone-700">
            {signals.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrent(index)}
                className={`rounded-full px-4 py-2 transition ${
                  index === current
                    ? "bg-[#2e241d] text-white"
                    : "border border-[#b8a48f]/40 bg-white/65 text-[#66584d] hover:bg-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </motion.header>

        <section className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10"
          >
            <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-[#8f7c69]">Collector’s edition</p>
            <h2 className="max-w-xl text-5xl font-semibold leading-[0.92] tracking-[-0.09em] md:text-7xl">
              A website that opens like a rare book.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5f544a] md:text-lg">
              This version blends a museum-archive mood with a clean editorial layout.
              The landing page feels like a private volume: tactile, refined, softly dramatic, and distinctly personal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={goPrev}
                className="inline-flex items-center gap-2 rounded-full border border-[#b9a690]/45 bg-white/72 px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 rounded-full bg-[#2e241d] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#241b16]"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 rounded-[30px] border border-white/60 bg-white/46 p-6 shadow-[0_14px_40px_rgba(68,48,34,0.08)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8f7c69]">Current chapter</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em]">{sectionMap[active.id].title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5e5349] md:text-base">
                    {sectionMap[active.id].body}
                  </p>
                  <a
                    href={active.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2e241d]"
                  >
                    Jump to section <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex min-h-[600px] items-center justify-center"
          >
            <div className="absolute bottom-14 h-10 w-[430px] rounded-full bg-black/12 blur-2xl" />
            <div className="relative h-[540px] w-[382px] [transform-style:preserve-3d]">
              <div className="absolute -left-5 top-7 h-[462px] w-6 rounded-l-[14px] bg-[linear-gradient(180deg,#4b392c_0%,#2a211b_45%,#17120f_100%)] shadow-[0_24px_44px_rgba(35,24,17,0.3)]" />
              <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(145deg,rgba(255,251,245,0.78),rgba(240,231,221,0.62))] shadow-[0_35px_70px_rgba(56,39,25,0.12)]" />
              {signals.map((item, index) => (
                <BookPage key={item.id} item={item} index={index} current={current} onOpen={setCurrent} />
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {signals.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.08 }}
              className="rounded-[28px] border border-white/60 bg-white/44 p-6 shadow-[0_12px_32px_rgba(68,48,34,0.06)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/62"
            >
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8f7c69]">{item.page}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.06em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5e5349]">{item.description}</p>
            </motion.a>
          ))}
        </section>
      </div>
    </div>
  );
}
