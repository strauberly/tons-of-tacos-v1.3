import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "../components/main-header/main-header";
import { inter } from "../components/fonts/fonts";
import { GlobalContextProvider, useGlobalContext } from "@/context/store";

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
    <html lang="en">
      <body className={`${inter.variable}`}>
        <GlobalContextProvider>
          <div className="children">{children}</div>
          <MainHeader />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
