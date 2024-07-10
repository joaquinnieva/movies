import { BASE_MEDIA } from '@/consts';
import { Movie } from '@/types';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export function MovieCard({ movie, withDescription = false }: { movie: Movie; withDescription?: boolean }) {
  const router = useRouter();

  const handleViewDetail = () => {
    router.push(`/detail/${movie.id}`);
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
        <div className="flex justify-center items-end">
          <Button className="mx-auto w-full" variant="contained" onClick={handleViewDetail}>
            Detalle
          </Button>
        </div>
      </div>
    </div>
  );
}
