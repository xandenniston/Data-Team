
/**
 * 
 */
class node {
    constructor(name, type) {
        this.name = name;
        this.parent = null;
        this.children = [];
        this.type = type;
    }
}


class tree {
    constructor(name) {
        var n = new node(name, "root");
        this.root = n;
    }
}


/** @function getChildren this retrieves the children of a given category
 * 
 * @param {string} path this is the path of the category you are retrieving 
 */
function getChildren(path){
    var node = findNode(path);

    //return the children of the current category
    return node.children;
}

function findNode(path){
    var pathString = new String();
    var current = tree.root;
    pathString = path;

    //goes through the path to the requested category
    var pathSeperated = pathString.split('/')
    if(pathSeperated[0] === "root"){
        var i =1;
    }
    else{
        var i = 0;
    }
    for(; i < pathSeperated.length;i++){
        root.children.forEach(element => {
            if(pathSeperated[i] === element.name){
                current = element;
            }
        });
    }
    return current;
    
}

function addChild(path, child){
    var n = findNode(path);
    n.children[node.children.length +1] = child;
}


export {node, tree, getChildren, findNode, addChild};
