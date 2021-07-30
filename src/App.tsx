import React, { useState } from 'react';
import './App.scss';
import Memo from './components/Memo';
import AddModal from './components/AddModal';

import { attachTargetToArray, removeTargetFromArray } from './functions/modifyArray';


function App() {
  const [memos, setMemos] = useState(['aple', 'bana', 'carr']);
  return (
    <div className="App">
      <AddModal
        onConfirmed={(str) => setMemos(prev => attachTargetToArray(prev, str))}
        onCanceled={() => null}
      />
    </div>
  );
}

export default App;
