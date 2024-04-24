
import './App.css';
import { useState } from 'react'
import Folder from './components/Folder'
import explorer from './data/explorer'
import { useInsertNode } from './hooks/useInsertNode'

function App() {
  const [data, setData] = useState(explorer)
  const { insertNode, renameNode, deleteNode }  = useInsertNode()

  const handleInsertNode = ( id, name, isFolder) => {
    const finalTree = insertNode(data, id, name, isFolder)
    setData(finalTree)

  }

  const handleRenameNode = ( id, name, isFolder) => {
    const finalTree = renameNode(data, id, name, isFolder)
    setData(finalTree)

  }

  const handleDeleteNode = ( id,) => {
    const finalTree = deleteNode(data, id )
    setData(finalTree)
  }

 
  return (
    <div className="App">
      <Folder explorer={data} handleInsertNode={handleInsertNode} handleRenameNode={handleRenameNode}handleDeleteNode={handleDeleteNode}  />
    </div>
  );
}

export default App;
