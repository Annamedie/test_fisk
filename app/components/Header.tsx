import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-start p-4 bg-blue-800 sticky top-0 z-10">
      <Link href="/">
        <h1 className="font-bold text-white">Ugly fish</h1>
      </Link>
    </header>
  );
}
