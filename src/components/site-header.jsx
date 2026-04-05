import Link from "next/link";

const navItems = [
  { label: "Poveste", href: "#poveste" },
  { label: "Experiente", href: "#experiente" },
  { label: "Locatie", href: "#locatie" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-[0.2em] text-white uppercase whitespace-nowrap"
        >
          Casa Ciobi
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm tracking-widest text-white uppercase">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-white/70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5 text-sm tracking-widest text-white uppercase">
          <span className="hidden md:inline">RO</span>
          <a
            href="#contact"
            className="border border-white/60 px-4 py-2 transition hover:bg-white hover:text-foreground"
          >
            Rezerva
          </a>
        </div>
      </div>
    </header>
  );
}
