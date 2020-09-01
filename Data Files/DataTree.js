import { foodItem } from './FoodItem.js';
import {  node, tree, getChildren, findNode, addChild } from './TreeNode.js';



var dict = new Object();
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
    dict[name] = foodItem;
}

function jsonify(){
    var output = {
        JSON.stringify(dict),
        JSON.stringify(root)
    };
    return output;
}

function addCategory(name, type, children){
		//TODO
	

}