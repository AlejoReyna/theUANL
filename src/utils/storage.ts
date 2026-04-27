import type { StorageKey, StorageSchema } from '@/types/storage';
export async function getStorageValue<K extends StorageKey>(key: K): Promise<StorageSchema[K] | undefined> { const result = await chrome.storage.local.get(key); return result[key] as StorageSchema[K] | undefined; }
export async function setStorageValue<K extends StorageKey>(key: K, value: StorageSchema[K]): Promise<void> { await chrome.storage.local.set({ [key]: value }); }
