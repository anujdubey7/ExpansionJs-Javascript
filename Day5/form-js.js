const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');

function saveFormData() {
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        nameInput.value = savedData.name || '';
        emailInput.value = savedData.email || '';
        phoneInput.value = savedData.phone || '';
        addressInput.value = savedData.address || '';
    }
}

document.addEventListener('DOMContentLoaded', loadFormData);
