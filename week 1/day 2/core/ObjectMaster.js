const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 35, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 35, "name": "Clefairy", "types": ["normal"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

const div3 = pokemon.filter((p) => p.id % 3 == 0)
// return id%3==0})
console.log(div3)


console.log('*********************************************************')
const firetype = pokemon.filter((p) => p.types == "fire")
console.log(firetype)

console.log('*********************************************************')

const diffTypes = pokemon.filter((p) => p.types.length > 1)
console.log(diffTypes)

console.log('*********************************************************')

const pokemonNames = pokemon.map((p) => p.name)
console.log(pokemonNames)

console.log('*********************************************************')

const namesOfIdBigger99 = pokemon
    .filter((p) => p.id > 99)
    .map((p) => p.name)
console.log(namesOfIdBigger99)


console.log('*********************************************************')
const namesTypePoison = pokemon
    .filter((p) => p.types == 'poison')
    .map((p) => p.name)
console.log(namesTypePoison)

console.log('*********************************************************')

const secondTypeFlying = pokemon.filter((p) => p.types[1] == 'flying')
    .map((p) => p.types[0])
console.log(secondTypeFlying)


console.log('*********************************************************')

const numTypeNormal = pokemon.filter((p) => p.types == "normal")
    .length
console.log(numTypeNormal)

console.log('*********************************************************')

const allpokExceptId148 = pokemon.filter(p => p.id != 148)
console.log(allpokExceptId148)

console.log('*********************************************************')

const replacetype = pokemon.filter(p => p.id == 35)
const finalRES = replacetype.map(e => e.types = ["fairy"])

console.log(replacetype)
