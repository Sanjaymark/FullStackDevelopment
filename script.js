async function fetchData() 
{
    try
    {
        let res = await fetch('https://emojihub.yurace.pro/api/all/category/smileys-and-people')
        let character = await res.json();
        return character;
    }
    catch(error)
    {
        console.log(error)
    }
    
};
  

  
async function getValues()
{
    let data = await fetchData()

    let parent = document.createElement('div')
    parent.setAttribute('id','parent')
    document.body.appendChild(parent)

    data.forEach((e)=>{
        let child = document.createElement('div')
        child.setAttribute('id','child')

        let name = document.createElement('h2')
        name.setAttribute('id','name')
        name.innerHTML = e.name
        child.appendChild(name)

        let Smiley = document.createElement('h1')
        Smiley.setAttribute('id','smiley')
        Smiley.innerHTML = e.htmlCode
        child.appendChild(Smiley)


        parent.appendChild(child)
    })
}

getValues()