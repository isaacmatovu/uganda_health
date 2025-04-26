import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded bg-[#0033A0]"></div>
          <span className="text-lg font-bold">Ministry of Health Uganda</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="#" text="Services" />
            <NavItem href="/contact" text="Contact" />
          </ul>
        </nav>
        <Link href="/login">
          <button className="rounded bg-[#0033A0] px-4 py-2 text-sm font-medium text-white hover:bg-[#0033A0]/90">
            Login / Register
          </button>
        </Link>
      </div>
    </header>
  );
}

function NavItem({ href, text }) {
  return (
    <li>
      <Link href={href} className="text-sm font-medium hover:text-[#0033A0]">
        {text}
      </Link>
    </li>
  );
}
