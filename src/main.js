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
  return onlyDogs.filter((dog)=>{
return dog.breed == dogBreed
  })
}


filteringDogs.addEventListener('change', (event) =>{
  root.innerHTML = ''
 breedFiltered(event.target.value, onlyDogs.breed).forEach (dog => {
  const card = document.createElement('div')
  card.className = "card" 

  const images = document.createElement('img')
  images.src = dog.image

  const breed = document.createElement('h2')
  breed.textContent = dog.breed

  card.append(images, breed)
  root.append(card)
})
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