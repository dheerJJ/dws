import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[] | string[];
  placeholder?: string;
  required?: boolean;
}

export function CustomSelect({
  id = "budget",
  name = "budget",
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = options.indexOf(value);
        const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        const nextOpt = options[nextIndex];
        if (nextOpt) onChange(nextOpt);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = options.indexOf(value);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        const prevOpt = options[prevIndex];
        if (prevOpt) onChange(prevOpt);
      }
    }
  };

  return (
    <div className="dws-custom-select" ref={containerRef}>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        id={id}
        className={`dws-custom-select-trigger dws-input d-flex align-items-center justify-content-between text-start ${value ? "has-value" : "is-placeholder"} ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={value ? "text-white" : "text-muted"}>{value || placeholder}</span>
        <ChevronDown
          size={16}
          className="dws-select-chevron flex-shrink-0 ms-2"
          style={{
            transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: isOpen ? "#ffffff" : "#888888",
          }}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="dws-custom-select-menu list-unstyled mb-0"
          tabIndex={-1}
        >
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={isSelected}
                className={`dws-custom-select-item d-flex align-items-center justify-content-between ${isSelected ? "is-selected" : ""}`}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
              >
                <span>{opt}</span>
                {isSelected && (
                  <Check size={15} className="text-white ms-2 flex-shrink-0" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
