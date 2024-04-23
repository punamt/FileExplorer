 const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [{
        id:"2",
        name:"public",
        isFolder:true,
        items: [{
            id:"3",
            name:"public nested1",
            isFolder:true,
            items: [{
                id:"5",
                name:"public nested2",
                isFolder:false,
                items: []
            }]
        }]
    }]

}

export default explorer