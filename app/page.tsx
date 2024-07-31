import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1 className="text-7xl">Home page</h1>
      <Link href="/about" className="text-xl text-blue-500">
        about page
      </Link>
    </div>
  );
}
export default Homepage;
