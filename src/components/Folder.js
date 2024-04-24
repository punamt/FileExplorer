import React, { useState, } from 'react'

const Folder = ({handleDeleteNode,  handleRenameNode,  handleInsertNode, explorer }) => {
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({ visible:false, isFolder:false })
    const [rename, setRename] = useState(false)
    
    const handleNewFolder = (e, isFolder) => {
         e.stopPropagation()
         setExpand(true)
        setShowInput({ visible: true, isFolder })
    }
    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            
        handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
        setShowInput({...showInput, visible:false})
      
        }
    }

    const handleRename = (e) => {
      e.stopPropagation()
      setRename(!rename)
    }

    const handleChange = (e) => {
        e.stopPropagation()
        if(e.keyCode === 13 && e.target.value){
            handleRenameNode(explorer.id, e.target.value, showInput.isFolder)
            setRename(false)
            }
    }

    const handleDelete = (e )=> {
        e.stopPropagation()
        handleDeleteNode(explorer.id)
     }
   
     console.log(explorer.id)

    return (
        <div>
            {explorer.id &&
            (explorer.isFolder ? <div>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    {rename ? <input type="text"  autoFocus  onKeyDown={(e) => handleChange(e)} /> :<span>📁{explorer.name}</span>}
                    <div>
                        <button onClick={(e) => handleRename(e)}>🔰</button>
                        <button onClick={(e) => handleDelete(e)}>❎</button>
                    </div>
                    <div>
                        <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                        <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}>
                    <div>
                        {
                            showInput.visible && <div>
                                <span> {showInput.isFolder ? "📁" : "📃"}</span>
                                <input autoFocus
                                type="text" 
                                onBlur={() => setShowInput({...showInput, visible: false })}
                                onKeyDown={(e) => onAddFolder(e, explorer)}
                               />
                            </div>
                        }
                    </div>
                    {explorer.items && explorer.items.map(exp => <Folder explorer={exp} key={exp.id} handleInsertNode={handleInsertNode} handleRenameNode={handleRenameNode} handleDeleteNode={handleDeleteNode} />)}


                </div>
            </div>
                :
                <div>📃{rename ? <input type="text"  autoFocus  onKeyDown={(e) => handleChange(e)} /> : explorer.name}
                <button onClick={(e) => handleRename(e, explorer.isFolder)}>🔰</button>
                <button onClick={(e) => handleDelete(e)}>❎</button>
                </div>)
            }
        </div>
    )
}

export default Folder