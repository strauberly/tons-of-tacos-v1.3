import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "../components/main-header/main-header";
import { inter } from "../components/ui/fonts/fonts";
import { GlobalContextProvider } from "@/context/store";
import { MenuContextProvider } from "@/context/menu-store";
import { CartContextProvider } from "@/context/cart-context";

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
        <CartContextProvider>
          <GlobalContextProvider>
            <MainHeader />
          </GlobalContextProvider>
          <MenuContextProvider>
            <div className="children">{children}</div>
          </MenuContextProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
