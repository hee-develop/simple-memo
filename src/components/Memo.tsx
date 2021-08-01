import * as React from 'react';
import { useCallback, useMemo } from 'react';

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

  const onClickCallback = useCallback((ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    ev.stopPropagation();
    onClicked();
  }, [onClicked]);
  const onDoubleClickCallback = useCallback((ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    ev.stopPropagation();
    onDoubleClicked();
  }, [onDoubleClicked]);

  return (
    <span
      className={memoClass}
      onClick={onClickCallback}
      onDoubleClick={onDoubleClickCallback}
    >
      {content}
    </span>
  );
}
