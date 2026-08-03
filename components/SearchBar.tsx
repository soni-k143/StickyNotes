"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-3 top-3 text-gray-400"
        size={18}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search notes..."
        className="w-full rounded-xl border p-3 pl-10 outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}