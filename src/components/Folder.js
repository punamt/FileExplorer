import React, { useState, } from 'react'

const Folder = ({ handleInsertNode, explorer }) => {
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({ visible:false, isFolder:false })
    
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
    return (
        <div>
            {explorer.isFolder ? <div>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📁{explorer.name}</span>
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
                    {explorer.items.map(exp => <Folder explorer={exp} key={exp.id} handleInsertNode={handleInsertNode} />)}


                </div>
            </div>
                :
                <div>📃{explorer.name}</div>
            }
        </div>
    )
}

export default Folder