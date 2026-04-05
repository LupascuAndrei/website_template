import { Mail, MapPin, Phone } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const footerNav = [
  { label: "Poveste", href: "#poveste" },
  { label: "Experiente", href: "#experiente" },
  { label: "Locatie", href: "#locatie" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <span className="block text-3xl font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
            Casa Ciobi
          </span>
          <p className="mt-6 text-sm leading-relaxed text-background/70">
            Un refugiu simplu si elegant, povestit de Andrei si Vladut.
            Liniste, rafinament si detalii calde.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm tracking-[0.25em] uppercase text-background/60">
            Contact
          </h3>
          <ul className="space-y-3 text-base text-background/90">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              <span>Undeva frumos, Romania</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+40 700 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:salut@example.com" className="hover:underline">
                salut@example.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm tracking-[0.25em] uppercase text-background/60">
            Navigare
          </h3>
          <ul className="space-y-3 text-base">
            {footerNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-background/90 transition hover:text-background"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm tracking-[0.25em] uppercase text-background/60">
            Aboneaza-te
          </h3>
          <p className="mb-4 text-sm text-background/70">
            Povesti, momente si mici surprize, direct in inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Emailul tau"
              className="w-full border border-background/30 bg-transparent px-3 py-2 text-sm text-background placeholder:text-background/50 focus:border-background focus:outline-none"
            />
            <button
              type="submit"
              className="border border-background/30 border-l-0 bg-background/10 px-4 text-sm tracking-widest uppercase transition hover:bg-background hover:text-foreground"
            >
              OK
            </button>
          </form>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-background/70">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-background/70">
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs tracking-widest uppercase text-background/60 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} Casa Ciobi. Toate drepturile rezervate.</span>
          <span>Facut cu drag de Andrei &amp; Vladut</span>
        </div>
      </div>
    </footer>
  );
}
