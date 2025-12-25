import { useState } from "react";

export default function StackFilterDropdown({ stacks, selectedStacks, setSelectedStacks }) {
  const [open, setOpen] = useState(false);

  const toggleStack = (stack) => {
    setSelectedStacks(prev =>
      prev.includes(stack) ? prev.filter(s => s !== stack) : [...prev, stack]
    );
  };

  return (
    <div className="relative inline-block text-left mb-6">
      {/* Dropdown button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
      >
        Filter by stack
      </button>

      {/* Dropdown content */}
      {open && (
        <div className="absolute mt-2 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg z-50">
          {stacks.map(stack => (
            <label
              key={stack}
              className="flex items-center px-4 py-2 text-white cursor-pointer hover:bg-white/20"
            >
              <input
                type="checkbox"
                checked={selectedStacks.includes(stack)}
                onChange={() => toggleStack(stack)}
                className="mr-2 accent-cyan-400"
              />
              {stack}
            </label>
          ))}

          {/* Reset button */}
          {selectedStacks.length > 0 && (
            <button
              onClick={() => setSelectedStacks([])}
              className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/20"
            >
              Reset
            </button>
          )}
        </div>
      )}
    </div>
  );
}