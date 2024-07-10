import { MovieCard } from '@/components';
import { useAppSelector } from '@/store';
import { Movie } from '@/types';

export default function Favs() {
  const favs = useAppSelector((state) => state.storeReducer.favs);

  return (
    <div>
      <main className="grid grid-cols-2 gap-4 pb-10 md:grid-cols-4">
        {favs.map((m: Movie) => (
          <MovieCard key={m.id} movie={m} withDescription />
        ))}
      </main>
    </div>
  );
}
