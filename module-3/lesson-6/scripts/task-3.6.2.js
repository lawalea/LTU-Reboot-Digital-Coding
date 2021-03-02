var newElement = document.createElement ('p');
var divElement = document.querySelector('div');
console.log (divElement);
newElement.innerHTML = 'Laura is cool';
console.log (newElement);
divElement.append(newElement);