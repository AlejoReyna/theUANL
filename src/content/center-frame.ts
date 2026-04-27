export async function initializeCenterFrame(frameDocument: Document): Promise<void> { if (window.name !== 'center') return; frameDocument.body.classList.add('siase-plus-center'); }
void initializeCenterFrame(document);
