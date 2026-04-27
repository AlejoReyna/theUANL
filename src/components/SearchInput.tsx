export interface SearchInputProps { value: string; placeholder?: string; onChange: (value: string) => void; }
export function SearchInput({ value, placeholder = 'Buscar', onChange }: SearchInputProps): JSX.Element { return <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />; }
