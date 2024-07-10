import { LOGO_URI } from '@/consts';
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
          <Image alt="logo" width={100} height={100} src={LOGO_URI} />
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
