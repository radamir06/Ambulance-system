function myFunction() {
  localStorage.setItem("fname", document.getElementById("fname").value);
  localStorage.setItem("phone", document.getElementById("phone").value);
  localStorage.setItem("doctor", document.getElementById("doctor").value);
  localStorage.setItem("date", document.getElementById("date").value);
  localStorage.setItem("time", document.getElementById("time").value);
 
  if (document.getElementById('doctor').value==="Выберите доктора"){
    alert("Вы не выбрали доктора")
  }
  else if (document.getElementById('time').value==="Выберите время"){
    alert("Вы не выбрали время")
  }
  else{}



};
function callDoctor() {
  document.getElementById('doctorForm').style.display = 'block'
};




var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";

  };
};

function drLogin() {
  const login = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;
  const users = {
    byodendebo: "byoden1234",
    denisenkovanton: "denisenkov1234",
    petuhyuriy: "petuh1234",
    chakiranmikael: "mikael1234",
    abazovagif: "vagif1234",
    abasovajamilya: "jamilya1234",
    abdulayevasati: "sati1234",
    abdullayevnaida: "naida1234",
    abdulloyevshoz: "shoz1234",
  };

  if (password === "byoden1234") {
    localStorage.setItem("name", "byoden")
    window.open("../personal account/index.html");


  }
  else if (users[login] === "denisenkov1234") {
    localStorage.setItem("name", "denis")
    window.open("../personal account/index.html");
  }
  else if (users[login] === "petuh1234") {
    localStorage.setItem("name", "petuh")
    window.open("../personal account/index.html");
  }
  else if (users[login] === "mikael1234") {
    localStorage.setItem("name", "mikael")
    window.open("../personal account/index.html");
  }
  else if (users[login] === "vagif1234") {
    localStorage.setItem("name", "vagif")
    window.open("../personal account/index.html");
  }
  else if (users[login] === "jamilya1234") {
    localStorage.setItem("name", "jamilya")
    window.open("../personal account/index.html");
  }
  else if (users[login] === "sati1234") {
    localStorage.setItem("name", "sati")
    window.open("../personal account/index.html");
  }
  else if (users[login] === "naida1234") {
    localStorage.setItem("name", "naida")
    window.open("../personal account/index.html");
  }
  else if (users[login] === "shoz1234") {
    localStorage.setItem("name", "shoz")
    window.open("../personal account/index.html");
  }
  else alert("Логин или пароль были введены не верно,повторите еще раз.");


};

