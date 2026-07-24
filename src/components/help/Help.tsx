import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

/**
 * ABOUT US PAGE — "Fieldwork Studio" concept
 * ---------------------------------------------------------------
 * Design tokens (adjust freely to match your real brand):
 *   Background   #14171C  (charcoal-navy, not pure black)
 *   Foreground   #F4F1EA  (warm paper white)
 *   Accent gold  #C9A24B  (used sparingly — labels, rules, hovers)
 *   Accent teal  #4E8C82  (secondary accent — quotes, tags)
 *   Display font Fraunces (serif, characterful, used with restraint)
 *   Body font    Inter
 *   Utility font IBM Plex Mono (eyebrows, labels, timestamps)
 *
 * Swap the placeholder copy, names, and photos for real content.
 * Everything else (spacing, animation, structure) should just work
 * once dropped into an existing Next.js + Tailwind app.
 * ---------------------------------------------------------------
 */

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const team = [
  {
    name: "Nadia Osei",
    role: "Co-founder, Research",
    initials: "NO",
    note: "Spends more time in the field than at her desk. Started the studio after a decade doing ethnographic work for museums.",
  },
  {
    name: "Marcus Lindqvist",
    role: "Co-founder, Product",
    initials: "ML",
    note: "Believes every good interface starts as a bad sketch on a napkin. Still has the napkins.",
  },
  {
    name: "Priya Chandran",
    role: "Design Lead",
    initials: "PC",
    note: "Trained as an architect. Thinks in floor plans even when the deliverable is a mobile screen.",
  },
  {
    name: "Tomás Reyes",
    role: "Engineering Lead",
    initials: "TR",
    note: "Reads changelogs for fun. Keeps the studio's tools sharper than anyone asked for.",
  },
];

const values = [
  {
    tag: "Curiosity",
    text: "We show up before we have an opinion. Every project starts with questions we don't yet know the answer to.",
  },
  {
    tag: "Rigor",
    text: "Good instincts still get checked. We test what we build against the people who'll actually use it.",
  },
  {
    tag: "Craft",
    text: "Details compound. The parts no one asked about are usually the parts people remember.",
  },
  {
    tag: "Candor",
    text: "We say the true thing early, even when it's inconvenient. Especially then.",
  },
];

const Help = () => {
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} bg-[#14171C] text-[#F4F1EA] font-[family-name:var(--font-body)]`}
    >
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden border-b border-[#F4F1EA]/10">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-24 sm:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-[#C9A24B] uppercase">
                N 40.71&deg; · Est. 2019 · Fieldwork Studio
              </p>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                We start in the field,
                <br />
                <span className="italic text-[#F4F1EA]/70">
                  not the studio.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#F4F1EA]/70">
                Fieldwork is a small product and research studio. We spend our
                first week on any project somewhere other than a laptop —
                talking to the people wholl actually live with what we build.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="ml-auto h-56 w-full max-w-xs border border-[#F4F1EA]/15 bg-[#F4F1EA]/[0.03] p-6 sm:h-64">
                <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-widest text-[#4E8C82] uppercase">
                  Field note
                </p>
                <p className="mt-4 font-[family-name:var(--font-display)] italic text-[#F4F1EA]/80">
                  &ldquo;The best brief is the one you write yourself, after
                  watching someone struggle for an afternoon.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STORY ---------------- */}
      <section className="border-b border-[#F4F1EA]/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-[#C9A24B] uppercase">
                How we started
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[#F4F1EA]/80">
                <span className="float-left mr-3 mt-1 font-[family-name:var(--font-display)] text-6xl leading-[0.8] text-[#F4F1EA]">
                  I
                </span>
                t began with a shared frustration: too many good products were
                designed in rooms far away from the people  use them. Our
                founders had spent years in research and product roles at larger
                companies, watching the same pattern repeat — a beautiful deck,
                a rushed build, a launch nobody asked for.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[#F4F1EA]/80">
                So they started Fieldwork with one rule: no project begins at a
                desk. Five years later, that rule is still the whole method.
                 since worked with startups, hospitals, and city
                governments — different problems, same first step.
              </p>
            </div>
            <div className="lg:col-span-5 lg:pl-8">
              <div className="border-l-2 border-[#4E8C82] pl-6">
                <p className="font-[family-name:var(--font-display)] text-2xl italic leading-snug text-[#F4F1EA]/90">
                  &ldquo;We don design for users. We design with them, sitting
                  in the same room.&rdquo;
                </p>
                <p className="mt-4 font-[family-name:var(--font-mono)] text-xs tracking-widest text-[#F4F1EA]/50 uppercase">
                  — Nadia Osei, Co-founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- VALUES ---------------- */}
      <section className="border-b border-[#F4F1EA]/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-[#C9A24B] uppercase">
            What we hold onto
          </p>
          <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
            Four things that don change project to project.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.tag}
                className="group border border-[#F4F1EA]/15 bg-[#F4F1EA]/[0.02] p-6 transition-colors hover:border-[#C9A24B]/50 hover:bg-[#F4F1EA]/[0.04]"
              >
                <p className="font-[family-name:var(--font-display)] text-xl italic text-[#C9A24B]">
                  {v.tag}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#F4F1EA]/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TEAM ---------------- */}
      <section className="border-b border-[#F4F1EA]/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-[#C9A24B] uppercase">
             here
          </p>
          <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
            A small, deliberately small, team.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[#F4F1EA]/15 bg-[#F4F1EA]/10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <div
                key={person.name}
                className="group relative flex flex-col justify-between bg-[#14171C] p-6"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center border border-[#F4F1EA]/20 font-[family-name:var(--font-display)] text-lg text-[#F4F1EA]/70"
                  aria-hidden="true"
                >
                  {person.initials}
                </div>
                <div className="mt-8">
                  <p className="font-[family-name:var(--font-display)] text-lg">
                    {person.name}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] tracking-widest text-[#4E8C82] uppercase">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#F4F1EA]/55 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40">
                    {person.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="flex flex-col items-start justify-between gap-8 border border-[#F4F1EA]/15 bg-[#F4F1EA]/[0.03] p-10 sm:flex-row sm:items-center sm:p-14">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
                Come work in the field with us.
              </h2>
              <p className="mt-3 max-w-md text-[#F4F1EA]/65">
                 always glad to meet people  rather ask a good
                question than ship a fast answer.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 border border-[#C9A24B] px-6 py-3 font-[family-name:var(--font-mono)] text-xs tracking-widest text-[#C9A24B] uppercase transition-colors hover:bg-[#C9A24B] hover:text-[#14171C]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Help;
