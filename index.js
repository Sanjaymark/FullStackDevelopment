let task = document.createElement('h1')
task.setAttribute('id','task')
document.body.appendChild(task)

let SW = document.createElement('h2')
SW.innerHTML = 'Stopwatch'
SW.style.textAlign = 'center'
document.getElementById('root').appendChild(SW)

let H = 0;
let M = 0;
let S = 0;
let MS= 0;

let Interval;

let Watch = document.createElement('h2')
Watch.innerHTML = `${H}<sub>Hr</sub> : ${M}<sub>mins</sub> : ${S}<sub>secs</sub> : ${MS}<sub>ms</sub>`
Watch.style.textAlign = 'center'
Watch.setAttribute('id','stopwatch')
document.getElementById('root').appendChild(Watch)

let btn_wrapper = document.createElement('div')
btn_wrapper.style.textAlign = 'center'
document.getElementById('root').appendChild(btn_wrapper)


let startbtn = document.createElement('button')
startbtn.innerHTML = 'Start'

startbtn.addEventListener('click',()=>
{
    if (startbtn.innerHTML=="Start")
    {
        startbtn.innerHTML = "Stop"
        start()
    }
    else
    {
        startbtn.innerHTML="Start"
        stop()
    }
})
btn_wrapper.appendChild(startbtn)

function start()
{
    Interval = setInterval(()=>
    {
        ++MS
        if(MS==100)
        {
            ++S;
            MS=0;
        }
        if(S==60)
        {
         ++M;
         S=0;
        }
        if(M==60)
        {
         ++H;
         M=0;
        }

        Watch.innerHTML = `${H}<sub>Hr</sub> : ${M}<sub>mins</sub> : ${S}<sub>secs</sub> : ${MS}<sub>ms</sub>`
    },10)
}


function stop()
{
    clearInterval(Interval)
}

let resetbtn = document.createElement('button')
resetbtn.innerHTML='Reset'
resetbtn.setAttribute('id','btn')
resetbtn.addEventListener('click',()=>{
    stop()
    startbtn.innerHTML="Start"
    H=0;
    M=0;
    S=0;
    MS=0;
    Watch.innerHTML = `${H}<sub>Hr</sub> : ${M}<sub>mins</sub> : ${S}<sub>secs</sub> : ${MS}<sub>ms</sub>`
})

btn_wrapper.appendChild(resetbtn)




