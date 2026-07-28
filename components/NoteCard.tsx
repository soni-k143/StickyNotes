import { Note } from "@/types/note";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div
      className="rounded-xl bg-yellow-200 p-5 shadow-md"
    >
      <h2 className="text-xl break-words font-bold">
        {note.title}
      </h2>

      <p className="mt-3 whitespace-pre-wrap break-words text-gray-700">
        {note.content}
      </p>
    </div>
  );
}