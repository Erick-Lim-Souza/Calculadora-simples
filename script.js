function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const button = document.getElementById('theme-toggle');
  button.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}
