"use client";

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      className="w-72 rounded-lg border px-4 py-2 outline-none focus:border-yellow-500"
    />
  );
}