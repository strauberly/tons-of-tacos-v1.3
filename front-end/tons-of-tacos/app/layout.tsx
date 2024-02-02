import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "../components/main-header/main-header";
import { inter } from "../components/fonts/fonts";
import useCategoriesSource from "@/lib/getCategories";
import { GlobalContextProvider, useGlobalContext } from "@/context/store";

export const metadata: Metadata = {
  title: "Tons Of Tacos",
  description: "Our delicious food brought to you.",
};

const categoriesData: Promise<Category[]> = await useCategoriesSource();
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
