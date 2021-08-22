//1

// var toDoList = [
//   { name: "home-work", isComplited: false },
//   { name: "clean", isComplited: true },
//   { name: "cook", isComplited: true },
//   { name: "clean the car", isComplited: true },
//   { name: "read a book", isComplited: false },
// ];

// var firstDiv = document.getElementById("firstBtnContain");
// var firstInput = document.getElementById("newInput");
// var firstButton = document.getElementById("firstBtn");
// firstButton.onclick = function () {
//   var newMission = {
//     name: firstInput.value,
//     isComplited: false,
//   };
//   toDoList.push(newMission);

//   firstDiv.innerHTML += `<p>${newMission.name}<br>${newMission.isComplited}<br></p>`;
//   console.log(toDoList);
// };

// for (let i = 0; i < toDoList.length; i++) {
//   if (toDoList[i].isComplited) {
//     document.write(
//       `<p style=background:red>${toDoList[i].name}<br>${toDoList[i].isComplited}<br></p>`
//     );
//     toDoList[i].id = Math.floor(Math.random() * 2001);
//   }
// }

//2
// var secondDiv = document.getElementById("moviesContainer");
// var movies = [
//   {
//     name: "the jocker",
//     img: "https://images.pexels.com/photos/6945064/pexels-photo-6945064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     acters: ["dana", "sasha", "leonardo"],
//   },
//   {
//     name: "inside out",
//     img: "https://lumiere-a.akamaihd.net/v1/images/h_insideout_mobile_19751_befd1504.jpeg?region=0,0,640,480",
//     acters: ["dana", "sasha", "leonardo"],
//   },
//   {
//     name: "soul",
//     img: "https://lumiere-a.akamaihd.net/v1/images/au_homepage_soul_hero_m2_e90eaefa.jpeg?region=0,0,750,668",
//     acters: ["dana", "sasha", "leonardo"],
//   },
// ];

// for (let i = 0; i < movies.length; i++) {
//   secondDiv.innerHTML += `<p>${movies[i].name}</p><img src="${movies[i].img}"/><p>${movies[i].acters}</p>`;
// }

// //3
// var secondDiv = document.getElementById("secBtnContainer");
// var secondInput = document.getElementById("secInput");
// var secondButton = document.getElementById("secBtn");

// secondButton.onclick = function () {
//   secondDiv.innerHTML += `${secondInput.value}<br>`;
// };

// //4

// var thirdDiv = document.getElementById("thirdBtnContainer");
// var thirdInput = document.getElementById("thirdInput");
// var fourthInput = document.getElementById("fourthInput");
// var thirdButton = document.getElementById("thirdBtn");

// thirdButton.onclick = function () {
//   var newObject = {
//     name: thirdInput.value,
//     lastName: fourthInput.value,
//   };
//   thirdDiv.innerHTML += `${newObject.name}${newObject.lastName}`;
// };

//5
// var fourthDiv = document.getElementById("fourthDiv");
// var fourthButton = document.getElementById("fourthBtn");
// var nameInput = document.getElementById("name");
// var emailInput = document.getElementById("email");
// var ageInput = document.getElementById("age");
// fourthButton.onclick = function () {
//   user = {
//     name: nameInput.value,
//     email: emailInput.value,
//     age: ageInput.value,
//   };
//   fourthDiv.innerHTML += `<p>${user.name}<br>${user.email}<br>${user.age}<br></p>`;
// };

//6
// var fifthDiv = document.getElementById("fifthDiv");
// var userName = document.getElementById("firstName");
// var userLastName = document.getElementById("lastName");
// var fifthButton = document.getElementById("fifthBtn");

// fifthButton.onclick = function () {
//   var person = {
//     name: userName.value,
//     lastName: userLastName.value,
//   };
//   fifthDiv.innerHTML += `${person.name}<br>${person.lastName}<br>`;
// };

//7
// var sixthDiv = document.getElementById("sixthDiv");
// for (let i = 0; i < 10; i++) {
//   sixthDiv.innerHTML += `<p>${[i]}</p>`;
// }

//8

// var emailArray = [
//   "damedir335@fleeebay.com",
//   "damedir12@fleeebay.com",
//   "damedir@fleeebay.com",
// ];
// var sevenDiv = document.getElementById("sevenDiv");
// var userInput = document.getElementById("userInput");
// var sixtButton = document.getElementById("sixthBtn");

// sixtButton.onclick = function () {
//   if (emailArray.indexOf(userInput.value) > -1) {
//     sevenDiv.innerHTML += `<p>${"your email is on the list"}</p>`;
//   } else {
//     sevenDiv.innerHTML += `<p>${"your email isn't on the list"}</p>`;
//   }
// };

//9
// var p = document.getElementById("par");
// var eightInput = document.getElementById("stringWithSpc");
// var seventhButton = document.getElementById("seventhBtn");
// seventhButton.onclick = function () {
//   p.innerHTML += `${eightInput.value.length}<br> ${eightInput.value}<br>`;
// };

//10
// var eightDiv = document.getElementById("eightDiv");
// var fullName = document.getElementById("fullName");
// var brthCountry = document.getElementById("brthCountry");
// var userAge = document.getElementById("userAge");
// var eightButton = document.getElementById("eightButton");

// eightButton.onclick = function () {
//   personObject = {
//     fullName: fullName.value,
//     birthCountry: brthCountry.value,
//     img: "https://images.pexels.com/photos/4498372/pexels-photo-4498372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     age: userAge.value,
//   };
//   eightDiv.innerHTML += `<p>${personObject.fullName}<br>${personObject.birthCountry}<br><img src="${personObject.img}"/><br>${personObject.age}<br></p>`;
// };
