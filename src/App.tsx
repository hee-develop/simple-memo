import React, { useState } from 'react';
import './App.scss';
import Memo from './components/Memo';
import AddModal from './components/AddModal';

import { removeTargetFromArray } from './functions/modifyArray';


function App() {
  const [memos, setMemos] = useState(['aple', 'bana', 'carr']);
  const title = 'Simple memo';

  return (
    <div className="App">
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
        onConfirmed={(str) => setMemos(prev => [...prev, str])}
        onCanceled={() => null}
      />
    </div>
  );
}

export default App;
