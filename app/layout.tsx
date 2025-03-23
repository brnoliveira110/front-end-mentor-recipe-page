import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Page",
  description: "Make a delicious omelette",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased  md:bg-stone-100 md:py-[128px] md:px-[48px]">
        {children}
      </body>
    </html>
  );
}
