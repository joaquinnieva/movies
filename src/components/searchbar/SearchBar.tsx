import SearchIcon from '@mui/icons-material/Search';
import { FormEvent } from 'react';

export function SearchBar({ onChange, value, onSearch }: { onChange: Function; value: string; onSearch: Function }) {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSearch}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Buscar"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch(value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
          Buscar
        </button>
      </div>
    </form>
  );
}
