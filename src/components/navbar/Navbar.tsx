import { LOGO_URI } from '@/consts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Tooltip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();

  const handleClickExplore = () => {
    router.push(`/search?${new URLSearchParams({ page: '1' })}`);
  };
  const handleClickFavourites = () => {
    router.push(`/favourites`);
  };
  return (
    <header className="text-gray-600 body-font">
      <nav className="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 relative">
          <Image alt="logo" width={100} height={100} src={LOGO_URI} />
        </Link>
        <span className="flex flex-wrap items-center text-base justify-center gap-2">
          <Tooltip title="Explorar">
            <Button variant="outlined" onClick={handleClickExplore}>
              <SearchIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Ver favoritos">
            <Button variant="outlined" onClick={handleClickFavourites}>
              <FavoriteIcon />
            </Button>
          </Tooltip>
        </span>
      </nav>
    </header>
  );
}
