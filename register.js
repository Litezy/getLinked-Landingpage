document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const teamName = event.target[0].value.trim();
  const phone = event.target[1].value;
  const email = event.target[2].value;
  const project = event.target[3].value;
  const select1 = event.target[4].value.trim();
  const select2 = event.target[5].value.trim();

  //   const radio = event.target[6];
  const nonNumericRegex = /\D/;
  const output1 = document.querySelector(".name");
  const output2 = document.querySelector(".phone");
  const output3 = document.querySelector(".email");
  const output4 = document.querySelector(".topic");
  const selectOutput1 = document.querySelector(".select1");
  const selectOutput2 = document.querySelector(".select2");
  const agreement = document.querySelector('.radio[name="agreement"]:checked');
  const checked = document.querySelector(".uncheck");

  if (teamName.length > 0) {
    if (!nonNumericRegex.test(phone) && phone !== "") {
      if (email.includes("@") && email.endsWith(".com")) {
        if (project.length > 0) {
          if (
            ["Frontend", "UI/UX", "Backend", "Full Stack"].includes(select1)
          ) {
            if (
              [
                "Individual",
                "2-3 Members",
                "3-5 Members",
                "Above 5 Members",
              ].includes(select2)
            ) {
              if (agreement) {
                agreement.style.backgroundColor = "red";
                window.location.href = "after.html";
                event.target['0','1','2','3','4','5','6'].value = '';
               
              } else {
                checked.innerHTML = "Agree to our terms before proceeding";
                setTimeout(() => {
                  checked.innerHTML = "";
                }, 3000);
              }
            } else {
              selectOutput2.innerHTML = "Please select a team size";
              setTimeout(() => {
                selectOutput2.innerHTML = "";
              }, 3000);
            }
          } else {
            selectOutput1.innerHTML = "Please select a category";
            setTimeout(() => {
              selectOutput1.innerHTML = "";
            }, 3000);
          }
        } else {
          output4.innerHTML = "Pls enter a project topic";
          setTimeout(() => {
            output4.innerHTML = "";
          }, 3000);
        }
      } else {
        output3.innerHTML = "Pls input a valid email address";
        setTimeout(() => {
          output3.innerHTML = "";
        }, 3000);
      }
    } else {
      output2.innerHTML = "Pls input a valid phone number";
      setTimeout(() => {
        output2.innerHTML = "";
      }, 3000);
    }
  } else {
    output1.innerHTML = "Pls input a valid team name";
    setTimeout(() => {
      output1.innerHTML = "";
    }, 3000);
  }
});
let backtoHome = document.querySelector(".ecs");
backtoHome.addEventListener("click", () => {
  window.location.href = "../index.html";
});
teamName = "";
email = "";
phone = "";
project = "";
select1 = "";
select2 = "";