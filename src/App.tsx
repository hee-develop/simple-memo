import React, { useState } from 'react';
import './App.scss';
import AddModal from './components/AddModal';
import MemoList from './components/index/MemoList';
import { MemoType } from './types/MemoType';

function App() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [memos, setMemos] = useState<MemoType[]>([
    { content: 'buy new Macbook', state: 'normal' },
    { content: 'make simple memo', state: 'asap' },
    { content: 'learn react', state: 'normal' },
  ]);
  const title = 'Simple memo';

  return (
    <div className="App" onClick={() => setIsAddModalVisible(true)}>
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
