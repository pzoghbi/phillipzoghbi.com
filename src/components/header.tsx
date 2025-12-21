import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-3xl px-6 pt-8 pb-4">
      <Link
        href="/"
        className="font-cedarville-cursive cursor-pointer text-2xl text-gray-800"
      >
        Phillip Zoghbi
      </Link>
    </header>
  );
}
