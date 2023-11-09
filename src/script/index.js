import Navbar from "./navbar";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";
import "./../style.css";

const doc = document.querySelector("body");

const [navbar, links] = Navbar();
const [home, buttons] = Home();
const menu = Menu();
const contact = Contact();

const content = document.createElement("div");
content.id = "content";
console.log(links);
content.appendChild(home);
doc.appendChild(navbar);

doc.appendChild(content);


const gotoHome = function() {
    for (const link of links) {
        if (link.id == "home") {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    }
    content.removeChild(content.firstChild);
    content.appendChild(home);
    doc.removeChild(doc.lastChild);
    doc.appendChild(content);
}

const gotoMenu = function() {
    for (const link of links) {
        if (link.id == "menu") {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    }
    content.removeChild(content.firstChild);
    content.appendChild(menu);
    doc.removeChild(doc.lastChild);
    doc.appendChild(content);
}

const gotoContact = function() {
    for (const link of links) {
        if (link.id == "contact") {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    }
    content.removeChild(content.firstChild);
    content.appendChild(contact);
    doc.removeChild(doc.lastChild);
    doc.appendChild(content);
}

const [Homepage, Menupage, Contactpage] = links;
Homepage.addEventListener("click", gotoHome);
Menupage.addEventListener("click", gotoMenu);
Contactpage.addEventListener("click", gotoContact);

const [Menubtn, Contactbtn] = buttons;
Menubtn.addEventListener("click", gotoMenu);
Contactbtn.addEventListener("click", gotoContact);