export function contact(){
    const contact = document.getElementById("contact");
    const left = document.createElement("div");
        left.setAttribute("class", "left");
    const right = document.createElement("div");
        right.setAttribute("class", "right");
    contact.appendChild(left);
    contact.appendChild(right);
    // address, hours number
    const address = document.createElement("address");
        address.innerHTML = "123 Fake Street, Vancouver BC Canada";
    const telephone = document.createElement("a");
        telephone.innerHTML = `604 123 4567`;
        telephone.href = "tel:+16041234567";
    const hours = "Open everyday, 9am to 9pm.";
    left.appendChild(address);
    left.appendChild(telephone);
    left.append(hours);
    // contact form
    const nameLabel = document.createElement("label");
        nameLabel.for = "name";
        nameLabel.textContent = "Name"
        right.appendChild(nameLabel);
    const name = document.createElement("input");
        name.type = "text";
        name.value = "enter your name";
        right.appendChild(name);
        //
    const emailLabel = document.createElement("label");
        emailLabel.for = "email";
        emailLabel.textContent = "Email"
        right.appendChild(emailLabel);
    const email = document.createElement("input");
        email.type = "email";
        email.value = "enteryouremail@here"
        right.appendChild(email);
        //
    const subjectLabel = document.createElement("label");
        subjectLabel.for = "subject";
        subjectLabel.textContent = "Subject"
        right.appendChild(subjectLabel);
    const subject = document.createElement("input");
        subject.type = "text";
        subject.value = "enter subject here";
        right.appendChild(subject);
        //
    const message = document.createElement("input");
        message.type = "textarea";
        message.value = "Enter your message here...";
        right.appendChild(message);
    const submit = document.createElement("input");
        submit.type = "submit";
        submit.value = "send";
        right.appendChild(submit);
}