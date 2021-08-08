import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import AddModal from './components/AddModal';
import MemoList from './components/MemoList';
import { MemoType } from './types/MemoType';

function App() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [memos, setMemos] = useState<MemoType[]>([
    { content: 'buy new Macbook', state: 'normal' },
    { content: 'make simple memo', state: 'asap' },
    { content: 'learn react', state: 'normal' },
  ]);

  useEffect(() => {
    const savedData = localStorage.getItem('simple-memo-serialized-json');

    if (!savedData) return;

    setMemos(JSON.parse(savedData))
  }, []);

  useEffect(() => {
    localStorage.setItem('simple-memo-serialized-json', JSON.stringify(memos));
  }, [memos]);

  const onBackgroundClicked = useCallback(ev => {
    if ((ev.target as HTMLDivElement).className !== 'App') return;

    setIsAddModalVisible(true);
  }, []);

  const title = 'Simple memo';

  return (
    <div className="App" onClick={onBackgroundClicked}>
      <h1>{title}</h1>

      <MemoList
        memos={memos}
        setMemos={setMemos}
      />

      <AddModal
        isVisible={isAddModalVisible}
        onConfirmed={(str) => setMemos(prev => [...prev, {content: str, state: 'normal'}])}
        onCanceled={() => setIsAddModalVisible(false)}
      />
    </div>
  );
}

export default App;
