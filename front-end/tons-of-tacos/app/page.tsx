import Image from "next/image";
import logoImg from "@/public/images/logos/bird-logo-rendersa.svg";
import classes from "./page.module.css";
import MainHeader from "@/components/main-header/main-header";
export default async function Home() {
  return (
    <>
      <MainHeader />
      <main className={classes.page}>
        <Image
          src={logoImg}
          className={classes.image}
          alt="tons of tacos logo"
        />
      </main>
    </>
  );
}
