export default function Header({ goHome }: { goHome: () => void }) {
  return (
    <header className="mx-auto w-full max-w-3xl px-6 pt-8 pb-4">
      <div
        onClick={goHome}
        className="font-cedarville-cursive cursor-pointer text-2xl text-gray-800"
      >
        Phillip Zoghbi
      </div>
    </header>
  );
}
