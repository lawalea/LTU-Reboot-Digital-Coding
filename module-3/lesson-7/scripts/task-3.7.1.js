//**------     Variables     ----- */
const arranimalFilter = document.querySelectorAll('.animalFilter');
const arranimalImage = document.querySelectorAll('.animalImage');
// console.log(arranimalFilter);

//**------     Event Listeners     ----- */
for(counter=0; counter < arranimalFilter.length; counter++){
    // console.log(counter);
    let currentFilter = arranimalFilter[counter];
    // console.log(currentFilter);
    currentFilter.addEventListener('click',filterImages);
}

//**------     Functions     ----- */
function filterImages(event){
    // console.log(event.target.innerHTML);
    var animalName = event.target.innerHTML;
    // console.log(animalName);
    for(counter=0; counter < arranimalImage.length; counter++){
        let currentImage = arranimalImage[counter];
        currentImage.style.display = 'none';
        // console.log(currentImage);
        if(animalName == 'All'){
            currentImage.style.display = 'inline';
        } else {
            let currentImageAnimal = currentImage.getAttribute('animal');
            //console.log(currentImageAnimal);
            if(currentImageAnimal == animalName){
                currentImage.style.display = 'inline';
            }
        }
    }
}