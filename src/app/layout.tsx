import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ImagePreloader } from "@/components/ImagePreloader";
import { Analytics } from "@vercel/analytics/next";
import { MicrosoftClarity } from "@/components/MicrosoftClarity";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jen Jones - UX/UI AI Design Development Consulting",
  description: "Test fast, learn faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <ThemeProvider>
          <ImagePreloader />
          {children}
          <Analytics />
          <MicrosoftClarity />
        </ThemeProvider>
      </body>
    </html>
  );
}
