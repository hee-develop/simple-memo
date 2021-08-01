import React, { useState } from 'react';
import './App.scss';
import AddModal from './components/AddModal';
import MemoList from './components/index/MemoList';

function App() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [memos, setMemos] = useState(['aple', 'bana', 'carr']);
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
        onConfirmed={(str) => setMemos(prev => [...prev, str])}
        onCanceled={() => setIsAddModalVisible(false)}
      />
    </div>
  );
}

export default App;
