

// 1 creating object using object literal notation


let Student={
    name:"amina",
    age:20,
    course:"Data science"
} 
console.log(Student);


// 2 creating object using constructor function


function Employee (name, salary, role){
    this.name=name;
    this.salary=salary;
    this.role=role;
}


emp1=new Employee("ahmed", 1200, "manager")
console.log(emp1)
emp2=new Employee("hassan", 1000, "hr")
console.log(emp2)
emp3=new Employee("ali", 800, "waiter")
console.log(emp3)
emp4=new Employee("hamdi", 1000, "receptionst")
console.log(emp4)

// fm 3 creating object using class 


class Teacher{
    constructor(name, subject , experience){
        this.name=name;
        this.subject=subject;
        this.experience=experience;
    }
}

teacher1= new Teacher("roble",' python', 12);
teacher1.name="azam";
teacher1.level="Phd";
console.log(teacher1)
teacher2= new Teacher("iqra",' java', 8);
teacher2["experience"]=5
console.log(teacher2)


// 4 bank acount

class BankAccount{
    constructor(accNumber, ownerName, balance){
        this.accNumber=accNumber;
        this.ownerName=ownerName;
        this.balance=balance;
        this.withdrow=function (){
            let amount=prompt("enter the amount you want:");
            alert( (amount<this.balance)? this.balance-=amount: " haraagaaga kuguma filna ")
        }
        this.deposit=function (){
            let amount=parseInt(prompt("enter amount to deposit:"))
            this.balance+=amount
        }
    }
}

acc1=new BankAccount("AC2001", "Muse", 500);
alert(acc1.balance);
acc1.deposit();
alert(acc1.balance);
acc1.withdrow()
alert(acc1.balance)



// 1️⃣ Laptop Object – Access & Update
let laptop = { 
  brand: "Dell",
  ram: "8GB",
  price: 700
};

console.log("Brand:", laptop.brand);
laptop.ram = "16GB";
console.log("Updated RAM:", laptop.ram);


// 2️⃣ User Profile – Access & Update
let user = {
  username: "Ali2025",
  email: "ali@example.com",
  age: 22
};

console.log("Old Email:", user.email);
user.email = "ali.new@example.com";
console.log("Updated Email:", user.email);


// 3️⃣ Hotel Room Object – Access & Update
let room = {
  roomNumber: 105,
  price: 50,
  type: "Single"
};

console.log("Old Price:", room.price);
room.price = 40;
console.log("New Price:", room.price);


// 1️⃣ Car Object – Add New Elements
let car = {
  brand: "Honda",
  model: "Civic",
  year: 2019
};

car.owner = "Omar";
car["last-service-date"] = "2025-01-01";

console.log(car);


// 2️⃣ Student Object – Add New Elements
let student = {
  name: "Maryam",
  grade: "A",
  school: "Afbaro Academy"
};

student.age = 18;
student["favorite-subject"] = "Physics";

console.log(student);


// 3️⃣ Shop Item Object – Add New Elements
let item = {
  itemName: "Milk",
  price: 2,
  category: "Food"
};

item.quantity = 30;
item["discount-percentage"] = 10;

console.log(item);


// 1️⃣ Restaurant Menu
let menu = {
  burger: 5,
  pizza: 8,
  juice: 3
};

for (let item in menu) {
  console.log(item + ": " + menu[item]);
}



// 2️⃣ City Information

let city = {
  population: 500000,
  mayor: "Hassan",
  area: "200 sq km"
};

for (let key in city) {
  console.log(key + ": " + city[key]);
}

// 3️⃣ Classroom Schedule


let schedule = {
  math: "8:00 AM",
  english: "10:00 AM",
  science: "1:00 PM"
};

for (let subject in schedule) {
  console.log(subject + ": " + schedule[subject]);
}

// 1️⃣ Movie Object → JSON

let movie = {
    title: "Inception",
    duration: "2h 30m",
    rating: 9
};
let movieJSON = JSON.stringify(movie);
console.log(movieJSON);

// 2️⃣ JSON String → Object

let jsonString = '{"name":"Sara","age":25,"country":"Kenya"}';
let person = JSON.parse(jsonString);

console.log(person.name);
console.log(person.age);
console.log(person.country);


// 3️⃣ Weather Object → JSON → Object

let weather = { temperature: 32, humidity: "70%", condition: "Sunny" };
let weatherJSON = JSON.stringify(weather);
let weatherObj = JSON.parse(weatherJSON);

console.log(weatherObj);
