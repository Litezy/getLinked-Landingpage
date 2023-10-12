let backtoHome = document.querySelector(".ecs");

backtoHome.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
});
// let recorded = document.querySelector('.recorded')
let submit = document
  .querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    let first = document.querySelector(".first-p");
    let second = document.querySelector(".second-p");
    let third = document.querySelector(".third-p");
    let fourth = document.querySelector(".fourth-p");

    let team = event.target[0].value;
    let topic = event.target[1].value;
    let email = event.target[2].value;
    let message = event.target[3].value;

    
        if (team.length > 1) {
            if(topic.length > 1){
              if(email.includes('@') && email.endsWith('.com')){
                if(message.length > 1){
                    window.location.href='message.html'
                }else{
                    fourth.innerHTML ='Please enter a valid Message';
                    setTimeout(()=>{
                        fourth.innerHTML='';
                    },3000)
                }
              }
              else{
                third.innerHTML ='Please enter a valid Email';
                setTimeout(()=>{
                    third.innerHTML='';
                },3000)
              }
            }else{
                second.innerHTML = 'Pls provide topic name'
                setTimeout(()=>{
                    second.innerHTML='';
                },3000)
            }
          } 
          else {
            first.innerHTML = `Pls input a valid name`;
            setTimeout(()=>{
                first.innerHTML='';
            },3000)
          }
     
    
      
  });
// 
// console.log(e)
