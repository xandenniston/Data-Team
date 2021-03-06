import { foodItem } from './FoodItem.js';
import {  node, tree, getChildren, removeChild, addChild } from './TreeNode.js';



var dict ={key: "value"};
var t = new tree();

/**@function addFoodItemToDictionary this function adds an item to the dictionary with the name as the key
 * 
 * @param {string} name 
 * @param {string} description 
 * @param {string} examples 
 * @param {bool} license 
 * @param {bool} temperature 
 * @param {bool} snap 
 * @param {bool} testing 
 * @param {Array} requirements 
 */
function addFoodItemToDictionary(name, description, examples, license, temperature, snap, testing, requirements){
    var foodEntry = new foodItem(name, description, examples, license, temperature, snap, testing, requirements);
    dict[name] = foodEntry;
    return dict;
}

/**@function removeFoodItemFromDictionary
 * this function removes a food item from the dictionary
 * 
 * @param {string} name the name of the item being removed. 
 */
function removeFoodItemFromDictionary(name){
    delete dict[name];
    return dict;
}

/**@function jsonify
 * this function turns the tree and dictionary into a json object. They are returned as a serialized array.
 * 
 * @param {dictionary} dict4 the dictionary to serialize 
 * @param {tree} t4 the tree to serialzie 
 */
function jsonify(dict4, t4){
    var dictstr = JSON.stringify(dict4);
    var rootStr = JSON.stringify(t4);
    var output = [];
    output[0] = dictstr;
    output[1] = rootStr;
    return JSON.stringify(output);
}

/**@parseJson
 * this function parses a JSON object into a tree and dictionary.
 * 
 * @param {string} input the json string
 */
function parseJSON(input){
    var a = JSON.parse(input);
    dict = JSON.parse(a[0]);
    t = JSON.parse(a[1]);
    return [dict, t];
}


/**@function addToTree this will add a food or category. If it is a category
 * you should create a node and pass it through
 * 
 * @param {string} path this is the path through the tree. including "root" is optional. An example "root/dairy" or simply "dairy"  
 * @param {node/string} child the child adding. This can be a category or the name of the food.
 */
function addToTree(child, path){
    t = addChild(path,child,t);
}
/**@function addCategory This method adds a category with its children.
 *  this overload requires a path
 * @param {string} name the name of the category
 * @param {array} children the array of children
 * @param {string} path this is the path through the tree. including "root" is optional. An example "root/dairy" or simply "dairy". If not sure, simply put "root".
 */
function addCategory(name, children, path){
    var n = new node(name,"category",children);
    t = addToTree(n,path);
}


/**@function getCategoryChildren
 * this will get the category's children. Use this to find out what food is in a category
 * 
 * @param {string} path this is the path through the tree. including "root" is optional. An example "root/dairy" or simply "dairy" 
 */
function getCategoryChildren(path){
    return getChildren(path, t);
}

/**@function removeCategory
 * this function removes a category. WARNING all children will lose references.
 * This will not delete the foodItem from the dictionary, but will lose names from tree
 * 
 * @param {string} path the path where to node to be deleted is
 * @param {string} name the name of the node to delete
 */
function removeCategory(path, name){
    t = removeChild(path,name, t);
}

export{addFoodItemToDictionary, removeFoodItemFromDictionary, jsonify, removeCategory, getCategoryChildren, addCategory}