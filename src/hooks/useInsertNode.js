export const useInsertNode = () => {
  const insertNode = (tree, id, name, isFolder) => {
    if (tree.id === id && tree.isFolder) {
       tree.items.unshift({
        id: new Date().getTime(),
        name: name,
        isFolder: isFolder,
        items: []
      })
      return tree
    }

    let lastNode = []
    lastNode = tree.items.map(ob => insertNode(ob, id, name, isFolder))
    return { ...tree, items: lastNode }
  }

  const renameNode = (tree, id, name, isFolder) => {
    if (tree.id === id) {
       tree.name = name
       return tree
    }

    let lastNode = []
    lastNode = tree.items.map(ob => renameNode(ob, id, name, isFolder))
    return { ...tree, items: lastNode }
  }

  const deleteNode = (tree, id,) => {
  
    if (tree.id === id) {
      delete tree.id
      delete tree.name
      delete tree.isFolder
      tree.items.length = 0
      //delete tree.items
      return tree
    }

    let lastNode = []
    lastNode = tree.items && tree.items.length > 0 && tree.items.map(ob => deleteNode(ob, id,))
   
    return { ...tree, items: lastNode }
  }


  return { insertNode, renameNode, deleteNode }

}

