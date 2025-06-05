
const body = document.body;
body.style.backgroundColor = 'Silver';

const title = document.getElementById('title');
title.style.color = 'Green';
title.style.fontSize = '60px';
title.style.textAlign = 'center';
title.style.marginTop = '2.5cm';

const selling = document.getElementById('selling');
selling.style.color = 'Green';
selling.style.textAlign = 'center';
selling.style.fontSize = '20px';
selling.style.marginTop = '1cm';

const placeOrder = document.getElementById('place-order');
placeOrder.style.width = '2.8cm';
placeOrder.style.height = '1cm';
placeOrder.style.backgroundColor = 'Green';
placeOrder.style.border = 'None';
placeOrder.style.borderRadius = '10px';
placeOrder.style.color = 'white';
placeOrder.style.marginLeft = '23cm';
placeOrder.style.marginTop = '1.2cm';

placeOrder.addEventListener('click', () => {
    placeOrder.style.backgroundColor = '#FEBE10';
    placeOrder.textContent = 'Ordered!';
});

const h3titles = document.querySelectorAll('h3');
h3titles.forEach(h3 => {
    h3.style.textTransform = 'uppercase';
    h3.style.color = 'Green';
    h3.style.textAlign = 'center';
    h3.style.marginTop = '3cm';
});

const addingImages = (list, items) => {
    items.forEach(item => {
        const listing = document.createElement('li');

        const image = document.createElement('img'); 
        image.src = item.imgSrc; 
        
        image.style.width = '8cm';
        image.style.height = '8cm';
        image.style.borderRadius = '150PX';

        listing.appendChild(image);
        listing.appendChild(document.createTextNode(item.name));
        list.appendChild(listing);
    });
};

const firstFruits = [
    { name: 'Mangoes', imgSrc: 'images/mangoes.jpg' },
    { name: 'Bananas', imgSrc: 'images/bananas.jpg' },
    { name: 'Water melons', imgSrc: 'images/watermelon.jpg' }
];

const firstVeges = [
    { name: 'Onions', imgSrc: 'images/onions.jpg' },
    { name: 'Tomatoes', imgSrc: 'images/tomatoes.jpg' },
    { name: 'Kales', imgSrc: 'images/kales.jpg' }
];

const fruitsList = document.getElementById('fruList');
const vegesList = document.getElementById('vegList');


firstFruits.forEach((fruit, index) => {
    const item = fruitsList.children[index];
    const img = document.createElement('img');
    img.src = fruit.imgSrc;
    img.style.width = '8cm';
    img.style.height = '8cm';
    img.style.borderRadius = '150PX'

    item.innerHTML = ''; 
    item.appendChild(img);
    item.appendChild(document.createTextNode(fruit.name));
});


firstVeges.forEach((vege, index) => {
    const item = vegesList.children[index];
    const img = document.createElement('img');
    img.src = vege.imgSrc;
    img.style.width = '8cm';
    img.style.height = '8cm';
    img.style.borderRadius = '150px'

    item.innerHTML = ''; 
    item.appendChild(img);
    item.appendChild(document.createTextNode(vege.name));
});


const addFruits = [
    { name: 'Apples', imgSrc: 'images/apples.jpg' },
    { name: 'Grapes', imgSrc: 'images/grapes.jpg' }
];
addingImages(fruitsList, addFruits);


const addVegetables = [
    { name: 'Lettuce', imgSrc: 'images/lettuce.jpg' },
    { name: 'Broccoli', imgSrc: 'images/broccoli.jpg' }
];
addingImages(vegesList, addVegetables);


const styling = (list) => {
    list.style.display = 'flex';
    list.style.listStyleType = 'none';
    list.style.flexWrap = 'wrap';
    list.style.justifyContent = 'center';
    list.style.fontSize = '20px';
    list.style.color = 'brown';

    
    list.querySelectorAll('li').forEach(item => {
        item.style.display = 'flex';
        item.style.flexDirection = 'column'; 
        item.style.alignItems = 'center'; 
        item.style.marginLeft = '30px'; 
    });
};


styling(fruitsList);
styling(vegesList);

function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.style.width = '100%';
    navbar.style.height = '1cm';
    navbar.style.backgroundColor = 'green';
    navbar.style.marginLeft = '-1em';
    navbar.style.marginRight = '-0.5em';
    navbar.style.top = '0';
    navbar.style.padding = '12px 12px';
    navbar.style.position = 'fixed';

   
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Shop', href: '#shop' },
        { name: 'Contact', href: '#contact' }
    ];

  
    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.style.marginLeft = '8cm';
        anchor.style.textDecoration = 'None';
        anchor.style.fontSize = '25px';
        anchor.style.color = 'white';
        anchor.textContent = link.name;
        navbar.appendChild(anchor);
    });

   
    document.getElementById('navbar').appendChild(navbar);
}


createNavbar();


const styleElements = () => {
    const fruitInput = document.getElementById('newFruit');
    const addButton = document.getElementById('addNew');

    
    fruitInput.style.display = 'block';
    fruitInput.style.margin = '20px auto';
    fruitInput.style.width = '5cm'; 
    fruitInput.style.height = '1cm'; 
    fruitInput.style.border = 'none'; 
    fruitInput.style.outline = 'none'; 
    fruitInput.style.borderRadius = '5px'; 
    fruitInput.style.backgroundColor = '#f0f0f0'; 

    addButton.style.display = 'block';
    addButton.style.margin = '20px auto'; 
    addButton.style.width = '3cm'; 
    addButton.style.height = '1cm'; 
    addButton.style.border = 'none';
    addButton.style.outline = 'none'; 
    addButton.style.borderRadius = '5px'; 
    addButton.style.backgroundColor = 'Green'; 
    addButton.style.color = 'white'; 
    addButton.style.cursor = 'pointer'; 


    addButton.addEventListener('click', () => {
        addButton.style.backgroundColor = '#FFC72C'; 
        addButton.textContent = 'Added!'
    });
    addButton.addEventListener('click', () => {
        addButton.style.backgroundColor = '#FFC72C'; 
        addButton.textContent = 'Added!'
    });
};


styleElements();





