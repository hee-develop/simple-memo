import React from 'react';
import Memo from '../Memo';

import { removeTargetFromArray } from '../../functions/modifyArray';

import styles from '../../styles/components/index/memo_list.module.scss';

type Props = {
  memos: string[];
  setMemos: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function MemoList({memos, setMemos}: Props) {
  return (
    <div className={styles.memoList}>
      {memos.map((memo, idx) => (
        <>
          <Memo
            key={`${idx}-${memo}`}
            content={memo}
            onClicked={() => null}
            onDoubleClicked={() => {
              setMemos(prev => removeTargetFromArray(prev, idx))
            }}
          />
        </>
      ))}
    </div>
  )
}
