import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="border-b bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-3xl font-bold text-yellow-500">
          📝 Sticky Notes
        </h1>

        <SearchBar />
      </div>
    </header>
  );
}