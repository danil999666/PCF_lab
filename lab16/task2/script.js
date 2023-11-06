function handleCheckboxChange(checkbox) {
    const selectedEmailsElement = document.getElementById('selectedEmails');

    if (checkbox.checked) {
        const email = checkbox.nextElementSibling.textContent;
        const emailElement = document.createElement('div');
        emailElement.textContent = email;
        emailElement.id = email;
        selectedEmailsElement.appendChild(emailElement);
    } else {
        const emailElement = document.getElementById(checkbox.nextElementSibling.textContent);
        emailElement.remove();
    }
}