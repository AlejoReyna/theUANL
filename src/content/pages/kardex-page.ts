import { parseKardex } from '@/utils/parser/kardex';
export async function enhanceKardexPage(frameDocument: Document): Promise<void> { frameDocument.body.classList.add('siase-plus-kardex-page'); parseKardex(frameDocument); }
