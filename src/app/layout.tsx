import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { EnvVarWarning } from "@/components/env-var-warning";
import AuthButton from "@/components/header-auth";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CPPA - Cognitive Product Positioning Assistant",
  description:
    "AI-powered competitive intelligence and positioning platform for insurance products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <header className="pl-4 px-4 sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 flex">
                  <Link
                    href="/cppa/dashboard"
                    className="flex items-center space-x-2"
                  >
                    <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Cognitive Product Positioning Assistant</span>
                  </Link>
                </div>

                <div className="flex-1"></div>

                <div className="flex items-center justify-end space-x-4">
                  <div className="hidden md:flex items-center"></div>

                  <nav className="flex items-center space-x-2">
                    {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
                    <ThemeSwitcher />
                  </nav>
                </div>
              </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
              <Navigation />

              <main className="flex-1 overflow-y-auto">
                <div className="container max-w-screen-2xl mx-auto">
                  {children}
                </div>
              </main>
            </div>

            <footer className="border-t py-4">
              <div className="container flex items-center justify-center max-w-screen-2xl text-center text-xs gap-8">
                <p>
                  Powered by{" "}
                  <a
                    href="https://alchemistudio.ai"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Alchemi
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}