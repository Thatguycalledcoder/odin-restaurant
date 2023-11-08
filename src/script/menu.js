export default function Menu() {
    const main = document.createElement('main');
    main.id = 'menu-content';

    const menuItems = {
        "Fried rice": {
            "name": "Fried rice",
            "src": "./assets/img/fried-rice.jpg",
            "caption": "Fried rice with green pepper, salad, ketchup and one choice of protein(egg, sausage, chicken).",
        }, 
        "Fried yam": {
            "name": "Fried yam",
            "src": "./assets/img/fried-yam.jpg",
            "caption": "Fried yam with green pepper, ketchup and one choice of protein(egg, sausage, chicken).",
        },
        "Noodles": {
            "name": "Noodles",
            "src": "./assets/img/noodles.jpg",
            "caption": "Noodles with sausages and either egg or chicken.",
        }
    }

    for (const item of menuItems) {
        const menuItem = document.createElement('div');
        menuItem.id = 'menu-item';

        const h2 = document.createElement('h2');
        h2.textContent = item.name;
        menuItem.appendChild(h2);

        const figure = document.createElement('figure');
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.name;
        figure.appendChild(img);

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = item.caption;
        figure.appendChild(figcaption);
        
        menuItem.appendChild(figure);

        const ul = document.createElement('ul');
        for (const items of [["Normal", "$5.00"], ["Deluxe", "$10.00"] ["Assorted", "$15.00"]]){
            const li = document.createElement('li');
            for (const item of items) {
                const p = document.createElement('p');
                p.textContent = item;
                li.appendChild(p);
            }
            ul.appendChild(li);
        }
        menuItem.appendChild(ul);

        main.appendChild(menuItem);
    }

    return main;
    
}