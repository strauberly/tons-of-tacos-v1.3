import { useGlobalContext } from "@/context/store";
import Link from "next/link";

export default function MenuCategory(props: { name: string }) {
  const { showMenu, setShowMenu } = useGlobalContext();

  return (
    <li>
      <Link href={`/${props.name}`} onClick={() => setShowMenu(!showMenu)}>
        {props.name}
      </Link>
    </li>
  );
}
