export default function Navbar(link = "Home") {
    const header = document.createElement("header");
    const links = [];

    const h1 = document.createElement("h1");
    h1.id = "logo";
    h1.textContent = "Nappy's";
    header.appendChild(h1);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    for (const item of ["Home", "Menu", "Contact"]) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.id = item.toLowerCase();
        a.textContent = item;
        if (item == link) {
            a.classList.add("active");
        }
        else {
            a.classList.remove("active");
        }
        links.push(a);
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    header.appendChild(nav);

    const div = document.createElement("div");
    header.appendChild(div);

    return [header, ...[links]];
}