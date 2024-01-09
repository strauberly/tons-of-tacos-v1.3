import Link from "next/link";
// style this for nav
export default function MenuNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/menu/tacos">Tacos</Link>
        </li>
        <li>
          <Link href="/menu/toppings">Toppings</Link>
        </li>
        <li>
          <Link href="/menu/sides">Sides</Link>
        </li>
        <li>
          <Link href="/menu/drinks">Drinks</Link>
        </li>
      </ul>
    </nav>
  );
}
