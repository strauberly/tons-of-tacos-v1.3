import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "../components/main-header/main-header";
import { inter } from "../components/ui/fonts/fonts";
import { MenuContextProvider } from "@/context/menu-context";
import { CartContextProvider } from "@/context/cart-context";
import { Providers } from "@/context/providers";

export const metadata: Metadata = {
  title: "Tons Of Tacos",
  description: "Our delicious food brought to you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="html">
      <body className={`${inter.variable}`}>
        <Providers>
          <MainHeader />
          <MenuContextProvider>
            <div className="children">{children}</div>
          </MenuContextProvider>
        </Providers>
      </body>
    </html>
  );
}
