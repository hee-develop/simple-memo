import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';

import styles from '../styles/components/add_modal.module.scss';
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

  const confirm = useCallback((ev) => {
    ev.stopPropagation();
    if (value.length < 1) return;

    onConfirmed(value);
    setValue('');
  }, [value, onConfirmed]);

  const cancel = useCallback((ev) => {
    ev.stopPropagation();

    onCanceled();
    setValue('');
  }, [onCanceled]);

  const backgroundClicked = useCallback((ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    ev.stopPropagation();
    cancel(ev);
  }, [cancel]);

  const onKeyDownedCallback: React.KeyboardEventHandler<HTMLInputElement> = useCallback((ev) => {
    switch (ev.key) {
      case 'Enter':
        confirm(ev);
        break;
      case 'Esc':
      case 'Escape':
        cancel(ev);
        break;
    }
  }, [cancel, confirm]);

  const visibilityStyle: React.CSSProperties =  useMemo(() => ({display: isVisible ? 'initial' : 'none'}), [isVisible]);

  return (
    <div style={visibilityStyle}>
      <div
        className={styles.addModalBackground}
        onClick={backgroundClicked}
      />

      <div className={styles.addModal}>
        <input
          className={styles.addModalInput}
          value={value}
          onChange={({target}) => setValue(target.value)}
          onKeyDown={onKeyDownedCallback}
          type="text"
          placeholder="add something.."
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
    </div>
  );
}
