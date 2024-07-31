import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Contact page</h1>
      <Link href="/" className="text-xl text-blue-500">
        back home
      </Link>
    </div>
  );
}
export default ContactPage;
