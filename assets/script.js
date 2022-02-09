// First, tell us your name
let yourName = "Abbie Klein" 


// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let footer = document.createElement('h1')
let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')
let gbQuant = document.querySelector('#qty-gb')
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
let ccQuant = document.querySelector('#qty-cc')
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')
let sugarQuant = document.querySelector('#qty-sugar')
let total = document.querySelector('#qty-total')
let t = 0
let credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

let num = 1
//click the plus and minus buttons done


//increase it by 1

gbPlusBtn.addEventListener('click', function(){
    gb++
    console.log('plus button clicked')
    console.log(gb)
    gbQuant.textContent = gb
    t++
    total.textContent = t
})

gbMinusBtn.addEventListener('click', function(){
 console.log('gbMinus button clicked!')
 if (num < 0) { gb = 0 } else{


    num--
    console.log(gb)
    gbQuant.textContent = gb
    t--
    total.textContent = t
   }

 })

 ccPlusBtn.addEventListener('click', function(){
     cc++
     console.log('plus button clicked')
     console.log(cc)
     ccQuant.textContent = cc
     t++
     total.textContent = t
 })

 ccMinusBtn.addEventListener('click', function(){
    console.log('ccMinus button clicked!')
    if (cc < 0) { cc = 0 } else{

    cc --
    console.log(cc)
    ccQuant.textContent = cc
    t--
    total.textContent = t
 }

})

sugarPlusBtn.addEventListener('click', function(){
    sugar++
    console.log('plus button clicked')
    console.log(sugar)
    sugarQuant.textContent = sugar
    t++
    total.textContent = t
})

sugarMinusBtn.addEventListener('click', function(){
    console.log('sugarMinus button clicked!')
    if (sugar < 0) { sugar= 0 } else{

        sugar --
    console.log(sugar)
    sugarQuant.textContent = sugar
    t--
    total.textContent = t
 }

})

