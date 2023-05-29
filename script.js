async function fetchingAPI()
{
    try
    {
        let res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        let data = await res.json()
        return data;
    }
    catch(error)
    {
        //console.log(error)
    }
};



async function myData()
{

    try
    {
        let data1 = await fetchingAPI()
        

        data1.forEach((e)=>
        {
            let child = document.createElement('div')
            child.setAttribute('class','child')

            let image = document.createElement('img')
            image.setAttribute('id','image')
            image.setAttribute('src',e.image_link)
            child.appendChild(image)

            let name = document.createElement('h2')
            name.setAttribute('id','name')
            name.innerHTML = e.name
            child.appendChild(name)

            let brand = document.createElement('h2')
            brand.setAttribute('id','brand')
            brand.innerHTML = e.brand
            child.appendChild(brand)

            let price = document.createElement('h2')
            price.setAttribute('id','price')
            price.innerHTML = e.price
            child.appendChild(price)

            let product_link = document.createElement('a')
            product_link.setAttribute('id','product_link')
            product_link.setAttribute('href',e.product_link)
            product_link.setAttribute('target','_blank')
            product_link.innerHTML = 'Product Link'
            child.appendChild(product_link)

            let description = document.createElement('p')
            description.setAttribute('id','description')
            description.innerHTML = e.description
            child.appendChild(description)


            document.getElementById('parent').appendChild(child)

        })
    }
    catch(error)
    {
        // console.log(error)
    }
    
};

myData()





// Get the necessary elements
const container = document.getElementById('parent');
const blocks = Array.from(container.getElementsByClassName('child'));
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pagesContainer = document.getElementById('pages');


// Number of div blocks to show per page
const itemsPerPage = 9; 
let currentPage = 0;


// Calculate the total number of pages
const totalPages = Math.ceil(blocks.length / itemsPerPage);


// Function to show the relevant div blocks for the current page
const showPage = (pageNumber) => {
  // Hide all blocks
  blocks.forEach((block) => {
    block.style.display = 'none';
  });


  // Calculate the start and end index of the blocks to be displayed
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  // Show the blocks for the current page
  const blocksToShow = blocks.slice(startIndex, endIndex);
  blocksToShow.forEach((block) => {
    block.style.display = 'block';
  });
};


// Function to generate and update the pagination links
const updatePagination = () => {
  // Clear the existing pagination links
  pagesContainer.innerHTML = '';

  // Create a pagination link for each page
  for (let i = 0; i < totalPages; i++) {
    const pageNumber = i;
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = pageNumber + 1;

    // Add a click event listener to each pagination link
    pageLink.addEventListener('click', () => {
      currentPage = pageNumber;
      showPage(currentPage);
    });

    // Append the pagination link to the pages container
    pagesContainer.appendChild(pageLink);
  }
};

// Function to handle the "Previous" button click
const handlePrevClick = () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
};

// Function to handle the "Next" button click
const handleNextClick = () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    showPage(currentPage);
  }
};

// Add event listeners to the pagination buttons
prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);

// Show the initial page and generate pagination links
showPage(currentPage);
updatePagination();
