import * as React from 'react';

import styles from '../styles/button.module.scss';

type Props = {
  text: string;
  description?: string;
  accent?: boolean;
  onClicked?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  text,
  description,
  accent,
  onClicked
}: Props) {
  const buttonClass = accent ? styles.buttonAccent : styles.button;

  return (
    <button
      className={buttonClass}
      onClick={onClicked}
      title={description}
    >
      {text}
    </button>
  );
}
