import { foodItem } from './FoodItem.js';
import {  node, tree, getChildren, findNode, addChild } from './TreeNode.js';
import {addFoodItemToDictionary, jsonify, removeFoodItemFromDictionary} from './Controller.js';

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

function testJsonify(){
    var a = [];
    var t = new tree ("testRoot");
    var dict = addFoodItemToDictionary("testName", "testDescription", "testExamples",true,false,true,true,[]);
    a = JSON.parse(jsonify(dict,t));
    console.log(a);
    var dict2 = JSON.parse(a[0]);
    assertEqual(false,dict2["testName"].temperature, "test Jsonify");
    //console.log(a); //use this to inspect JSON manually
}


function testNodeConstructor(){
    var n = new node("testNode", "testType",[]);
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
    r = addChild("root", child,r);
    
    assertEqual("child", r.root.children[0].name, "testAddChild");
    
}

function testAddMultipleChildren(){
    var r = new tree("root");
    var child = new node ("child", "child",[]);
    r = addChild("root", child,r);
    child = new node ("child2", "child2",[]);
    r = addChild("root", child,r);
    child = new node ("child3", "child3",[]);
    r = addChild("root", child,r);
    assertEqual("child", r.root.children[0].name, "testAddMultipleChildren1");
    assertEqual("child2", r.root.children[1].name, "testAddMultipleChildren2");
    assertEqual("child3", r.root.children[2].name, "testAddMultipleChildren3");

}

function testAddFoodNameToTree(){
    var r = new tree("root");
    var child = new node ("category", "category", []);
    r = addChild("root", child,r);
    r = addChild("root/category","testFood",r);
    assertEqual("testFood", r.root.children[0].children[0], "testAddFoodItemToTree");
}

function testGetChildren(){
    var r = new tree("root");
    var child = new node ("category", "category", []);
    r = addChild("root", child,r);
    r = addChild("category","testFood",r);
    r = addChild("root/category","testFood2",r);
    r = addChild("root/category","testFood3",r);
    r = addChild("root/category","testFood4",r);
    r = addChild("root/category","testFood5",r);
    var c =  getChildren("root/category", r);
    assertEqual("testFood3", c[2], "testGetChildren");
}


function testaddFoodItemToDictionary(){
    var dict = addFoodItemToDictionary("testName", "testDescription", "testExamples",true,true,true,true,[])
    assertEqual("testDescription",dict["testName"].description, "testDescription");
    assertEqual(true, dict["testName"].snap, "testBools");
}

function testDeleteFoodItemFromDictionary(){
    var dict = addFoodItemToDictionary("testName", "testDescription", "testExamples",true,true,true,true,[])
    dict = addFoodItemToDictionary("testName2", "testDescription2", "testExamples2",false,false,false,false,[])
    dict = removeFoodItemFromDictionary("testName");
    assertEqual(undefined,dict["testName"], "testDelete");
  
}

testJsonify();
testaddFoodItemToDictionary();
testDeleteFoodItemFromDictionary();
testAddChild();
testAddMultipleChildren();
testAddFoodNameToTree();
testNodeConstructor();
testTreeConstructor();
testGetChildren();
