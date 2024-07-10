import { changeTheme, useAppDispatch } from '@/store';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  const handleClickExplore = () => {
    router.push(`/search?${new URLSearchParams({ page: '1' })}`);
  };
  return (
    <header className="text-gray-600 body-font">
      <nav className="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 relative">
          <Image
            alt=""
            width={100}
            height={100}
            src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'}
          />
        </Link>
        <span className="flex flex-wrap items-center text-base justify-center gap-2">
          <Button variant="outlined" onClick={handleClickExplore}>
            Explorar
          </Button>
          <Button variant="outlined" onClick={handleChangeTheme}>
            Tema
          </Button>
        </span>
      </nav>
    </header>
  );
}
