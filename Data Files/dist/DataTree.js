import { foodItem } from './FoodItem.js';
import {  node, tree, getChildren, findNode, addChild } from './TreeNode.js';



var dict ={key: "value"};
var root = new tree();

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

function removeFoodItemFromDictionary(name){
    delete dict[name];
    return dict;
}

function jsonify(){
    var dictstr = JSON.stringify(dict);
    var rootStr = JSON.stringify(root);
    var output = {
        dictstr,
        rootStr
    };
    return output;
}

function addCategory(name, type, children){
    //TODO


}

export{addFoodItemToDictionary, removeFoodItemFromDictionary, jsonify}