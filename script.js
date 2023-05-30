const itemsPerPage = 250; // Number of items to display per page
let currentPage = 1; // Current page

async function fetchingAPI() 
{
    try 
    {
        let res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        let data = await res.json();
        return data;
    } 
    catch (error) 
    {
        console.log(error);
    }
}

async function renderPage(pageData) 

{
    // Clear parent container
    document.getElementById('parent').innerHTML = '';
    pageData.forEach((e) => 
    {
        let child = document.createElement('div');
        child.setAttribute('class', 'child');

        let image = document.createElement('img');
        image.setAttribute('id', 'image');
        image.setAttribute('src', e.image_link);
        child.appendChild(image);

        let name = document.createElement('h2');
        name.setAttribute('id', 'name');
        name.innerHTML = e.name;
        child.appendChild(name);

        let brand = document.createElement('h2');
        brand.setAttribute('id', 'brand');
        brand.innerHTML = e.brand;
        child.appendChild(brand);

        let price = document.createElement('h2');
        price.setAttribute('id', 'price');
        price.innerHTML = e.price;
        child.appendChild(price);

        let product_link = document.createElement('a');
        product_link.setAttribute('id', 'product_link');
        product_link.setAttribute('href', e.product_link);
        product_link.setAttribute('target', '_blank');
        product_link.innerHTML = 'Product Link';
        child.appendChild(product_link);

        let description = document.createElement('p');
        description.setAttribute('id', 'description');
        description.innerHTML = e.description;
        child.appendChild(description);

        document.getElementById('parent').appendChild(child);
    });

}

function renderPagination(totalItems, currentPage) 
{
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) 
    {
        if (i === currentPage) 
        {
            paginationHTML += `<span class="active">${i}</span>`;
        } 
        else 
        {
            paginationHTML += `<span onclick="changePage(${i})">${i}</span>`;
        }
    }

    document.getElementById('pagination').innerHTML = paginationHTML;
}

async function changePage(pageNumber) 
{
    currentPage = pageNumber;
    const data = await fetchingAPI();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);
    renderPage(pageData);
    renderPagination(data.length, currentPage);
}
async function myData() 
{
    try 
    {
        const data = await fetchingAPI();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = data.slice(startIndex, endIndex);
        renderPage(pageData);
        renderPagination(data.length, currentPage);
    } 
    catch (error) 
    {
      console.log(error);
    }
}

myData();