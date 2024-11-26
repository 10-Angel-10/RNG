//We will pull the data drom the JSON file and randomly select a student
//Create a function that then randomize a selection from that data
//On a button click we will display the data onto the DOM

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let CSEmail = document.getElementById('CSEmail');
let randomName = document.getElementById('randomName'); 
let email = document.getElementById('email');


//Create a function that will pull the data from the JSON file
// .then() is a promisse that will wait for the data to be returned
// promise can be accepted or rejected
function getStudentData(){
   return fetch('../data/data.json')
    .then( response => response.json())
    .then( data => {
        console.log(data)
        return data.students
    })    
}

getStudentData();

//Create a function that will randomize the selection of a student
function getRandomStudent(students){
    let randomIndex =  Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex];
} 


//Create a function that will display the data onto the DOM
randomName.addEventListener('click', () => {
    getStudentData().then( students => {
        let randomStudent = getRandomStudent(students);
        console.log(randomStudent);
        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        CSEmail.innerText = randomStudent.CSEmail;
        email.innerText = randomStudent.email;
    })
});