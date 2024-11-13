import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "../components/main-header/main-header";
import { inter } from "../components/ui/fonts/fonts";
// import { MenuContextProvider } from "@/context/menu-context";
import { Providers } from "@/context/providers";
import Alert from "@/components/alert/alert";
import { AlertContextProvider, useAlertContext } from "@/context/alert-context";
import Card from "@/components/ui/cards/card";
import FadeOnLoad from "@/components/ui/animations/fade-on-load";
import { useDisplayContext } from "@/context/display-context";

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
          <Alert />
          <div className="children">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
