import contactImg from "./../assets/img/contact-img.jpg";

export default function Contact() {
    const main = document.createElement('main');
    main.id = 'contact-content';

    const img = document.createElement('img');
    img.src = contactImg;
    img.alt = "Food Delivery services image: A box with the words contactless delivery written on it.";
    main.appendChild(img);

    const form = document.createElement('form');
    const fieldset1 = document.createElement('fieldset');
    
    const legend1 = document.createElement('legend');
    legend1.textContent = "Personal Details";
    fieldset1.appendChild(legend1);
    
    const firstName = document.createElement('div');
    
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'first-name');
    label1.textContent = "First name:"
    firstName.appendChild(label1);
    const fname = document.createElement("input");
    fname.setAttribute('type', 'text');
    fname.id = 'first-name';
    firstName.appendChild(fname);

    fieldset1.appendChild(firstName);

    const lastName = document.createElement("div");
    const label2 = document.createElement("label");
    label2.setAttribute('for', 'last-name');
    label2.textContent = "Last name:"
    lastName.appendChild(label2);
    const lname = document.createElement("input");
    lname.setAttribute('type', 'text');
    lname.id = 'last-name';
    lastName.appendChild(lname);

    fieldset1.appendChild(lastName);

    form.appendChild(fieldset1);

    const fieldset2 = document.createElement("fieldset");
    const legend2 = document.createElement('legend');
    legend2.textContent = "Menu order";
    fieldset2.appendChild(legend2);

    const order = document.createElement("div");
    const label3 = document.createElement("label");
    label3.textContent = "Order";
    label3.setAttribute("for", "order-item");
    order.appendChild(label3);

    const orderItems = document.createElement("select");
    orderItems.name = "order-item";
    orderItems.id = "order-item";
    for (const options of ["Fried rice", "Fried yam", "Noodles"]) {
        const option = document.createElement("option");
        option.value = options;
        option.textContent = options;
        orderItems.appendChild(option);
    }
    order.appendChild(orderItems);
    fieldset2.appendChild(order);

    const orderType = document.createElement("div");
    const label4 = document.createElement("label");
    label4.textContent = "Order Type";
    label4.setAttribute("for", "order-type");
    order.appendChild(label4);

    const itemTypes = document.createElement("select");
    itemTypes.name = "order-type";
    itemTypes.id = "order-type";
    for (const options of ["Normal", "Deluxe", "Assorted"]) {
        const option = document.createElement("option");
        option.value = options;
        option.textContent = options;
        itemTypes.appendChild(option);
    }
    orderType.appendChild(itemTypes);

    fieldset2.appendChild(orderType);
    form.appendChild(fieldset2);

    const textarea = document.createElement("textarea");
    textarea.name = "note";
    textarea.id = "note";
    textarea.cols = 50;
    textarea.rows = 10;
    textarea.placeholder = "Any allergies or things to note...";
    form.appendChild(textarea);

    const submitDiv = document.createElement("div");
    submitDiv.id = "submit-btn";

    const button = document.createElement("button");
    button.textContent = "Place order";
    button.type = "button";
    submitDiv.appendChild(button);
    
    form.appendChild(submitDiv);
    main.appendChild(form);

    return main;
}