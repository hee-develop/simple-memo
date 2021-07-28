import * as React from 'react';
import { useCallback, useState } from 'react';

import styles from '../styles/add_modal.module.scss';
import Button from './Button';

type Props = {
  onConfirmed: (content: string) => void,
  onCanceled: () => void,
}

export default function AddModal({
  onCanceled,
  onConfirmed,
}: Props) {
  const [value, setValue] = useState('');

  const onKeyDownedCallback = useCallback((ev) => {
    switch (ev.key) {
      case 'Enter':
        onConfirmed(value);
        break;
      case 'Esc':
      case 'Escape':
        onCanceled();
        break;
    }
  }, [value, onCanceled, onConfirmed]);


  return (
    <div className={styles.addModal}>
      <input
        className={styles.addModalInput}
        value={value}
        onChange={({target}) => setValue(target.value)}
        onKeyDown={onKeyDownedCallback}
        type="text"
      />
      <div
        className={styles.buttonLayout}
      >
        <Button
          text="○"
          description="add this memo"
          accent={true}
          onClicked={() => onConfirmed(value)}
        />
        <Button
          text="⛌"
          description="discard this memo"
          onClicked={onCanceled}
        />
      </div>
    </div>
  );
}
