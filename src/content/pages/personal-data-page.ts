import type { StudentInfo } from '@/types/student';
import { textContent } from '@/utils/parser/dom';
export async function enhancePersonalDataPage(frameDocument: Document): Promise<Partial<StudentInfo>> { frameDocument.body.classList.add('siase-plus-personal-data-page'); return { name: textContent(frameDocument.body) }; }
