import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-between p-4 rounded-lg bg-cardBg">
      <div>Logo</div>
      <nav>
        <ul className="flex flex-row gap-4">
          <Link href="/">Home</Link>
          <Link href="/post">Post</Link>
          <Link href="/auth/login">Login</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;