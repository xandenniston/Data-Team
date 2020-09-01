/** @class foodItem 
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
 class foodItem {
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

export {foodItem};