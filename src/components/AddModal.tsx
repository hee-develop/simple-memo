import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';

import styles from '../styles/add_modal.module.scss';
import Button from './Button';

type Props = {
  isVisible: boolean,
  onConfirmed: (content: string) => void,
  onCanceled: () => void,
}

export default function AddModal({
  isVisible,
  onCanceled,
  onConfirmed,
}: Props) {
  const [value, setValue] = useState('');

  const confirm = useCallback(() => {
    onConfirmed(value);
    setValue('');
  }, [value, onConfirmed]);
  const cancel = useCallback(() => {
    onCanceled();
    setValue('');
  }, [onCanceled]);

  const onKeyDownedCallback: React.KeyboardEventHandler<HTMLInputElement> = useCallback((ev) => {
    switch (ev.key) {
      case 'Enter':
        confirm();
        break;
      case 'Esc':
      case 'Escape':
        cancel();
        break;
    }
  }, [cancel, confirm]);

  const visibilityStyle: React.CSSProperties =  useMemo(() => ({display: isVisible ? 'flex' : 'none'}), [isVisible]);

  return (
    <div
      className={styles.addModal}
      onClick={(ev) => ev.stopPropagation()}
      style={visibilityStyle}>
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
          onClicked={confirm}
        />
        <Button
          text="⛌"
          description="discard this memo"
          onClicked={cancel}
        />
      </div>
    </div>
  );
}
