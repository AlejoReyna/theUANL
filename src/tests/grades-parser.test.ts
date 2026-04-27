import { describe, expect, it } from 'vitest';
import { parseGrades } from '@/utils/parser/grades';
describe('parseGrades', () => { it('parses subject and score from table rows', () => { document.body.innerHTML = '<table><tr><td>Matematicas</td><td>95</td></tr></table>'; expect(parseGrades(document)).toHaveLength(1); }); });
