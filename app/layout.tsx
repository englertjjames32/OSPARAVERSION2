import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "OSPARA V2",
  description: "Mobile-first service business app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="app-shell">{children}</main>
      </body>
    </html>
  );
}
