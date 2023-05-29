async function fetchData() 
{
    try
    {
        let res = await fetch('https://api.nobelprize.org/2.1/nobelPrizes')
        let data = await res.json();
        return data.nobelPrizes;
    }
    catch(error)
    {
        console.log(error)
    }
    
};
  
  
async function NobelPrizes()
{
    let Prizes = await fetchData();

    let parent = document.createElement('div')
    parent.setAttribute('id','parent')
    document.body.appendChild(parent)

    Prizes.forEach((e)=>
    {
        let child = document.createElement('div')
        child.setAttribute('id','child')

        let name = document.createElement('h2')
        name.setAttribute('id','name')
        name.innerHTML = e.laureates[0].fullName.en
        child.appendChild(name)

        let year = document.createElement('h2')
        year.setAttribute('id','year')
        year.innerHTML = e.awardYear
        child.appendChild(year)

        let category = document.createElement('h2')
        category.setAttribute('id','category')
        category.innerHTML = e.categoryFullName.en
        child.appendChild(category)

        let amount = document.createElement('h2')
        amount.setAttribute('id','amount')
        amount.innerHTML = e.prizeAmountAdjusted
        child.appendChild(amount)

        

        parent.appendChild(child)
    })
}

NobelPrizes()