import Link from "next/link";

function MainHeader() {
  return (
    <header>
      <div>
        {/* 回到主界面 */}
        <Link href="/">NextEvents</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/event">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
