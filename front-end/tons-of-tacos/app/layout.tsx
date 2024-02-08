import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "../components/main-header/main-header";
import { inter } from "../components/ui/fonts/fonts";
import { GlobalContextProvider } from "@/context/store";

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
      <GlobalContextProvider>
        <body className={`${inter.variable}`}>
          <MainHeader />
          <div className="children">{children}</div>
        </body>
      </GlobalContextProvider>
    </html>
  );
}
