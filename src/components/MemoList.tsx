import React, { useCallback } from 'react';
import Memo from './Memo';

import { removeTargetFromArray, replaceTargetFromArray } from '../functions/modifyArray';
import { MemoType } from '../types/MemoType';

import styles from '../styles/components/memo_list.module.scss';

type Props = {
  memos: MemoType[];
  setMemos: React.Dispatch<React.SetStateAction<MemoType[]>>;
  backgroundClicked: () => void;
}

const changeState = (memo: MemoType): MemoType => {
  switch (memo.state) {
    case 'normal':
      return {...memo, state: 'asap'};
    case 'asap':
      return {...memo, state: 'normal'};
  }
};

export default function MemoList({memos, setMemos, backgroundClicked}: Props) {
  const onBackgroundClicked = useCallback(ev => {
    if ((ev.target as HTMLDivElement).className !== styles.memoList) return;
    backgroundClicked();
  }, [backgroundClicked]);

  return (
    <div
      className={styles.memoList}
      onClick={onBackgroundClicked}
    >
      {memos.map((memo, idx) => (
        <Memo
          key={`${idx}-${memo}`}
          content={memo.content}
          contentState={memo.state}
          onClicked={() => {
            setMemos(prev => replaceTargetFromArray(prev, idx, changeState(memo)))
          }}
          onDoubleClicked={() => {
            setMemos(prev => removeTargetFromArray(prev, idx))
          }}
        />
      ))}
    </div>
  )
}
