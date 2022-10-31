import dataDogs from './data.js'
/* import { sortDogsAscend} from './functions.js' */

const root = document.getElementById('root')
const main = document.querySelector('main')
const sortingDogs = document.getElementById('sorting')
const filteringDogs = document.getElementById('filtering')

const onlyDogs = dataDogs.dogs

// Dog cards

main.innerHTML = ''
onlyDogs.forEach (dog => {
    const card = document.createElement('div')
    card.className = "card" 

    const images = document.createElement('img')
    images.src = dog.image

    const breed = document.createElement('h2')
    breed.textContent = dog.breed

    card.append(images, breed)
    root.append(card)
}) 

// Para el ordenado

const sortDogsAscend = (onlyDogs) => {
    return onlyDogs.sort((a, b) => {
      if (a.breed < b.breed) {
        return -1
      } else { return 1 }
    }
    )
  }

  const sortDogsDescend = (onlyDogs) => {
    return onlyDogs.sort((a, b) => {
      if (a.breed > b.breed) {
        return -1
      } else { return 1 }
    }
    )
  }

sortingDogs.addEventListener('change', (event) => {
    if (event.target.value === 'A to Z') {
    sortDogsAscend(onlyDogs)
    }
    console.log(onlyDogs)

    if (event.target.value === 'Z to A') {
    sortDogsDescend(onlyDogs)
    }
    /*jointFilter(championsCopy) */
})

// Filtrado
const allBreeds = ["spaniel",
"australian-shepherd",
"finnish-lapphund",
"terrier",
"doberman",
"waterdog-spanish",
"mountain-swiss",
"labrador",
"bullterrier",
"chihuahua",
"husky"];

const result = allBreeds.filter(allBreeds => allBreeds.length < 9);

console.log(result);

/* filteringDogs.addEventListener('change', (event) =>{
    let allBreeds = event.target.value
    let everyBreed = onlyDogs.filter (dog=>{
        let resultado = false
        for (let j=0; j < dog.breed.length; j++){
            if (dog.breed[j] == allBreeds){
                resultado = true
            }
        
        }
        return resultado
    })
}) */