"use client";

const COLORS = [
  "yellow",
  "green",
  "blue",
  "pink",
  "purple",
];

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({
  value,
  onChange,
}: ColorPickerProps) {
  return (
    <div className="mt-4 flex gap-2">
      {COLORS.map((color) => (
        <button
          key={color}
          onClick={() => onChange(color)}
          className={`
            h-8
            w-8
            rounded-full
            border-2
            ${
              value === color
                ? "border-black"
                : "border-transparent"
            }
          `}
          style={{
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}