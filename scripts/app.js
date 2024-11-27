let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let CSEmail = document.getElementById('CSEmail');
let randomName = document.getElementById('randomName'); 
let email = document.getElementById('email');

let last5 = ["", "", "", "", ""];
let start = true;

// Fetch student data from the JSON file
function getStudentData() {
    return fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            return data.students;
        });
}

// Randomly select a student from the list
function getRandomStudent(students) {
    let randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
}

// Update the display of the last 5 names
function updateLast5Display() {
    const last5Element = document.getElementById('last5');
    // We only want to update the names part, not the "Last 5 names:" title
    last5Element.innerHTML = '<h3>Last 5 names:</h3>';
    
    // Loop through the last5 array and display each student's name
    last5.forEach(student => {
        if (student) {
            last5Element.innerHTML += `<p>${student.firstName} ${student.lastName}</p>`;
        }
    });
}

// Event listener for the button click to get a random student
randomName.addEventListener('click', () => {
    getStudentData().then(students => {
        let randomStudent = getRandomStudent(students);
        // Update the main student info on the page
        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        CSEmail.innerText = randomStudent.CSEmail;
        email.innerText = randomStudent.email;

        // Add the new student to the beginning of the last5 array
        last5.unshift(randomStudent);
        if (last5.length > 5) {
            last5.pop(); // Remove the last item if the array has more than 5 students
        }

        // Update the "Last 5 names" section with the most recent 5 names
        updateLast5Display();
    });
});
