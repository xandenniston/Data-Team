import { foodItem } from './FoodItem.js';
import {  node, tree, getChildren, findNode, addChild } from './TreeNode.js';
import {addFoodItemToDictionary, jsonify} from './DataTree.js';

function assertEqual(expected, actual, testname){
    if(expected === actual){
        var p = document.createElement('p');
        p.textContent = `${testname} passed`;
    }
    else{
        var p = document.createElement('p');
        p.textContent = `${testname} failed, expected ${expected}, was ${actual}`;
    }
}

function testNodeConstructor(){
    var node = new Node("testNode");
    assertEqual("testNode",node.name, "testNodeConstructor");
    assertEqual(null,node.parentNode,"testNodeConstructor");
    assertEqual([],node.childNodes,"testNodeConstructor");
}

testNodeConstructor();