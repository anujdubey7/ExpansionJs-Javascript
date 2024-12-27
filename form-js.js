const form = document.getElementById('autoSaveForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('phone'); 
const addInput = document.getElementById('address');
const saveButton = document.getElementById('saveButton');

function saveFormData() {
    try {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            number: numberInput.value,
            address: addInput.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Form data saved successfully!');
    } catch (error) {
        console.error('Error saving form data to localStorage:', error);
        alert('An error occurred while saving your data. Please try again.');
    }
}

function loadFormData() {
    try {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData && typeof savedData === 'object') {
            nameInput.value = savedData.name || '';
            emailInput.value = savedData.email || '';
            numberInput.value = savedData.number || '';
            addInput.value = savedData.address || '';
        } else {
            console.warn('No valid saved data found in localStorage.');
        }
    } catch (error) {
        console.error('Error loading form data from localStorage:', error);
    }
}

function handleInputChange() {
    try {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            number: numberInput.value,
            address: addInput.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    } catch (error) {
        console.error('Error saving form data on input change:', error);
    }
}


saveButton.addEventListener('click', saveFormData);

document.addEventListener('DOMContentLoaded', loadFormData);
