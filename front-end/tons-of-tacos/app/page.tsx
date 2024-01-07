import Image from "next/image";
import logoImg from "@/public/images/icons/bird-logo.svg";
import classes from "./page.module.css";
export default function Home() {
  return (
    <main>
      <Image src={logoImg} className={classes.img} />
    </main>
  );
}
