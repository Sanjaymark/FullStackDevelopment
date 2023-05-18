// setTimeout(()=>{
//     console.log("Timeout1")
// },1000)

// setTimeout(()=>{
//     console.log("Timeout2")
// },2000)

// setTimeout(()=>{
//     console.log("Timeout3")
// },3000)

// setTimeout(()=>{
//     console.log("Timeout4")
// },4000)

// setTimeout(()=>{
//     console.log("Timeout1")
// },5000)

// function add(a,b)
// {
//     return a+b;
// }

// console.log(add(5,10))

// let myPromise = new Promise((resolve,reject)=>{
//     let x=1
//     if(x>9)
//         resolve(x)
//     else
//         reject("Received a smallest number")
// })

// myPromise.then(
//     (value)=>{
//         alert(value)
//     },
//     (error)=>{
//         alert(error)
//     }
// )

let x = 5;
let h1 = document.createElement('h1')
h1.innerHTML = x
h1.setAttribute('id','value')
document.body.appendChild(h1)

let promise_5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Happy Independence Day")
    },9000)
})

let promise_4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x--
        resolve(x)
    },7000)
})

let promise_3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x--
        resolve(x)
    },5000)
})

let promise_2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x--
        resolve(x)
    },3000)
})

let promise_1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x--
        resolve(x)
    },1000)
})

promise_1.then(
    (value)=>{
        document.getElementById("value").innerHTML=value;
        promise_2.then(
            (value)=>{
                document.getElementById("value").innerHTML=value; 
                promise_3.then(
                    (value)=>{
                        document.getElementById("value").innerHTML=value;
                        promise_4.then(
                            (value)=>{
                                document.getElementById("value").innerHTML=value;
                                promise_5.then(
                                    (value)=>{
                                        document.getElementById("value").innerHTML=value;
                                    },
                                    (error)=>{
                                        alert(error)
                                    }
                                )
                            },
                            (error)=>{
                                alert(error)
                            }
                        )
                    },
                    (error)=>{
                        alert(error)
                    }
                )
            },
            (error)=>{
                alert(error)
            }
        )
        

    },
    (error)=>{
        alert(error)
    }
)