function nameSearch() {
  if (localStorage.getItem("name") === "byoden") {
    document.getElementById('byoden').style.display = 'block'
    document.getElementById('byoden1').style.display = 'block'
    document.getElementById('byoden2').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'block'
    document.getElementById('byodenAva1').style.display = 'block'
    document.getElementById('denisAva').style.display = 'none'
    document.getElementById('denisAva1').style.display = 'none'
    document.getElementById('petuhAva').style.display = 'none'
    document.getElementById('petuhAva1').style.display = 'none'
    document.getElementById('mikaelAva').style.display = 'none'
    document.getElementById('mikaelAva1').style.display = 'none'
    document.getElementById('vagifAva').style.display = 'none'
    document.getElementById('vagifAva1').style.display = 'none'
    document.getElementById('jamilyaAva').style.display = 'none'
    document.getElementById('jamilyaAva1').style.display = 'none'
    document.getElementById('satiAva').style.display = 'none'
    document.getElementById('satiAva1').style.display = 'none'
    document.getElementById('naidaAva').style.display = 'none'
    document.getElementById('naidaAva1').style.display = 'none'
    document.getElementById('shozAva').style.display = 'none'
    document.getElementById('shozAva1').style.display = 'none'

  }
  else if (localStorage.getItem("name") === "denis") {
    document.getElementById('denis').style.display = 'block'
    document.getElementById('denis1').style.display = 'block'
    document.getElementById('denis2').style.display = 'block'
    document.getElementById('denisAva').style.display = 'block'
    document.getElementById('denisAva1').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'none'
    document.getElementById('byodenAva1').style.display = 'none'
    document.getElementById('petuhAva').style.display = 'none'
    document.getElementById('petuhAva1').style.display = 'none'
    document.getElementById('mikaelAva').style.display = 'none'
    document.getElementById('mikaelAva1').style.display = 'none'
    document.getElementById('vagifAva').style.display = 'none'
    document.getElementById('vagifAva1').style.display = 'none'
    document.getElementById('jamilyaAva').style.display = 'none'
    document.getElementById('jamilyaAva1').style.display = 'none'
    document.getElementById('satiAva').style.display = 'none'
    document.getElementById('satiAva1').style.display = 'none'
    document.getElementById('naidaAva').style.display = 'none'
    document.getElementById('naidaAva1').style.display = 'none'
    document.getElementById('shozAva').style.display = 'none'
    document.getElementById('shozAva1').style.display = 'none'
  }
  else if (localStorage.getItem("name") === "petuh") {
    document.getElementById('petuh').style.display = 'block'
    document.getElementById('petuh1').style.display = 'block'
    document.getElementById('petuh2').style.display = 'block'
    document.getElementById('petuhAva').style.display = 'block'
    document.getElementById('petuhAva1').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'none'
    document.getElementById('byodenAva1').style.display = 'none'
    document.getElementById('denisAva').style.display = 'none'
    document.getElementById('denisAva1').style.display = 'none'

    document.getElementById('mikaelAva').style.display = 'none'
    document.getElementById('mikaelAva1').style.display = 'none'
    document.getElementById('vagifAva').style.display = 'none'
    document.getElementById('vagifAva1').style.display = 'none'
    document.getElementById('jamilyaAva').style.display = 'none'
    document.getElementById('jamilyaAva1').style.display = 'none'
    document.getElementById('satiAva').style.display = 'none'
    document.getElementById('satiAva1').style.display = 'none'
    document.getElementById('naidaAva').style.display = 'none'
    document.getElementById('naidaAva1').style.display = 'none'
    document.getElementById('shozAva').style.display = 'none'
    document.getElementById('shozAva1').style.display = 'none'
  }
  else if (localStorage.getItem("name") === "mikael") {
    document.getElementById('mikael').style.display = 'block'
    document.getElementById('mikael1').style.display = 'block'
    document.getElementById('mikael2').style.display = 'block'
    document.getElementById('mikaelAva').style.display = 'block'
    document.getElementById('mikaelAva1').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'none'
    document.getElementById('byodenAva1').style.display = 'none'
    document.getElementById('denisAva').style.display = 'none'
    document.getElementById('denisAva1').style.display = 'none'
    document.getElementById('petuhAva').style.display = 'none'
    document.getElementById('petuhAva1').style.display = 'none'

    document.getElementById('vagifAva').style.display = 'none'
    document.getElementById('vagifAva1').style.display = 'none'
    document.getElementById('jamilyaAva').style.display = 'none'
    document.getElementById('jamilyaAva1').style.display = 'none'
    document.getElementById('satiAva').style.display = 'none'
    document.getElementById('satiAva1').style.display = 'none'
    document.getElementById('naidaAva').style.display = 'none'
    document.getElementById('naidaAva1').style.display = 'none'
    document.getElementById('shozAva').style.display = 'none'
    document.getElementById('shozAva1').style.display = 'none'
  }
  else if (localStorage.getItem("name") === "vagif") {
    document.getElementById('vagif').style.display = 'block'
    document.getElementById('vagif1').style.display = 'block'
    document.getElementById('vagif2').style.display = 'block'
    document.getElementById('vagifAva').style.display = 'block'
    document.getElementById('vagifAva1').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'none'
    document.getElementById('byodenAva1').style.display = 'none'
    document.getElementById('denisAva').style.display = 'none'
    document.getElementById('denisAva1').style.display = 'none'
    document.getElementById('petuhAva').style.display = 'none'
    document.getElementById('petuhAva1').style.display = 'none'
    document.getElementById('mikaelAva').style.display = 'none'
    document.getElementById('mikaelAva1').style.display = 'none'

    document.getElementById('jamilyaAva').style.display = 'none'
    document.getElementById('jamilyaAva1').style.display = 'none'
    document.getElementById('satiAva').style.display = 'none'
    document.getElementById('satiAva1').style.display = 'none'
    document.getElementById('naidaAva').style.display = 'none'
    document.getElementById('naidaAva1').style.display = 'none'
    document.getElementById('shozAva').style.display = 'none'
    document.getElementById('shozAva1').style.display = 'none'
  }
  else if (localStorage.getItem("name") === "jamilya") {
    document.getElementById('jamilya').style.display = 'block'
    document.getElementById('jamilya1').style.display = 'block'
    document.getElementById('jamilya2').style.display = 'block'
    document.getElementById('jamilyaAva').style.display = 'block'
    document.getElementById('jamilyaAva1').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'none'
    document.getElementById('byodenAva1').style.display = 'none'
    document.getElementById('denisAva').style.display = 'none'
    document.getElementById('denisAva1').style.display = 'none'
    document.getElementById('petuhAva').style.display = 'none'
    document.getElementById('petuhAva1').style.display = 'none'
    document.getElementById('mikaelAva').style.display = 'none'
    document.getElementById('mikaelAva1').style.display = 'none'
    document.getElementById('vagifAva').style.display = 'none'
    document.getElementById('vagifAva1').style.display = 'none'

    document.getElementById('satiAva').style.display = 'none'
    document.getElementById('satiAva1').style.display = 'none'
    document.getElementById('naidaAva').style.display = 'none'
    document.getElementById('naidaAva1').style.display = 'none'
    document.getElementById('shozAva').style.display = 'none'
    document.getElementById('shozAva1').style.display = 'none'

  }
  else if (localStorage.getItem("name") === "sati") {
    document.getElementById('sati').style.display = 'block'
    document.getElementById('sati1').style.display = 'block'
    document.getElementById('sati2').style.display = 'block'
    document.getElementById('satiAva').style.display = 'block'
    document.getElementById('satiAva1').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'none'
    document.getElementById('byodenAva1').style.display = 'none'
    document.getElementById('denisAva').style.display = 'none'
    document.getElementById('denisAva1').style.display = 'none'
    document.getElementById('petuhAva').style.display = 'none'
    document.getElementById('petuhAva1').style.display = 'none'
    document.getElementById('mikaelAva').style.display = 'none'
    document.getElementById('mikaelAva1').style.display = 'none'
    document.getElementById('vagifAva').style.display = 'none'
    document.getElementById('vagifAva1').style.display = 'none'
    document.getElementById('jamilyaAva').style.display = 'none'
    document.getElementById('jamilyaAva1').style.display = 'none'

    document.getElementById('naidaAva').style.display = 'none'
    document.getElementById('naidaAva1').style.display = 'none'
    document.getElementById('shozAva').style.display = 'none'
    document.getElementById('shozAva1').style.display = 'none'
  }
  else if (localStorage.getItem("name") === "naida") {
    document.getElementById('naida').style.display = 'block'
    document.getElementById('naida1').style.display = 'block'
    document.getElementById('naida2').style.display = 'block'
    document.getElementById('naidaAva').style.display = 'block'
    document.getElementById('naidaAva1').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'none'
    document.getElementById('byodenAva1').style.display = 'none'
    document.getElementById('denisAva').style.display = 'none'
    document.getElementById('denisAva1').style.display = 'none'
    document.getElementById('petuhAva').style.display = 'none'
    document.getElementById('petuhAva1').style.display = 'none'
    document.getElementById('mikaelAva').style.display = 'none'
    document.getElementById('mikaelAva1').style.display = 'none'
    document.getElementById('vagifAva').style.display = 'none'
    document.getElementById('vagifAva1').style.display = 'none'
    document.getElementById('jamilyaAva').style.display = 'none'
    document.getElementById('jamilyaAva1').style.display = 'none'
    document.getElementById('satiAva').style.display = 'none'
    document.getElementById('satiAva1').style.display = 'none'

    document.getElementById('shozAva').style.display = 'none'
    document.getElementById('shozAva1').style.display = 'none'
  }
  else if (localStorage.getItem("name") === "shoz") {
    document.getElementById('shoz').style.display = 'block'
    document.getElementById('shoz1').style.display = 'block'
    document.getElementById('shoz2').style.display = 'block'
    document.getElementById('shozAva').style.display = 'block'
    document.getElementById('shozAva1').style.display = 'block'
    document.getElementById('byodenAva').style.display = 'none'
    document.getElementById('byodenAva1').style.display = 'none'
    document.getElementById('denisAva').style.display = 'none'
    document.getElementById('denisAva1').style.display = 'none'
    document.getElementById('petuhAva').style.display = 'none'
    document.getElementById('petuhAva1').style.display = 'none'
    document.getElementById('mikaelAva').style.display = 'none'
    document.getElementById('mikaelAva1').style.display = 'none'
    document.getElementById('vagifAva').style.display = 'none'
    document.getElementById('vagifAva1').style.display = 'none'
    document.getElementById('jamilyaAva').style.display = 'none'
    document.getElementById('jamilyaAva1').style.display = 'none'
    document.getElementById('satiAva').style.display = 'none'
    document.getElementById('satiAva1').style.display = 'none'
    document.getElementById('naidaAva').style.display = 'none'
    document.getElementById('naidaAva1').style.display = 'none'

  }

  else { }
};

