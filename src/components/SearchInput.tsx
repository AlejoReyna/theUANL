export interface SearchInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function SearchInput({
  value,
  placeholder = 'Buscar',
  onChange
}: SearchInputProps): JSX.Element {
  return (
    <label className="game-search-field">
      <svg className="game-search-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z" />
      </svg>
      <input
        className="game-search"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
