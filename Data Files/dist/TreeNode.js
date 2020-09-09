
/**@class node
 * This class is the node, it will be used for categories
 * 
 * @param name the name of the category
 * @param type the type of the category. This will probably be "category" if you are using this. "root" is another type that is made during the tree constructor
 */
class node {
    constructor(name,type,children){
        this.name = name;
        this.parent = null;
        this.children = children;
        this.type = type;
    }
}

/**@class tree
 * 
 * @param name this is the name of your tree. This can probably just be "root"
 */
class tree {
    constructor(name) {
        var n = new node(name, "root", []);
        this.root = n;
    }
}


/** @function getChildren this retrieves the children of a given category
 * 
 * @param {string} path this is the path of the category you are retrieving 
 */
function getChildren(path,r){
    var node = findNode(path,r);

    //return the children of the current category
    return node.children;
}


/**@function findNode this is a helper function to traverse the tree.
 * 
 * @param {string} path this is the path through the tree. including "root" is optional. An example "root/dairy" or simply "dairy" 
 * @param {tree} r the tree root object 
 */
function findNode(path,r){
    var pathString = new String();
    var current = r.root;
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

        current.children.forEach(element => {
            if(pathSeperated[i] === element.name){
                current = element;
            }
        });
    }
    return current;
    
}

/**
 * 
 * @param {string} path this is the path through the tree. including "root" is optional. An example "root/dairy" or simply "dairy"  
 * @param {node/string} child the child adding. This can be a category or the name of the food.
 * @param {tree} r the tree root object  
 */
function addChild(path, child, r){
    var n = findNode(path, r);
    n.children[n.children.length] = child;
    return r;
}


/**@function removeChild
 * This function removes a child at a given path
 * 
 * @param {the path to remove from} path 
 * @param {the name of the node being removed} name 
 * @param {the tree being removed from} r 
 */
function removeChild(path,name, r){
    var pathString = new String();
    var current = r.root;
    pathString = path;

    //goes through the path to the requested category
    var pathSeperated = pathString.split('/')
    if(pathSeperated[0] === "root"){
        var i =1;
    }
    else{
        var i = 0;
    }
    for(; i < pathSeperated.length-1;i++){

        current.children.forEach(element => {
            if(pathSeperated[i] === element.name){
                current = element;
            }
        });
    }
    var i = 0;
    var check = current.children[i].name;
    while(check != name){
        i++
    }
    
    delete current.children[i];
    return r;
}


export {node, tree, getChildren, findNode, addChild, removeChild};