function myaccount() {

  if (document.getElementById('myaccount').style.display === 'block') {
    document.getElementById('patient').style.display = 'none';
    document.getElementById('myaccount').style.display = 'block';
    document.getElementById('aboutcomp').style.display = 'none';
  }


  else {
    document.getElementById('aboutcomp').style.display = 'none'
    document.getElementById('myaccount').style.display = 'block'
  }
};
function aboutcomp() {

  if (document.getElementById('aboutcomp').style.display === 'block') {
    document.getElementById('patient').style.display = 'none'
    document.getElementById('myaccount').style.display = 'none'
    document.getElementById('aboutcomp').style.display = 'block'
  }
  else {
    document.getElementById('myaccount').style.display = 'none'
    document.getElementById('aboutcomp').style.display = 'block'
  }
};
function patient() {

  if (document.getElementById('patient').style.display === 'block') {
    document.getElementById('aboutcomp').style.display = 'none'
    document.getElementById('myaccount').style.display = 'none'
    document.getElementById('patient').style.display = 'block'
  }
  else {
    document.getElementById('myaccount').style.display = 'none'
    document.getElementById('aboutcomp').style.display = 'none'
    document.getElementById('patient').style.display = 'block'
  }

  if (localStorage.getItem("doctor") === "Бёден Дебо Ансарович (Уролог-андролог)") {
    document.getElementById('fname').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone').innerHTML = localStorage.getItem("phone");
    document.getElementById('date').innerHTML = localStorage.getItem("date");
    document.getElementById('time').innerHTML = localStorage.getItem("time");
    
  }
  else if (localStorage.getItem("doctor") === "Чакирян Микаел Ашотович (Уролог-андролог)") {
    document.getElementById('fname1').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone1').innerHTML = localStorage.getItem("phone");
    document.getElementById('date1').innerHTML = localStorage.getItem("date");
    document.getElementById('time1').innerHTML = localStorage.getItem("time");
  }
  else if (localStorage.getItem("doctor") === "Абазов Вагиф Фирдовси оглы (Уролог-андролог)") {
    document.getElementById('fname2').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone2').innerHTML = localStorage.getItem("phone");
    document.getElementById('date2').innerHTML = localStorage.getItem("date");
    document.getElementById('time2').innerHTML = localStorage.getItem("time");

  }
  else if (localStorage.getItem("doctor") === "Денисенков Антон Иванович (Психиатр)") {
    document.getElementById('fname3').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone3').innerHTML = localStorage.getItem("phone");
    document.getElementById('date3').innerHTML = localStorage.getItem("date");
    document.getElementById('time3').innerHTML = localStorage.getItem("time");
  }
  else if (localStorage.getItem("doctor") === "Петух Юрий Игоревич (Психиатр)") {
    document.getElementById('fname4').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone4').innerHTML = localStorage.getItem("phone");
    document.getElementById('date4').innerHTML = localStorage.getItem("date");
    document.getElementById('time4').innerHTML = localStorage.getItem("time");
  }
  else if (localStorage.getItem("doctor") === "Абасова Джамиля Эмирхановна (Офтальмолог)") {
    document.getElementById('fname5').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone5').innerHTML = localStorage.getItem("phone");
    document.getElementById('date5').innerHTML = localStorage.getItem("date");
    document.getElementById('time5').innerHTML = localStorage.getItem("time");
  }
  else if (localStorage.getItem("doctor") === "Абдулаева Сати Абдулаевна (Акушер-гинеколог)") {
    document.getElementById('fname6').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone6').innerHTML = localStorage.getItem("phone");
    document.getElementById('date6').innerHTML = localStorage.getItem("date");
    document.getElementById('time6').innerHTML = localStorage.getItem("time");
  }
  else if (localStorage.getItem("doctor") === "Абдуллаева Наида Кадиевна (Оториноларинголог)") {
    document.getElementById('fname7').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone7').innerHTML = localStorage.getItem("phone");
    document.getElementById('date7').innerHTML = localStorage.getItem("date");
    document.getElementById('time7').innerHTML = localStorage.getItem("time");
  }
  else if (localStorage.getItem("doctor") === "Абдуллоев Шозодаабдол (Дерматовенеролог)") {
    document.getElementById('fname8').innerHTML = localStorage.getItem("fname");
    document.getElementById('phone8').innerHTML = localStorage.getItem("phone");
    document.getElementById('date8').innerHTML = localStorage.getItem("date");
    document.getElementById('time8').innerHTML = localStorage.getItem("time");
  }
  else { }
  
};

