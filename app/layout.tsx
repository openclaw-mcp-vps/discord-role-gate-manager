import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Gate Manager – Automated Role Gating for Communities",
  description: "Automate Discord role assignments based on payment status, form completions, or custom criteria. Built for server owners with paid communities and courses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8c6638e7-e51b-4857-9157-0dd107ae39f3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
