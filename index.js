const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){

    cats.push("Ralph")
}

function destructivelyPrependCat(name){

    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
} 

function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name){
    const newCats = [name, ...cats]
    return newCats
}

function removeLastCat(){
    removeLastCat = cats.slice(0, cats.length -1)
    return removeLastCat
  }

  function removeFirstCat(){
    removeFirstCat = cats.slice(1)
    return removeFirstCat
  }
  