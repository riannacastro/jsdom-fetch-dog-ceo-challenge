console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
     fetchImage()
     fetchBreeds()
})

function fetchImage(){
    //debugger
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => showImage(dogs["message"]))
}

function showImage(dogs){
    const divImage = document.getElementById("dog-image-container")
    dogs.forEach((image) => {
        divImage.innerHTML += `<img src=${image} />`
    })
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(dogs => console.log(dogs))
}

function addBreed(dogs){
    //console.log(dogs)
    for (dog in dogs){
        //console.log(dog)
        displayABreed(dog)
    }
}

function displayABreed(dog){
    const ul = Document.getElementById("dog-breeds");
    const li = document.createElement("li");
    li.innerText = dog;
    const subUl = document.createElement("ul")
    
    ul.appendChild(li)
}