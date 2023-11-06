function showSelected() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedOptions = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedOptions.push(checkbox.nextElementSibling.textContent);
        }
    });

    document.getElementById('selectedOptions').textContent = `Ви вибрали: ${selectedOptions.join(', ')}`;
}