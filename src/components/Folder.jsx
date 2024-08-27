import React, { useState } from 'react'

const Folder = ({handleInsertNewNode, folder}) => {
  const [showFolder, setShowFolder] = useState(folder.isOpen);
  const [showInput, setShowInput] = useState({
      visible: false,
      isFolder: false
  });

  const toggleShowFolder = () => {
      setShowFolder(!showFolder)
  }

const handleFolderClick = () => {
    setShowInput((prev) => ({ 
        ...prev,
        visible: true,
        isFolder: true
    }))
    setShowFolder(true)
}  

const handleFileClick = () => {
    setShowInput(prev => ({
        ...prev,
        visible: true,
        isFolder: false
    }))
    setShowFolder(true)
}

const handleKeyDown = (e) => {
    if(e.keyCode === 13 && e.target.value){
        console.log("reached")
        handleInsertNewNode(folder.id, e.target.value, showInput.isFolder)
        setShowInput(prev => ({
            ...prev,
            visible: false
        }))
    }
}

    if(folder.isFolder) {
        return (
        <div style={{marginLeft: '2rem'}}>
            <div>
                🗂 {folder.name}{ folder.isFolder === true ? <span onClick={toggleShowFolder} style={{cursor: 'pointer'}}> > </span>: null}
                <button onClick={handleFolderClick}>Folder +</button>
                <button onClick={handleFileClick}>File +</button>
            </div>
            <div style={{marginLeft: '2rem'}} >
                {
                    showInput.visible ? (
                            showInput.isFolder ? 
                            <>
                                <span>🗂 </span>
                                <input type="text" 
                                    autoFocus 
                                    onBlur={() => setShowInput(prev => ({...prev, visible: false}))}
                                    onKeyDown={(e) =>  handleKeyDown(e, showInput.isFolder)}
                                />
                            </> : 
                            <>
                                <span>📄 </span>
                                <input type="text" 
                                    autoFocus 
                                    onBlur={() => setShowInput(prev => ({...prev, visible: false}))}
                                    onKeyDown={(e) =>  handleKeyDown(e, showInput.isFolder)}
                                />
                            </>
                            ) 
                    : null
                }
            </div>
            {
                showFolder === true ? 
                (folder.items.length > 0 ? 
                    folder.items.map((item, index) => (<Folder key={index} handleInsertNewNode={handleInsertNewNode} folder={item} />)) : null)
                : null
            }
        </div>
        )
    }else {
        return (
            <span style={{marginLeft: '2rem'}}>📄 {folder.name}</span>
        )
    }
}

export default Folder