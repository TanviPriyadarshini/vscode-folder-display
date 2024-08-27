const useTreeTraversal = () => {

    const insertTreeNode = (tree, folderToInsertIn, newNodeName, isFolder) => {

        if(tree.id === folderToInsertIn ) {
            
            tree.items.unshift({
                id: new Date().getTime(),
                name: newNodeName,
                isOpen: false,
                isFolder,
                items: []
            })
        }else{
            tree.items.map((node) => insertTreeNode(node, folderToInsertIn, newNodeName, isFolder ))
        }

        return tree
    }
 
    return {insertTreeNode}
}

export default useTreeTraversal