function closeForm(){
  
  localStorage.setItem("fname","");
  localStorage.setItem("phone","");
  localStorage.setItem("date","");

  if (localStorage.getItem("doctor") === "Бёден Дебо Ансарович (Уролог-андролог)") {
    document.getElementById('fname').style.display='none';
    document.getElementById('phone').style.display='none';
    document.getElementById('date').style.display='none';
    document.getElementById('time').style.display='none';
    
    
  }
  else if (localStorage.getItem("doctor") === "Чакирян Микаел Ашотович (Уролог-андролог)") {
    document.getElementById('fname1').style.display='none';
    document.getElementById('phone1').style.display='none';
    document.getElementById('date1').style.display='none';
    document.getElementById('time1').style.display='none';
  }
  else if (localStorage.getItem("doctor") === "Абазов Вагиф Фирдовси оглы (Уролог-андролог)") {
    document.getElementById('fname2').style.display='none';
    document.getElementById('phone2').style.display='none';
    document.getElementById('date2').style.display='none';
    document.getElementById('time2').style.display='none';

  }
  else if (localStorage.getItem("doctor") === "Денисенков Антон Иванович (Психиатр)") {
    document.getElementById('fname3').style.display='none';
    document.getElementById('phone3').style.display='none';
    document.getElementById('date3').style.display='none';
    document.getElementById('time3').style.display='none';
  }
  else if (localStorage.getItem("doctor") === "Петух Юрий Игоревич (Психиатр)") {
    document.getElementById('fname4').style.display='none';
    document.getElementById('phone4').style.display='none';
    document.getElementById('date4').style.display='none';
    document.getElementById('time4').style.display='none';
  }
  else if (localStorage.getItem("doctor") === "Абасова Джамиля Эмирхановна (Офтальмолог)") {
    document.getElementById('fname5').style.display='none';
    document.getElementById('phone5').style.display='none';
    document.getElementById('date5').style.display='none';
    document.getElementById('time5').style.display='none';
  }
  else if (localStorage.getItem("doctor") === "Абдулаева Сати Абдулаевна (Акушер-гинеколог)") {
    document.getElementById('fname6').style.display='none';
    document.getElementById('phone6').style.display='none';
    document.getElementById('date6').style.display='none';
    document.getElementById('time6').style.display='none';
  }
  else if (localStorage.getItem("doctor") === "Абдуллаева Наида Кадиевна (Оториноларинголог)") {
    document.getElementById('fname7').style.display='none';
    document.getElementById('phone7').style.display='none';
    document.getElementById('date7').style.display='none';
    document.getElementById('time7').style.display='none';
  }
  else if (localStorage.getItem("doctor") === "Абдуллоев Шозодаабдол (Дерматовенеролог)") {
    document.getElementById('fname8').style.display='none';
    document.getElementById('phone8').style.display='none';
    document.getElementById('date8').style.display='none';
    document.getElementById('time8').style.display='none';
  }
  else { }
  
 
};


