
import './App.css';
import { useState } from 'react'
import Folder from './components/Folder'
import explorer from './data/explorer'
import { useInsertNode } from './hooks/useInsertNode'

function App() {
  const [data, setData] = useState(explorer)
  const { insertNode }  = useInsertNode()

  const handleInsertNode = ( id, name, isFolder) => {
    const finalTree = insertNode(data, id, name, isFolder)
    setData(finalTree)

  }

  return (
    <div className="App">
      <Folder explorer={data} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
