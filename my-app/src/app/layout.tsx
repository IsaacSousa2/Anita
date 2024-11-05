import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anita's Page",
  description: "Um sistema criado por um homem apaixonado para demonstrar amor to sua gatinha S2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`font-semibold`} >
        {children}
      </body>
    </html>
  );
}
