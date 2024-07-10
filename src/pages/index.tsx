import { MovieCard } from '@/components';
import { getExplore, getGenres } from '@/services';
import { GenreI, Movie, ResponseDiscover } from '@/types';
import { Chip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home({ data, genres }: { data: ResponseDiscover; genres: GenreI[] }) {
  const router = useRouter();

  const handleClickGenre = (id: number) => {
    router.push(`/search?${new URLSearchParams({ page: '1', with_genres: id.toString() })}`);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col relative">
        <Image
          width={100}
          height={100}
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Te damos la bienvenida.</h1>
          <p className="mb-8 leading-relaxed">Millones de películas, series y gente por descubrir. Explora ya.</p>
        </div>
      </div>

      <div className="py-8 flex flex-wrap gap-4 justify-center">
        {genres?.map((g: GenreI) => (
          <Chip key={g.id} label={g.name} variant="outlined" onClick={() => handleClickGenre(g.id)} />
        ))}
      </div>

      <main className="grid grid-cols-2 gap-4 pb-10 md:grid-cols-4">
        {data.results.map((m: Movie) => (
          <MovieCard key={m.id} movie={m} withDescription />
        ))}
      </main>
    </section>
  );
}
export async function getServerSideProps() {
  const { data } = await getExplore({ page: 1 });
  const {
    data: { genres },
  } = await getGenres();
  return { props: { data, genres } };
}
