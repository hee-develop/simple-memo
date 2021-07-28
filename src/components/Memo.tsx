import * as React from 'react';

import styles from '../styles/memo.module.scss';

type Props = {
  content: string,
  onClicked: () => void,
  onDoubleClicked: () => void,
}

export default function Memo({
  content,
  onClicked,
  onDoubleClicked,
}: Props) {
  return (
    <span
      className={styles.memo}
      onClick={() => onClicked()}
      onDoubleClick={() => onDoubleClicked()}
    >
      {content}
    </span>
  );
}
