const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;
});
function togglePages(direction) {
  var firstPage = document.querySelector('.firstpage');
  var secondPage = document.querySelector('.secondpage');
  var page = document.querySelector('.page1')

  if (direction === 'forward') {
    secondPage.style.display = 'none';
    firstPage.style.display = 'block';
    page.style.transition = "background 0.5s";
    page.style.background = "linear-gradient(rgba(0, 0, 0, 0.646), rgba(0, 0, 0, 0.5)), url('assets/b1.jpg')";
    page.style.backgroundSize = "cover";
    page.style.justifyContent = "center";
} else if (direction === 'backward') {
    secondPage.style.display = 'block';
    firstPage.style.display = 'none';
    page.style.transition = "background 0.5s";
    page.style.background = "linear-gradient(rgba(0, 0, 0, 0.646), rgba(0, 0, 0, 0.5)), url('assets/b4.jpg')";
    page.style.backgroundSize = "cover";
    page.style.justifyContent = "";

}
}

// circle prosgress bar
let number1 = document.getElementById('percentage1');
let counter1 = 0;

setInterval(() => {
  if (counter1 == 95){
    clearInterval;
  }
  else {
    counter1 +=1;
    number1.innerHTML = `${counter1}%`;
  }
}, 30);


let number2 = document.getElementById('percentage2');
let counter2 = 0;

setInterval(() => {
  if (counter2 == 90){
    clearInterval;
  }
  else {
    counter2 +=1;
    number2.innerHTML = `${counter2}%`;
  }
}, 30);


let number3 = document.getElementById('percentage3');
let counter3 = 0;

setInterval(() => {
  if (counter3 == 87){
    clearInterval;
  }
  else {
    counter3 +=1;
    number3.innerHTML = `${counter3}%`;
  }
}, 30);


let number4 = document.getElementById('percentage4');
let counter4 = 0;

setInterval(() => {
  if (counter4 == 85){
    clearInterval;
  }
  else {
    counter4 +=1;
    number4.innerHTML = `${counter4}%`;
  }
}, 30);

// function toggleNavbar() {
//   var navbar = document.getElementById("navbar");
//   if (navbar.className === "navbar") {
//       navbar.className += " responsive";
//   } else {
//       navbar.className = "navbar";
//   }}
//   $(document).ready(function() {
//     $(".icon").click(function() {
//       $(".query").slideToggle();
//       $(this).html(function(_, html) {
//         return html === '&#9776;' ? '&#10006;' : '&#9776;';
//     });
//     });
// });
$(document).ready(function() {
  $(".icon").click(function() {
      $(".query").slideToggle();
      $(this).html(function(_, html) {
          return html === '☰' ? '✖' : '☰';
      });
  });
});

// $(document).ready(function() {
//   $(".icon").click(function() {
//     $(".query").slideToggle();
  
//       });
//   });
//   });
// });







function sendEmail(event){
  event.preventDefault();

  console.log(
    "button cliked"
  )
  const formData = new FormData(event.target);
  const paramsObj = {
    username: formData.get('username'),
    email:formData.get('email'),
    message: formData.get('message'),
    subject: formData.get('subject'), 
    phone: formData.get('phone')
  };


  const templateId = 'template_trq93t4';
  const serviceId = 'service_zx29ihn';


  emailjs.send(serviceId, templateId, paramsObj)
    .then((response)=>{ 
    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('phone').value = "";
  
      alert("Email sent")
      console.log(response)
    


    })
    .catch((error)=>{
      console.log(error)
      alert("Couldn't send email check your Network connection ")
    })
   


  

  

  

}