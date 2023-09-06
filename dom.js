

// ////alert////
// function alertFunc(message){
//     alert(message)// return nothing
// }


// ////prompt////

// const names = prompt("hi who is there?") // return a string
// console.log(names)
// alertFunc(`hi ${names}`) 

// ///confirm//
// function confirmation(){
// const response = confirm("are you intersted")// it returns the boolean values
// console.log(response)
// }
// confirmation()

//accesing the time element for output
let responseEle = document.querySelector("#time-element")

//set time out

// console.log(1)
// setTimeout(()=>console.log(3),3000)
// console.log(2)

//
// function countdown(){
//     console.log("counter started") 
// }
// console.log(1)
// setTimeout(countdown,5000)
// console.log(2)

// set time out
let count = 10 
function countdown(){
    responseEle.textContent= count
     count--
   const id =   setTimeout(countdown,1000)
     if(count == 0){
        clearTimeout(id)
        responseEle.textContent="hey your time is done"
     }
}
countdown()

//Set interval
let responseIntervalEle = document.querySelector("#interval-element")
let intervalcount = 10
function intervalfunc(){
   const intervalid = setInterval(()=>{
        responseIntervalEle.textContent= intervalcount
        intervalcount--;
        if(intervalcount == 0){
            clearInterval(intervalid)
            responseIntervalEle.textContent="interval is stopped"

        }

    },1000)
}
intervalfunc()

/////Events
let clickcounter = 0
 function clickevent(){
    clickcounter++
    console.log(`you have clicked the count ${clickcounter}times`)

 }
 clickevent()



