var data = null;

/** @function fetchData 
 *  Retrieves the data from the JSON file 
 */
function fetchData() {
    data ={
        "alerts":["Example Alert!","Covid Prevention..."],
        "updates":["Subcategory is now a Test subcategory"],
        "data":
        {
            "Root": {
                type: "category",
                name: "root", 
                children: ["Test Category"]
            },
            "Test Category": {
                type: "category",
                name: "Test Category",
                children: [
                    "Test Category/Test SubCategory", 
                    "Test Entry"
                ]
            },
            "Test Category/Test Subcategory": {
                type: "category",
                name: "Test Category/Test Subcategory",
                children: []
            },
            "Test Entry": {
                type: "entry",
                name: "Test Entry",
                description: "This is a test entry",
                examples: "",
                license: false,
                temperatureControl: false,
                snapEligible: false,
                testingRequired: false
            }
        }
    }
    return;
    fetch('data.json').then(res => res.json()).then(dataObj => {
        data = dataObj;
    });
}

/**
 * @function getAlerts
 * Gets the array of Alerts from the JSON data.
 */
function getAlerts(){
    return data.alerts;
}

/**
 * @function getUpdates
 * gets the array of updates from the JSON data.
 */
function getUpdates(){
    return data.updates;
}
/** @function search
 *  Performs a "fuzzy" search for the specified terms, which 
 *  is probably a string of space-separated words
 *  @param {string} terms - the terms to search for
 */
function search(terms) {
    if(data === null) throw "Data not loaded";
    // TODO: Implement
    // For testing:
    return ["Chickens (> 100)", "Chickens (< 100)", "Eggs"];
}

/** @function getDataNode(identifier)
 *  returns the specified entry in the category 
 *  tree.  This will either be a entry node or 
 *  a category node.  The root of the tree 
 * (the top-level categories) has the identifier "Root"
 *  @param identifier - a string identifying a 
 *  category, with slashes denoting levels up/down 
 *  in the tree, i.e. "Produce", or "Meat/Poultry"
 *  @returns the entry or category, or undefined if it 
 *  does not exist
 */
function getDataNode(identifier) {
    if(data === null) throw "Data not loaded";
    // TODO: Implement
    return data.entries[identifier];
}

/** @function ParseJSON
 * ParseJSON object into the tree
 * @param {JSONObject} unparsedJSON - the unparsed JSON object
 * @returns the tree node to the top of the tree?
 */
function ParseJSON(unparsedJSON) {
    // TODO: ParseJSON
    return null; //parsed JSON object;
}

/** @class Category 
 * Represents a category in the tree, has a 
 * "children" property which is all sub-categories or leafs 
 * of this category.
 * @property {string} type - should always be "category" 
 * @property {string} name - the name of the category 
 * @property {Array} children - the names of the children of this array
 */
class Category {
    constructor() {
        this.type = "category";   
        this.name = "Test Category";
        this.children = []; 
    }    
}

/** @class Entry 
  * Represents an entry and has the following properties:
  * @property {string} type - should always be "entry"
  * @property {string} name - the name of the product
  * @property {description} description - the description of the product
  * @property {examples} examples - a list of examples 
  * @property {bool} license - if a license is required 
  * @property {bool} temperatureControl - if temperature control is needed 
  * @property {bool} snapEligible - if it is SNAP eligible 
  * @property {bool} testingRequired - if it requires testing 
  * @property {array} requirements - array of strings of additional information
  */
class Entry {
    constructor(name, description, examples, license, temperature, snap, testing, requirements) {
        this.type = "entry";
        this.name = name;
        this.description = description;
        this.examples = examples;
        this.license = license;
        this.temperature = temperature;
        this.snap = snap;
        this.testing = testing;
        this.requirements = requirements;
    }
}

export {fetchData, search, getDataNode, getAlerts, getUpdates, Category, Entry};