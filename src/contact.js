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
    const nameWrapper = document.createElement("div");
        nameWrapper.setAttribute("class", "inputWrapper");
        right.appendChild(nameWrapper);
    const nameLabel = document.createElement("label");
        nameLabel.for = "name";
        nameLabel.textContent = "Name"
        nameWrapper.appendChild(nameLabel);
    const name = document.createElement("input");
        name.type = "text";
        name.value = "enter your name";
        nameWrapper.appendChild(name);
        //
    const emailWrapper = document.createElement("div");
        emailWrapper.setAttribute("class", "inputWrapper");
        right.appendChild(emailWrapper);
    const emailLabel = document.createElement("label");
        emailLabel.for = "email";
        emailLabel.textContent = "Email"
        emailWrapper.appendChild(emailLabel);
    const email = document.createElement("input");
        email.type = "email";
        email.value = "enteryouremail@here"
        emailWrapper.appendChild(email);
        //
    const subjectWrapper = document.createElement("div");
        subjectWrapper.setAttribute("class", "inputWrapper");
        right.appendChild(subjectWrapper);
    const subjectLabel = document.createElement("label");
        subjectLabel.for = "subject";
        subjectLabel.textContent = "Subject"
        subjectWrapper.appendChild(subjectLabel);
    const subject = document.createElement("input");
        subject.type = "text";
        subject.value = "enter subject here";
        subjectWrapper.appendChild(subject);
        //
    const message = document.createElement("textarea");
        message.setAttribute("id", "textInputArea");
        //message.type = "textarea";
        message.rows = "8";
        message.value = "Enter your message here...";
        right.appendChild(message);
    const submit = document.createElement("input");
        submit.setAttribute("id", "sendButton");
        submit.type = "submit";
        submit.value = "send";
        right.appendChild(submit);
}