import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/60 blur-3xl dark:bg-accent/40"
      />

      {/* header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">salut</span>
        </div>
        <ThemeToggle />
      </header>

      {/* hero */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary" />
            un site nou, facut cu drag
          </span>

          <h1 className="bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-6xl font-semibold tracking-tight text-transparent md:text-8xl">
            salut, vladut
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Un site de prezentare simplu, rapid si frumos. Construit cu
            Next.js, Tailwind v4 si shadcn/ui.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Incepe aici
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Afla mai multe
            </Button>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="relative z-10 px-6 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} salut. Toate drepturile rezervate.
      </footer>
    </div>
  );
}
