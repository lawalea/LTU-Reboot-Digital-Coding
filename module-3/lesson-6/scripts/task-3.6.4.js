var clickElement = document.querySelector('.preventClick');
// console.log(clickElement);
function alertBox(event){
    event.preventDefault();
    alert('You clicked a link and I stopped it');
}

clickElement.addEventListener('click',alertBox);