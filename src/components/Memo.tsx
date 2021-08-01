import * as React from 'react';
import { useMemo } from 'react';

import styles from '../styles/memo.module.scss';
import { ContentStateType } from '../types/ContentStateType';

type Props = {
  content: string,
  contentState: ContentStateType
  onClicked: () => void,
  onDoubleClicked: () => void,
}

export default function Memo({
  content,
  contentState,
  onClicked,
  onDoubleClicked,
}: Props) {
  const memoClass = useMemo(() => {
    let stateClass = '';
    if (contentState === 'asap') {
      stateClass = styles.memoAsap;
    }

    return `${styles.memo} ${stateClass}`;
  }, [contentState]);

  return (
    <span
      className={memoClass}
      onClick={() => onClicked()}
      onDoubleClick={() => onDoubleClicked()}
    >
      {content}
    </span>
  );
}
