export function textContent(element: Element | null): string { return element?.textContent?.replace(/\s+/g, ' ').trim() ?? ''; }
export function rowsFromTable(table: HTMLTableElement): HTMLTableRowElement[] { return Array.from(table.querySelectorAll('tr')); }
export function cellsFromRow(row: HTMLTableRowElement): string[] { return Array.from(row.cells).map((cell) => textContent(cell)); }
