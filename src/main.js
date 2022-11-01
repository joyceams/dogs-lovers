import dataDogs from './data.js'
/* import { sortDogsAscend} from './functions.js' */

const root = document.getElementById('root')
const sortingDogs = document.getElementById('sorting')
const filteringDogs = document.getElementById('filtering')

const onlyDogs = dataDogs.dogs

// Dog cards

onlyDogs.map (dog => {
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
  const newDogs = [...onlyDogs]
  console.log(newDogs)
    if (event.target.value === 'A to Z') {
      root.innerHTML = '' 
    sortDogsAscend(newDogs)
    newDogs.map (dog => {
      const card = document.createElement('div')
      card.className = "card" 
  
      const images = document.createElement('img')
      images.src = dog.image
  
      const breed = document.createElement('h2')
      breed.textContent = dog.breed
  
      card.append(images, breed)
      root.append(card)
  }) 
    }

    if (event.target.value === 'Z to A') {
      root.innerHTML = '' 
    sortDogsDescend(newDogs)
    newDogs.map (dog => {
      const card = document.createElement('div')
      card.className = "card" 
  
      const images = document.createElement('img')
      images.src = dog.image
  
      const breed = document.createElement('h2')
      breed.textContent = dog.breed
  
      card.append(images, breed)
      root.append(card)
  }) 
    }
    
    if (event.target.value === 'All'){
      root.innerHTML = ''
      onlyDogs.map (dog => {
        const card = document.createElement('div')
        card.className = "card" 
    
        const images = document.createElement('img')
        images.src = dog.image
    
        const breed = document.createElement('h2')
        breed.textContent = dog.breed
    
        card.append(images, breed)
        root.append(card)
    }) 
    }
})

// Filtrado

const breedFiltered = (dogBreed) => {
  onlyDogs.filter((dog)=>{
dog.breed == dogBreed
  })
}

filteringDogs.addEventListener('change', (event) =>{
  if (event.target.value === 'All'){
    root.innerHTML = ''
  }
  onlyDogs.map (dog => {
    const card = document.createElement('div')
    card.className = "card" 

    const images = document.createElement('img')
    images.src = dog.image

    const breed = document.createElement('h2')
    breed.textContent = dog.breed

    card.append(images, breed)
    root.append(card)
}) 
console.log(filteringDogs)
}) 


//console.log(breedFiltered ('spaniel'))



/* const dataFiltered =(iddePerro)=>{
    return data.dogs.filter((perro)=>{
        return perro.id==iddePerro
    })
}

console.log(dataFiltered('5'));


const breeds = onlyDogs.breed
const allBreeds = breeds.filter (function (oneBreed){
return breeds.breed === 'spaniel'
})
 */
/* const allBreeds = ["spaniel",
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

console.log(result); */

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