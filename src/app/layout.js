import { EB_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Casa Ciobi — Andrei & Vladut",
  description:
    "Casa Ciobi — un refugiu simplu si elegant, povestit de Andrei si Vladut.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ro"
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-serif">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