const callToActionBtns = document.querySelectorAll(".header_burger");

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentBtn =
      e.target.parentElement.querySelector(".header_burger");
    const currentBtns =
      e.target.parentElement.querySelector(".header_menu");
    currentBtn.classList.toggle("active");
    currentBtns.classList.toggle("active");
  });
});


// Срочный вызов скорой

const Emergency = document.getElementById('emergencyGo')
const emergencyAdress = document.getElementById('emergencyAdress')
const input = document.getElementById('input')

function EmergencyCall() {
  document.getElementById('emergencyAdress').style.display = 'block';
}
function emergencyGo() {
  document.getElementById('emergencyGo').style.display = 'block';
  input.value = '';
  document.getElementById('emergencyAdress').style.display = 'none';
}

function answerClose() {
  document.getElementById('emergencyGo').style.display = 'none';
}



// _____JOB_____SPOILER
document.querySelector("#spoiler-button").addEventListener("click", (e) => {
  const spoilerContent = document.querySelector("#spoiler-content");
  spoilerContent.classList.contains("hidden")
    ? spoilerContent.classList.replace("hidden", "fadein")
    : spoilerContent.classList.replace("fadein", "hidden");
});

document.querySelector("#spoiler-button2").addEventListener("click", (e) => {
  const spoilerContent = document.querySelector("#spoiler-content2");
  spoilerContent.classList.contains("hidden")
    ? spoilerContent.classList.replace("hidden", "fadein")
    : spoilerContent.classList.replace("fadein", "hidden");
});
document.querySelector("#spoiler-button3").addEventListener("click", (e) => {
  const spoilerContent = document.querySelector("#spoiler-content3");
  spoilerContent.classList.contains("hidden")
    ? spoilerContent.classList.replace("hidden", "fadein")
    : spoilerContent.classList.replace("fadein", "hidden");
});
document.querySelector("#spoiler-button4").addEventListener("click", (e) => {
  const spoilerContent = document.querySelector("#spoiler-content4");
  spoilerContent.classList.contains("hidden")
    ? spoilerContent.classList.replace("hidden", "fadein")
    : spoilerContent.classList.replace("fadein", "hidden");
});