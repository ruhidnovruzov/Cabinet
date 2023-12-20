class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

class Teacher extends Person {
  constructor(name, surname, age, seniority, subject) {
    super(name, surname, age);
    this.seniority = seniority;
    this.subject = subject;
  }
}

class Student extends Person {
  constructor(name, surname, age, course, profession) {
    super(name, surname, age);
    this.course = course;
    this.profession = profession;
  }
}

function teacherEvent() {
  hideAllButtons();
  let form = document.querySelector("#form");
  form.innerHTML = `
    <input type="text" placeholder="Ad" id="name"> <br>
    <input type="text" placeholder="Soyad" id="surname"><br>
    <input type="text" placeholder="Yaş" id="age"><br>
    <input type="text" placeholder="Staj" id="staj"><br>
    <input type="text" placeholder="Fənn" id="subject"><br>
    <button type="button" onclick="sendTeacher()" class="send">Göndər</button>
  `;
}

function studentEvent() {
  hideAllButtons();
  let form = document.querySelector("#form");
  form.innerHTML = `
    <input type="text" placeholder="Ad" id="name"> <br>
    <input type="text" placeholder="Soyad" id="surname"><br>
    <input type="text" placeholder="Yaş" id="age"><br>
    <input type="text" placeholder="Neçənci kursda olduğu" id="course"><br>
    <input type="text" placeholder="İxtisas" id="profession"><br>
    <button type="button" onclick="sendStudent()" class="send">Göndər</button>
  `;
}

function hideAllButtons() {
  var buttons = document.querySelectorAll('button');
  buttons.forEach(function (button) {
    button.style.display = 'none';
  });
}

function sendTeacher() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const staj = document.getElementById("staj").value;
  const subject = document.getElementById("subject").value;

  const teacher = new Teacher(name, surname, age, staj, subject);
  addToTable(teacher);
}

function sendStudent() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;
  const profession = document.getElementById("profession").value;

  const student = new Student(name, surname, age, course, profession);
  addToTable(student);
}

function addToTable(person) {
  const table = document.querySelector("#dataTable");
  const row = table.insertRow();

  for (const key in person) {
    const cell = row.insertCell();
    cell.textContent = person[key];
  }
}