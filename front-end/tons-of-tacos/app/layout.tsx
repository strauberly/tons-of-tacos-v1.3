import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "../components/main-header/main-header";
import { inter } from "../components/fonts/fonts";
import classes from "../components/main-header/main-header.module.css";
import getCategories from "@/lib/getCategories";
import { GlobalContextProvider } from "@/context/store";

export const metadata: Metadata = {
  title: "Tons Of Tacos",
  description: "Our delicious food brought to you.",
};

const categoriesData: Promise<Category[]> = await getCategories();
const categories = await categoriesData;

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
          <MainHeader menuCategories={categories} />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
