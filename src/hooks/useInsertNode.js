export const useInsertNode = () => {
  const insertNode = (tree, id, name, isFolder) => {
    if(tree.id === id && tree.isFolder){
      console.log("zzz", tree.isFolder)
      tree.items.unshift({id: new Date().getTime(),
         name: name,
         isFolder: isFolder,
         items:[]
     })
     return tree
    }
     console.log("cccc", id, name, tree.isFolder, isFolder)
     let lastNode = []
      lastNode = tree.items.map(ob => insertNode(ob, id, name, isFolder))
      return {...tree, items: lastNode}
   }
   

   
 return { insertNode }
    
}

