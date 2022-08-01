import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image
        src="/public/profilePic.png"
        alt="author profile pic"
        className="w-12 h-12 rounded-full block mx-auto mb-4"
        width="48"
        height="48"
      />{' '}
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>Matt</a>
        </Link>
      </p>
    </header>
  );
}
