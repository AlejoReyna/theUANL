import { describe, expect, it } from 'vitest';
import { parseMenuItems } from '@/utils/parser/menu';
describe('parseMenuItems', () => { it('parses center-targeted menu anchors', () => { document.body.innerHTML = '<ul class="menu collapsible"><li><a target="center" href="/x">Horario</a></li></ul>'; expect(parseMenuItems(document)[0]?.category).toBe('schedule'); }); });
