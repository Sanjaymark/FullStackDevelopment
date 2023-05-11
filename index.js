let name= 'Sanjay'
document.getElementById('heading').innerHTML = '<h1>Welcome ${name}</h1>'

let element = document.getElementsByTagName('div')
element[0].setAttribute('class','pinkcolor');
element[0].style.color="pink"
let classelements = document.getElementsByClassName('pinkcolor')
for (let i=0; i<classelements.length; i++)
{
    classelements[i].style.color="pink";
    classelements[i].style.fontSize="25px";
}

let fav=["Tea","coffe","Boost","horlicks","complan"]
let h2 = document.createElement('h2')
h2.append("My Favourite Drinks are")
document.body.appendChild(h2)


let ul =document.createElement('ul')

for (let i=0; i<fav.length; i++)
{
    let li =document.createElement('li')
    li.append(`${fav[i]}`)
    ul.appendChild(li)
}
document.body.append(ul)

let input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('placeholder','password')
input.setAttribute('value','SR3125')
document.body.append(input)

let e = document.querySelectorAll('.pinkcolor')
console.log(e)