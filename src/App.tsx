import React, { useState } from 'react';
import './App.scss';
import Memo from './components/Memo';
import AddModal from './components/AddModal';

import { removeTargetFromArray } from './functions/modifyArray';


function App() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [memos, setMemos] = useState(['aple', 'bana', 'carr']);
  const title = 'Simple memo';

  return (
    <div className="App" onClick={() => setIsAddModalVisible(true)}>
      <h1>{title}</h1>
      <div>
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
            {idx !== memos.length - 1 && <>|</>}
          </>
        ))}
      </div>

      <AddModal
        isVisible={isAddModalVisible}
        onConfirmed={(str) => setMemos(prev => [...prev, str])}
        onCanceled={() => setIsAddModalVisible(false)}
      />
    </div>
  );
}

export default App;
