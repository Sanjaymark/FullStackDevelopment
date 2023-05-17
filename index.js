// function heading()
// {
//     let h1 = document.createElement('h1')
//     h1.innerHTML = "I am a Callback function"
//     document.body.appendChild(h1)
// }

// function display(sum,callback)
// {
//     let h1 = document.createElement('h1')
//     h1.innerHTML = sum
//     document.body.appendChild(h1)
//     callback()
// }

// function add(a,b,callback)
// {
//     let sum = a+b
//     callback(sum,heading)
// }

// add(5,10,display)


// let inputNumbers =[10,20,30,4,-5,-6,-2,7]

// let positiveNumbers = removeNegativeNumbers(inputNumbers, (x)=> x>0)

// document.body.innerHTML = `<h1>${positiveNumbers}</h1>`

// function removeNegativeNumbers(numbers,callback)
// {
//     let myArray =  []
//     for(let i=0; i<numbers.length; i++)
//     {
//         if(callback(numbers[i]))
//         {
//             myArray.push(numbers[i])
//         }
//     }

//     return myArray
// }


setTimeout(()=>{
    let h1 = document.createElement('h1')
    h1.innerHTML = "I am callback function1"
    document.body.appendChild(h1)

    setTimeout(()=>{
        h1.innerHTML = "I am callback function2"

        setTimeout(()=>{
            h1.innerHTML = "I am callback function3"

            setTimeout(()=>{
                h1.innerHTML = "I am callback function4"
            },4000)
        },4000)

    },4000)
},1000)