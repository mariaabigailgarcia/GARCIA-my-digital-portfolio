import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">My Portfolio</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
