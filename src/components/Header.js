import Link from "next/link";

const links = [
  { name: "Home", target: "/" },
  { name: "Blog", target: "/blog" },
  { name: "About", target: "/about" },
];
export default function Header() {
  return (
    <header className="bg-gray-800 text-gray-200">
      <nav className="max-w-4xl mx-auto py-4">
        <ul className="flex items-center justify-center ">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.target} passHref={true}>
                <a className="p-4 hover:underline ">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

{
  /* 
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.target} passHref>
                <a className={styles.navLink}>{link.name}</a>
              </Link>
            </li>
          ))}
        */
}
