export default function Home() {
    const main = document.createElement('main');
    const buttons = [];
    
    const landingContent = document.createElement('div');
    landingContent.id = "landing-content";

    const p = document.createElement('p');
    p.textContent = `Are you craving tasty and affordable food? 
    Do you love fried rice? Are you looking for something crispy?
    Look no further than Nappy's Home Food!
    \n\n
    Don't miss out on the chance to enjoy delicious food at a 
    great price. Head to Nappy's Home Food today!`

    landingContent.appendChild(p);

    const section = document.createElement('section');

    for (const item of ["Menu", "Contact us"]) {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.textContent = item;
        section.appendChild(button);
        buttons.push(button);
    }
   
    landingContent.appendChild(section);

    main.appendChild(landingContent);

    const landingLogo = document.createElement('div');
    landingLogo.id = 'landing-logo';

    const img = document.createElement('img');
    img.src = './assets/img/landing-img.jpg';
    img.alt = "A delicious plate of fried rice.";

    landingLogo.appendChild(img);
    main.appendChild(landingLogo);

    return [ main, ...[buttons]];
}