//Learning the Obejct Oriented Javascript.
//declare a function object using this keyword property.
function Ship() {
    this.floats = true;
    this.material = 'Steel';
}
const myShip = new Ship(); //Made an instance where new keyword is required
console.log(myShip.material);

const person = {
    name: "Ibrahim Hossain",
    age: 24,
    height: 5.8+"FT",
    info: function() {
        console.log("My name is "+person.name + " And age is " + this.age + " height is "+this.height);
    }
}
//now inherite the person object.
const jewel = Object.create(person);
//here jewel inherited all the person properites and method.
jewel.name = "Jewel Rana";
jewel.age = 44;
jewel.info();
//Create Object 3;
const ibrahim = Object.create(jewel);//here ibrahim is new object that inherite data from the jewel object.
console.log(jewel.hasOwnProperty("name"));

//Now make an Object constructor with a function.
