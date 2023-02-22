// Variables de JS necesarias
var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var resultadoElement = document.getElementById('resultado');

// Funciones esenciales del proceso a simular
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function porcentaje(a, b) {
  return (a * b) / 100;
}

// Event listeners de los botones
document.getElementById('sumar').addEventListener('click', function() {
  var num1 = parseInt(num1Element.value);
  var num2 = parseInt(num2Element.value);
  var resultado = sumar(num1, num2);
  resultadoElement.innerHTML = 'El resultado de la suma es: ' + resultado;
});

document.getElementById('restar').addEventListener('click', function() {
  var num1 = parseInt(num1Element.value);
  var num2 = parseInt(num2Element.value);
  var resultado = restar(num1, num2);
  resultadoElement.innerHTML = 'El resultado de la resta es: ' + resultado;
});

document.getElementById('multiplicar').addEventListener('click', function() {
  var num1 = parseInt(num1Element.value);
  var num2 = parseInt(num2Element.value);
  var resultado = multiplicar(num1, num2);
  resultadoElement.innerHTML = 'El resultado de la multiplicación es: ' + resultado;
});

document.getElementById('dividir').addEventListener('click', function() {
  var num1 = parseInt(num1Element.value);
  var num2 = parseInt(num2Element.value);
  var resultado = dividir(num1, num2);
  resultadoElement.innerHTML = 'El resultado de la división es: ' + resultado;
});

document.getElementById('porcentaje').addEventListener('click', function() {
  var num1 = parseInt(num1Element.value);
  var num2 = parseInt(num2Element.value);
  var resultado = porcentaje(num1, num2);
  resultadoElement.innerHTML = 'El resultado del porcentaje es: ' + resultado;
});

// JSON y Storage
var objeto = {
  nombre: 'Objeto',
  metodo: function() {
    return 'Hola desde el método';
  }
};

var jsonString = JSON.stringify(objeto);
localStorage.setItem('miObjeto', jsonString);

var stored