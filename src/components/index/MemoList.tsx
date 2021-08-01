import React from 'react';
import Memo from '../Memo';

import { removeTargetFromArray } from '../../functions/modifyArray';
import { MemoType } from '../../types/MemoType';

import styles from '../../styles/components/index/memo_list.module.scss';

type Props = {
  memos: MemoType[];
  setMemos: React.Dispatch<React.SetStateAction<MemoType[]>>;
}

export default function MemoList({memos, setMemos}: Props) {
  return (
    <div className={styles.memoList}>
      {memos.map((memo, idx) => (
        <>
          <Memo
            key={`${idx}-${memo}`}
            content={memo.content}
            contentState={memo.state}
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
