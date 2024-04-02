import { useDisplayContext } from "@/context/display-context";
import Link from "next/link";

export default function MenuCategory(props: { name: string }) {
  const { showMenu, setShowMenu } = useDisplayContext();

  // close menu nav on selecting a menu category
  // use category name for a dynamic nav link
  return (
    <li>
      <Link href={`/${props.name}`} onClick={() => setShowMenu(!showMenu)}>
        {props.name}
      </Link>
    </li>
  );
}
