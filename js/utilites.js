function getInputFieldById(inputFieldId) {
    const inputFieldValue = document.getElementById(inputFieldId);
    const inputFieldString = inputFieldValue.value;
    const inputField = parseFloat(inputFieldString);
    inputFieldValue.value = '';
    return inputField;


}

function getTextElementValueById(elementId) {
    const textElementValue = document.getElementById(elementId);
    const textElementValueString = textElementValue.innerText;
    const textElement = parseFloat(textElementValueString);
    return textElement;
}
function setTextElementValueById(elementId, newValue) {
    const textElementValue = document.getElementById(elementId);
    textElementValue.innerText = newValue;
}