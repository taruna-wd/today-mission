
const options = document.querySelectorAll(".option")
const fillProgress = document.querySelector(".fill")
const error = document.querySelector(".error")
 let selectedcount = 0;
 let allOptions = JSON.parse(localStorage.getItem("allOptions")) ||  {}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const check = option.querySelector("i")
        const input = option.querySelector("input")
        
        if (input.value) {
             check.classList.toggle("fa-circle")
          const isChecked =check.classList.toggle("fa-circle-check")
          if(isChecked){
               selectedcount++;
            input.classList.add("line")
          }else{
               selectedcount--;
            input.classList.remove("line")
          }
          updateProgress(selectedcount)
        
        }else {
           error.style.display = "block"
        }
console.log(allOptions.name);
        input.addEventListener("focus",()=>{
            error.style.display = "none"
        }) 
        input.addEventListener("input", ()=>{
            // if (allOptions[input.id] && allOptions[input.id].completed) {
            //     input.value = allOptions[input.id].name
            //     return
            //   }
            if(allOptions[input.id]){
              allOptions[input.id].name = input.value
            }else{
                allOptions[input.id] = {
                    name:input.value ,
                    complete :  false
                }
            }
            
            localStorage.setItem("allOptions" ,JSON.stringify(allOptions))
        })
})})


function updateProgress(count) {
  const totalOptions = options.length;
  console.log(totalOptions)
  const percentage = (count / totalOptions) * 100; 
  fillProgress.style.width = `${percentage}%`;
}
