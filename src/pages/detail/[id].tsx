import { MovieCard } from '@/components';
import { BASE_MEDIA } from '@/consts';
import { getMovieDetail, getSimilarMovies } from '@/services';
import { Genre, Movie, MovieDetailI, ResponseDiscover } from '@/types';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Detail({ info, similar }: { info: MovieDetailI; similar: ResponseDiscover }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container py-24 mx-auto">
        <div className="lg:w-4/5 md:flex-row flex-col mx-auto flex flex-wrap">
          <div className="md:w-1/3 w-full grid place-content-center">
            <div className="w-48 h-64 object-cover object-center rounded-lg overflow-hidden relative ">
              <Image width={1000} height={1000} src={`${BASE_MEDIA}${info.poster_path}`} alt="content" />
            </div>
          </div>
          <div className="md:w-2/3 w-full mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{info.genres.map(({ name }: Genre) => name).join(', ')}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{info.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center gap-5">
                <span className="text-gray-600">Lanzamiento: {info.release_date}</span>
              </span>
            </div>
            <p className="leading-relaxed">{info.overview}</p>

            <div className="flex justify-between pt-2 items-end">
              <span className="title-font font-medium text-xl text-gray-600">Puntaje {info.vote_average}</span>
              <a target="_blank" href={info.homepage}>
                <Button variant="contained">Ver info</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <h3 className="py-2 text-lg font-medium">Similares:</h3>
        <div className="flex overflow-auto gap-4">
          {similar.results.map((m: Movie) => (
            <div key={m.id} className="min-w-52">
              <MovieCard movie={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export async function getServerSideProps({ params }: { params: { id: string } }) {
  const { data } = await getMovieDetail(params.id);
  const { data: similar } = await getSimilarMovies(params.id);

  return { props: { info: data, similar } };
}
