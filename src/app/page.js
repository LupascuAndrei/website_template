import { ArrowRight, Check } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Placeholder images — swap with real ones later.
const HERO_IMG = "https://picsum.photos/seed/salut-hero/1920/1200";
const ABOUT_IMG = "https://picsum.photos/seed/salut-about/1200/900";
const FEATURE_IMG = "https://picsum.photos/seed/salut-feature/1600/1100";

const experiences = [
  {
    title: "Camera Andrei",
    meta: "2 persoane · 28 m²",
    img: "https://picsum.photos/seed/salut-room-1/900/700",
    desc: "Liniste, lumina naturala si detalii calde pentru o sedere relaxata.",
  },
  {
    title: "Camera Vladut",
    meta: "2 persoane · 32 m²",
    img: "https://picsum.photos/seed/salut-room-2/900/700",
    desc: "Un spatiu generos, cu vedere catre gradina si un colt de lectura.",
  },
  {
    title: "Suita Ciobi",
    meta: "3 persoane · 45 m²",
    img: "https://picsum.photos/seed/salut-room-3/900/700",
    desc: "Cea mai ampla alegere, potrivita pentru escapade prelungite si seri lungi.",
  },
];

const benefits = [
  "Locatie linistita, departe de aglomeratie",
  "Mic dejun proaspat, cu ingrediente locale",
  "Atmosfera calda si detalii lucrate cu grija",
  "Servicii personalizate, la un telefon distanta",
  "Gradina interioara, perfecta pentru cafea si povesti",
];

const galleryImgs = [
  "https://picsum.photos/seed/salut-g1/800/1000",
  "https://picsum.photos/seed/salut-g2/800/1000",
  "https://picsum.photos/seed/salut-g3/800/1000",
  "https://picsum.photos/seed/salut-g4/800/1000",
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={HERO_IMG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* stronger overlays for legibility */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
          <p className="mb-6 text-sm tracking-[0.35em] uppercase text-white/90">
            Andrei &amp; Vladut va ureaza
          </p>
          <h1 className="text-6xl leading-[1.05] font-medium md:text-8xl">
            Casa Ciobi
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/95 md:text-xl">
            Un refugiu simplu si elegant, unde fiecare detaliu e gandit sa
            te faca sa te simti acasa.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#experiente"
              className="inline-flex items-center gap-2 bg-white px-8 py-3 text-sm tracking-[0.2em] uppercase text-foreground transition hover:bg-white/90"
            >
              Descopera
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/70 px-8 py-3 text-sm tracking-[0.2em] uppercase text-white transition hover:bg-white hover:text-foreground"
            >
              Rezerva
            </a>
          </div>
        </div>
      </section>

      {/* WELCOME / POVESTE */}
      <section id="poveste" className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <div>
            <p className="mb-4 text-xs tracking-[0.35em] uppercase text-primary">
              Povestea noastra
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Bine ati venit la Casa Ciobi
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Casa Ciobi s-a nascut dintr-o prietenie si dintr-o dorinta simpla:
                sa oferim oamenilor un loc in care timpul incetineste. Un loc
                unde detaliile conteaza, unde cafeaua are gust de dimineata
                linistita, iar serile se termina cu zambete.
              </p>
              <p>
                Andrei si Vladut au gandit fiecare colt cu grija — de la
                textura lemnului la lumina care se strecoara printre perdele,
                pentru ca tu sa te simti exact asa cum iti doresti.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
            <img
              src={ABOUT_IMG}
              alt="Povestea Casa Ciobi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENTE (room cards) */}
      <section id="experiente" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs tracking-[0.35em] uppercase text-primary">
              Experientele noastre
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Simplu, dar rafinat
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Trei spatii, trei povesti. Alege-ti coltul potrivit si lasa
              restul in seama noastra.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {experiences.map((exp) => (
              <article key={exp.title} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl">{exp.title}</h3>
                  <p className="mt-1 text-sm tracking-widest uppercase text-muted-foreground">
                    {exp.meta}
                  </p>
                  <p className="mt-4 text-muted-foreground">{exp.desc}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary transition hover:text-foreground"
                  >
                    Vezi detalii
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPLIT / LOCATIE */}
      <section id="locatie" className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img
              src={FEATURE_IMG}
              alt="Locatia noastra"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center bg-foreground text-background">
            <div className="mx-auto max-w-xl px-8 py-20 md:px-16 md:py-32">
              <p className="mb-4 text-xs tracking-[0.35em] uppercase text-background/60">
                Locatia
              </p>
              <h2 className="text-4xl leading-tight md:text-5xl">
                La o aruncatura de bat de tot ce conteaza
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-background/80">
                Suficient de aproape cat sa ajungi repede, suficient de
                departe cat sa uiti de zgomot. Exact asa cum ar trebui sa fie
                un refugiu.
              </p>
              <ul className="mt-10 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-background/70" />
                    <span className="text-background/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.35em] uppercase text-primary">
              Galerie
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Momente de la noi
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImgs.map((src, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <h2 className="text-4xl leading-tight md:text-6xl">
            Ne vedem curand?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/85">
            Scrie-ne un rand si iti raspundem cu cele mai bune date
            disponibile.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 bg-background px-8 py-3 text-sm tracking-[0.2em] uppercase text-foreground transition hover:bg-background/90"
          >
            Contacteaza-ne
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
