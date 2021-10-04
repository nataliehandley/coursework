// const studentContainer = document.querySelector(".students-container");

// // studentContainer.style.border = "50px solid red";

// const person = {
//     firstName: "Natalie",
//     lastName: "Handley",
//     quote: "Hands, face , space",
//     skills: ["html", "css", "javascript"],  
//     imgURL: "./—Pngtree—user free button png image_4687746.png",
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     getSkillsHTML() {
//         const skillsHTML =  this.skills.map(skill => `<li>${skill}</li>`);
//         console.log(skillsHTML);
//         return skillsHTML.join("\n");
//     },
//     getPersonHTML() {
//        const personHTML = `
//     <article class="student-card">
//         <img src=${this.imgURL} />
//         <h2>${this.getFullName()}</h2>
//         <blockquote>${this.quote}</blockquote>
//         <h3>Skills</h3>
//         <ul>${this.getSkillsHTML()}</ul>
//     </article 
//     `
//         return personHTML;
//     }
// }

// for (let index = 0; index < 10; index++) {
//     studentContainer.innerHTML += person.getPersonHTML();
// }
    // studentContainer.innerHTML = `
    // <article class="student-card">
    //     <img src=${person.imgURL}/>
    //     <h2>${person.getFullName()}</h2>
    //     <blockquote>${person.quote}</blockquote>
    //     <h3>Skills</h3>
    //     <ul>${person.getSkillsHTML()}</ul>
    // </article 
    // `;

// //write a method on person object that uses the skills array
// //iterate over skills array and generate a list item for each skill
// //<li>html</li>
// //turn array into a string
// // person.age = 30;
// //console.log(person.getSkills());

// //FIRST NAME AND AND LAST NAME ONTO THE CONSOLE
// //console.log(person.firstName + " " + person.lastName);


// //GET METHOD ONTO CONSOLE
// //console.log(person.getFullName());

// //CLASS SYNTAX

// //PascalCase naming convention for classes
//  class ExampleClass {
//     constructor (firstName, lastName, age) {
//         this.firstName = firstName,
//        this.lastName = lastName,
//         this.age = age
//    } 
//    greet() {
//    return `Hi! My name is ${this.firstName} ${this.lastName}`
// }
//  }

// // CLASS INHERITANCE SYNTAX
// class ExtendedClass extends ExampleClass {
//     constructor (firstName, lastName, age, subject) {
//         super(firstName, lastName, age),
//         (this.subject = subject);
// }
// greet() {
//     return `Hi, I am Mrs ${this.lastName}, I will teach you ${this.subject}`;
// }
// }
// console.log( new ExtendedClass("Natalie", "Handley", 36, "Javascript").greet());
// // const exampleOne = new ExampleClass("Natalie", "Handley", 36);

// // console.log(exampleOne.greet());




class PersonClass {
    constructor (firstName, lastName, quote, skills, imgURL) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.quote = quote,
        this.skills = skills,
        this.imgURL = imgURL
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getSkillsHTML() {
        const skillsHTML =  this.skills.map(skill => `<li>${skill}</li>`);
        return skillsHTML.join("\n");
    }
    getPersonHTML() {
       const personHTML = `
    <article class="student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
    </article 
    `;
        return personHTML;
    };

}

class PremiumProfile extends PersonClass {
    constructor(firstName, lastName, quote, skills, imgURL, contactLink) {
        super(firstName, lastName, quote, skills, imgURL),
        this.contactLink = contactLink
    }
    getPersonHTML() {
        const personHTML = `
     <article class="student-card">
         <img src=${this.imgURL} />
         <h2>${this.getFullName()}</h2>
         <blockquote>${this.quote}</blockquote>
         <h3>Skills</h3>
         <ul>${this.getSkillsHTML()}</ul>
         <a href=${this.contactLink}>Lets get in touch!</a>
     </article 
     
     `;
         return personHTML;
     };
 
}

const studentContainer = document.querySelector(".students-container");

const natalie = new PremiumProfile(
"Natalie",
"Handley",
"Hands, face , space",
["html", "css", "javascript"],
"https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
"http://natalieh.io/"
);

const exampleOne = new PersonClass(
    "Alexander",
    "Swallow",
    "Hands, face , space",
    ["html", "css", "javascript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
    );

const exampleTwo = new PersonClass(
    "Theo",
    "Swallow",
     "Hands, face , space",
    ["html", "css", "javascript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
    );
studentContainer.innerHTML += natalie.getPersonHTML();
studentContainer.innerHTML += exampleOne.getPersonHTML();
studentContainer.innerHTML += exampleTwo.getPersonHTML();







// //Object syntax
// const exampleObject = {
//     key : "value" ,
//     types: "any",
//     method() {
//         //DO SOMETHING
//         return this.key + " " +  this.types;
//     }
// }

// //Acess Objects

// //dot notation

// console.log(exampleObject.key)
// console.log(exampleObject.types)

// //caling a method
// console.log(exampleObject.method())

// //square brackets

// console.log(exampleObject["key"]);
// console.log(exampleObject["types"]);

// //adding a key to an object

// exampleObject.newKey = "new value";
// console.log(exampleObject);}