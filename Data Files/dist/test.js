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
    console.log(p);
}

function testNodeConstructor(){
    var n = new node("testNode", "testType");
    assertEqual("testNode",n.name, "testNodeConstructorName");
    assertEqual(null,n.parent,"testNodeConstructorParent");
    assertEqual([].length,n.children.length,"testNodeConstructorChildren");
}

function testTreeConstructor(){
    var t = new tree("testRoot");
    assertEqual("testRoot",t.root.name, "testTreeConstructorName");
    assertEqual(null,t.root.parent,"TestRootNodeParentNull");

}

function testAddChild(){
    var r = new tree("root");
    var child = new node ("child", "child");
    addChild("root", child);
    assertEqual("child",r.root.children[0].name, "testAddChild");
}


function testaddFoodItemToDictionary(){
    var dict = addFoodItemToDictionary("testName", "testDescription", "testExamples",true,true,true,true,[])
    assertEqual("testDescription",dict["testName"].description, "testDescription");
    assertEqual(true, dict["testName"].snap, "testBools");
}

testaddFoodItemToDictionary();

//testAddChild();
testNodeConstructor();
testTreeConstructor();
