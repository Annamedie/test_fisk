import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-4 bg-blue-800">
      <Link href="/">
        <h1>Ugly fish</h1>
      </Link>
    </header>
  );
}
