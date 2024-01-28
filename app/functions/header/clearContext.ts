import { DrownedObjectType } from '@/app/@types/contextTypes/objects';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export function clearContext(
  onClearCallback: () => void,
  setObjects: Dispatch<SetStateAction<DrownedObjectType[]>>,
) {
  console.log('clearContext called');

  onClearCallback();
  setObjects([]);
}
