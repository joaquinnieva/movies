import { MovieCard, SearchBar } from '@/components';
import { getExplore, getGenres, getSearch } from '@/services';
import { GenreI, Movie, ResponseDiscover } from '@/types';
import { Chip } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Search({ data, genres }: { data: ResponseDiscover; genres: GenreI[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const with_genres = searchParams.get('with_genres');
  const [searchText, setSearchText] = useState('');

  const handleClickGenre = (id: number) => {
    router.push(`/search?${new URLSearchParams({ page: '1', with_genres: id.toString() })}`);
    setSearchText('');
  };
  const handleSearch = (value: string) => {
    router.push(`/search?${new URLSearchParams({ page: '1', ...(value && { query: value }) })}`);
  };
  return (
    <div>
      <div>
        <SearchBar onSearch={handleSearch} onChange={setSearchText} value={searchText} />
      </div>
      <div className="py-8 flex flex-wrap gap-4 justify-center">
        {genres?.map((g: GenreI) => (
          <Chip key={g.id} label={g.name} variant={with_genres === g.id.toString() ? 'filled' : 'outlined'} onClick={() => handleClickGenre(g.id)} />
        ))}
      </div>

      <main className="grid grid-cols-2 gap-4 pb-10 md:grid-cols-4">
        {data?.results?.map((m: Movie) => (
          <MovieCard key={m.id} movie={m} withDescription />
        ))}
      </main>
    </div>
  );
}
export async function getServerSideProps({ query }: { query: any }) {
  let resData;
  if (query?.query) {
    const { data } = await getSearch(query);
    resData = data;
  } else {
    const { data } = await getExplore(query);
    resData = data;
  }
  const {
    data: { genres },
  } = await getGenres();

  return { props: { data: resData, genres } };
}
