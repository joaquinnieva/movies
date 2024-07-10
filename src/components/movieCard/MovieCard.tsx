import { BASE_MEDIA } from '@/consts';
import { addFav, removeFav, useAppDispatch, useAppSelector } from '@/store';
import { Movie } from '@/types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, Tooltip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export function MovieCard({ movie, withDescription = false }: { movie: Movie; withDescription?: boolean }) {
  const router = useRouter();
  const favs = useAppSelector((state) => state.storeReducer.favs);
  const dispatch = useAppDispatch();

  const isFav = useMemo(() => {
    return favs.findIndex((f) => f.id === movie.id) !== -1;
  }, [favs]);

  const handleViewDetail = () => {
    router.push(`/detail/${movie.id}`);
  };
  const handleAddFav = () => {
    isFav ? dispatch(removeFav(movie)) : dispatch(addFav(movie));
  };
  return (
    <div className="border rounded-lg h-full w-full">
      <div className="bg-gray-100 p-6 rounded-lg h-full flex-col justify-between flex gap-2 w-full">
        <div className="w-full">
          <Image width={1000} height={1000} className="h-40 rounded w-full object-cover object-center mb-6" src={`${BASE_MEDIA}${movie.poster_path}`} alt="content" />
          <h3 className={`tracking-widest text-xs font-medium title-font ${movie.vote_average > 6 ? 'text-green-600' : 'text-amber-600'}`}>{movie.vote_average}</h3>
          <h2 className="text-md text-gray-900 font-medium title-font mb-4 truncate" title={movie.title}>
            {movie.title}
          </h2>
          {withDescription && <p className="leading-relaxed text-base h-24 overflow-hidden pb-1">{movie.overview}</p>}
        </div>
        <div className="flex justify-center items-end gap-2">
          <Tooltip title={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}>
            <Button className="mx-auto w-full" variant="contained" onClick={handleAddFav}>
              {isFav ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            </Button>
          </Tooltip>

          <Button className="mx-auto w-full" variant="contained" onClick={handleViewDetail}>
            Detalle
          </Button>
        </div>
      </div>
    </div>
  );
}
