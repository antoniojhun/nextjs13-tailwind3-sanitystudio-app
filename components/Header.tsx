import Image from 'next/image';
import Link from 'next/link';
import DarkModeButton from '../app/DarkModeButton';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            height={50}
            width={50}
            src="/hand-drawn.png"
            alt="logo"
          ></Image>
        </Link>
        <h1 className="font-sans text-center font-bold">Antonio's Blog</h1>
      </div>

      <div className="flex items-center justify-end">
        <DarkModeButton />
      </div>

      {/* <NavLinks /> */}

      {/* <SearchBox /> */}
    </header>
  );
}

export default Header;
