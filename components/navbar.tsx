import Link from "next/link";

type NavLink = {
  id: number;
  path: string;
  page: string;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    path: "/",
    page: "Home",
  },
  {
    id: 2,
    path: "/counter",
    page: "Counter",
  },
  {
    id: 3,
    path: "/tours",
    page: "Tours",
  },
  {
    id: 4,
    path: "/actions",
    page: "Actions",
  },
];

function Navbar() {
  return (
    <nav className="max-w-3xl m-auto flex gap-x-2">
      {navLinks.map((navLink) => {
        const { id, page, path } = navLink;

        return (
          <Link href={path} key={id}>
            {page}
          </Link>
        );
      })}
    </nav>
  );
}
export default Navbar;
