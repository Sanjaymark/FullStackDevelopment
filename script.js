async function fetchData() 
{
    try
    {
        let res = await fetch('https://api.disneyapi.dev/character')
        let character = await res.json();
        return character.data;
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

        let image = document.createElement('img')
        image.setAttribute('id','image')
        image.setAttribute('src',e.imageUrl)
        child.appendChild(image)

        parent.appendChild(child)
    })
}

getValues()