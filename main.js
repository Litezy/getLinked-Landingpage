document.querySelectorAll('.questions').forEach((quest, index)=>{
  var ansId = 'ans-' + (index + 1)
  var iconId = 'icon-' + (index + 1)
  quest.addEventListener('click', function(){
    revealAns(ansId, iconId)
})
})
function revealAns(ansId, iconId){
  var answers = document.getElementById(ansId)
  var icon = document.getElementById(iconId)
  
  if(answers.style.display === 'block'){
    answers.style.display = 'none';
    icon.style.transform = 'rotate(0deg)';
    icon.style.transition = 'all ease 0.8s';
  }
  else{
    answers.style.display = 'block'
    icon.style.transform = 'rotate(45deg)'
    icon.style.transition = 'all ease 0.8s'
    
  }
  
}

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', ()=>{
  if(window.pageYOffset > 100){
    toTop.classList.add('active')
    
  }else{
    toTop.classList.remove('active')
  }
})

const linknav = document.querySelector('.linknav')
const navbar = document.querySelector('.nav')
const barsNav = document.querySelector('.bars');
const navLinks = document.querySelector('.navlink');
barsNav.addEventListener('click', ()=>{
    if(navLinks.style.display === 'block'){
      navLinks.style.display = 'none'
    
      
    }else{
      navLinks.style.display = 'block'
      navbar.style.display = 'none'
     
    }
   
})

const vectorX = document.querySelector('.vector-x');
  vectorX.addEventListener('click', ()=>{
     navLinks.style.display = 'none'
     navbar.style.display = 'flex'
})


function updateTime() {
  let timer = document.querySelector(".timer")
  const currentDate = new Date();
  let hours = currentDate.getHours()
  let minutes = currentDate.getMinutes()
  let seconds = currentDate.getSeconds()
  
 
  timer.innerHTML = `<h2 class="timer">${hours}<span>H</span> ${minutes}<span>M</span> ${seconds}<span>S</span></h2>`;
  if(hours < 10){
    hours = `0${hours}`
    timer.innerHTML = `<h2 class="timer">${hours}<span>H</span> ${minutes}<span>M</span> ${seconds}<span>S</span></h2>`;
  }
  else{
    {hours}
  }
  if(minutes < 10){
    minutes = `0${minutes}`
    timer.innerHTML = `<h2 class="timer">${hours}<span>H</span> ${minutes}<span>M</span> ${seconds}<span>S</span></h2>`;
  }
  else{
    {minutes}
  }
  if(seconds < 10){
    seconds = `0${seconds}`
    timer.innerHTML = `<h2 class="timer">${hours}<span>H</span> ${minutes}<span>M</span> ${seconds}<span>S</span></h2>`;
  }
  else{
    {seconds}
  }
}


updateTime();
setInterval(updateTime, 1000);


