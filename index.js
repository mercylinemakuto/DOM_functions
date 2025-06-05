
const body = document.body;
body.style.backgroundColor = 'Silver';

const title = document.getElementById('title');
title.style.color = 'Green';
title.style.fontSize = '60px';
title.style.textAlign = 'center';
title.style.marginTop = '2.5cm';

const selling = document.getElementById('selling');
selling.style.color = 'Gold';
selling.style.textAlign = 'center';
selling.style.fontSize = '20px';
selling.style.marginTop = '1cm';

const placeOrder = document.getElementById('place-order');
placeOrder.style.width = '2.8cm';
placeOrder.style.height = '1cm';
placeOrder.style.backgroundColor = '#1B4D3E';
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


   
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Shop', href: '#shop' },
        { name: 'Contact', href: '#contact' }
    ];

  
    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.name;
        navbar.appendChild(anchor);
    });

   
    document.getElementById('navbar').appendChild(navbar);
}


createNavbar();

const back = document.getElementById('fruits');
const newBack = document.createElement('img');
newBack.src = 'images/background.jpg';
newBack.style.width = '100%';
newBack.style.height = '100vh';
// newBack.style.display = 'block';
back.appendChild(newBack); 


const texting = document.getElementById("welcoming");
texting.style.position = "absolute";
texting.style.top = "250px";
texting.style.left = "500px";
texting.style.color = "white";
texting.style.fontSize = "24px";
texting.style.fontWeight = "bold";
texting.style.background = "rgb(175, 235, 175)";
texting.style.padding = "40px";
texting.style.borderRadius = "30px";
texting.style.textAlign = "center";
texting.style.textShadow = "2px 2px 4px rgba(146, 120, 120, 0.7)"; 
texting.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";







