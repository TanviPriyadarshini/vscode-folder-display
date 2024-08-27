import './App.css';
import data from './data/data.json'
import Folder from './components/Folder';
import { useState } from 'react';
import useTreeTraversal from './hooks/useTreeTraversal';

const App = () => {
  const [dataTree, setDataTree] = useState(data);
  
  const {insertTreeNode} = useTreeTraversal()
  
  const handleInserNewNode = (folderToInsertIn, newNodeName, isFolder) => {
    let newTree = insertTreeNode(dataTree, folderToInsertIn, newNodeName, isFolder)
    setDataTree(newTree)
  }
  
  return (
    <div>
      <Folder handleInsertNewNode={handleInserNewNode} folder={dataTree}/>
    </div>
  )
}


export default App;
