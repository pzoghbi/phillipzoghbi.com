import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8">
      <Link
        href="/"
        className="font-cedarville-cursive cursor-pointer text-2xl text-gray-800"
      >
        Phillip Zoghbi
      </Link>
    </header>
  );
}
