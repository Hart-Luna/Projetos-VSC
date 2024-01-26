//BOM DIA | BOA TARDE | BOA NOITE

// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Obtém a hora atual do sistema
const currentHour = new Date().getHours();

// Define a saudação com base na hora atual
// if (currentHour >= 5 && currentHour < 12) {
//   greetingElement.textContent = "Bom dia";
// } else if (currentHour >= 12 && currentHour < 18) {
//   greetingElement.textContent = "Boa tarde";
// } else {
//   greetingElement.textContent = "Boa noite";
// }

// Forma mais simples
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Good morning"
    : currentHour >= 12 && currentHour < 18
    ? "Good afternoon"
    : "Good evening";

greetingElement.textContent = greetingMessage;