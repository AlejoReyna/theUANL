import { useEffect, useState } from 'react';
import type { StorageKey, StorageSchema } from '@/types/storage';
import { getStorageValue, setStorageValue } from '@/utils/storage';
export function useChromeStorage<K extends StorageKey>(key: K, fallback: StorageSchema[K]): [StorageSchema[K], (value: StorageSchema[K]) => Promise<void>] { const [value, setValue] = useState<StorageSchema[K]>(fallback); useEffect(() => { void getStorageValue(key).then((stored) => { if (stored !== undefined) setValue(stored); }); }, [key]); async function updateValue(nextValue: StorageSchema[K]): Promise<void> { setValue(nextValue); await setStorageValue(key, nextValue); } return [value, updateValue]; }
