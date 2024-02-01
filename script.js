const categories = [
    {id: '1', category: 'fashion', name: 'Fashion', description: 'Explore trendy African designs and shop from our amazing collections', image: 'IMG_0152 2.JPG'},
    {id: '2', category: 'beauty', name: 'Beauty', description: 'Take Good care of your skin with great locally sourced products that gives you a flawless and healthy skin', image: 'skincare.jpg'}, 
    {id: '3', category: 'food', name: 'Food', description: 'Amazing African food and spices', image: 'food n spice.jpg'},
]

// DOM Manipulation

// Content Replacement
document.getElementById('sidebar').addEventListener('click', function (event) {
    let clickedElement = event.target;
    console.log('clickedElement',clickedElement)
        // Check which data attribute is present and get its value
        let dataAttribute;
        if (clickedElement.hasAttribute('data-fashion')) {
            dataAttribute = 'data-fashion';
        } else if (clickedElement.hasAttribute('data-food')) {
            dataAttribute = 'data-food';
        } else if (clickedElement.hasAttribute('data-beauty')) {
            dataAttribute = 'data-beauty';
        }
        console.log('dataAttribute',dataAttribute)
        // Get the value of the selected data attribute
        var dataValue = clickedElement.getAttribute(dataAttribute);

        // Log the value to the console (you can use it as needed)
        console.log(dataValue);

        displayCategory(dataValue)
       
    // if (event.target.tagName === 'LI') {
    //     // const selectedCategory = 
    //     document.getElementById('section1').innerHTML = `<h2>${event.target.innerText}</h2><p>New content for ${event.target.innerText}</p>`;
    // }
});

// Style Alteration
function changeColorScheme() {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
    
}

// Element Creation and Deletion
function addNewItem() {
    var newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    document.querySelector('#sidebar ul').appendChild(newItem);
}

function removeLastItem() {
    var items = document.querySelectorAll('#sidebar ul li');
    if (items.length > 3) {
        items[items.length - 1].remove();
    }
}

const displayCategory = (name)=>{
    console.log('name', name);
    const getCategory = categories.filter(item => item.category === name);
    console.log('selected category', getCategory)

    //display the image of the category in section 1
    const section1 = document.getElementById('section1')
    const img = document.createElement('img')
    img.src = getCategory.image

    document.getElementById('section1').innerHTML = `<img class="category-image" src="./images/${getCategory[0].image}" alt=""/>`;
document.getElementById('category-title').innerHTML =`${getCategory[0].name}`
document.getElementById('category-description').innerHTML =`${getCategory[0].description}`

    // display the category details in section 2
}

// Event Handling
// document.querySelector('header').addEventListener('mouseover', function () {
//     alert('Welcome to My Web Page!');
// });
