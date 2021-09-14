import { registerPlugin } from '@capacitor/core';

import type { IOSBouncePlugin } from './definitions';

const IOSBounce = registerPlugin<IOSBouncePlugin>('IOSBounce', {
  web: () => import('./web').then(m => new m.IOSBounceWeb()),
});

export * from './definitions';
export { IOSBounce };
