document.addEventListener('DOMContentLoaded', () => {
    const locationsURL = 'http://localhost:3000/locations'
    const materialsURL = 'http://localhost:3000/material_resources'
    const matDistributionsURL = 'http://localhost:3000/mat_distributions'
    const basesURL = 'http://localhost:3000/bases'

    fetchLocations(locationsURL);
    fetchMaterials(materialsURL);
    fetchMatDistributions(matDistributionsURL);
    fetchBases(basesURL);

    let ash = {population: 100, happiness: 100, waste_management: 2, solar_power: 2, nuclear_power: 2, material_production: 2, food_production: 2, housing: 2, luxury: 2, misc: ""}
    updateBase('http://localhost:3000/bases', 1, ash)
    
})

function fetchLocations(url){
    fetch(url)
    .then(resp => resp.json()
    .then(json => {
        console.log('fetched locations!')
        console.log(json)
    }))
}

function createLocation(locationsUrl, locationName)
{
    fetch(`${locationsUrl}`, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: locationName
        })
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
}

function deleteLocation(locationsUrl, locationId)
{
    fetch(`${locationsUrl}/${locationId}`, {
        method: "DELETE"
    })
}

function fetchMaterials(url){
    fetch(url)
    .then(resp => resp.json())
    .then(json => {
        console.log('fetched resources!')
        console.log(json)
    })
}

function fetchMatDistributions(url){
    fetch(url)
    .then(resp => {
        return resp.json();
    })
    .then(json => {
        console.log('fetched material distibutions!')
        console.log(json)
    })
}

function fetchBases(url){
    fetch(url)
    .then(resp => {
        return resp.json();
    })
    .then(json => {
        console.log('fetched bases')
        console.log(json)
    })
}
//Pass in the url and a hash with the key being the column and the value being the data
//EXAMPLE: updateResource(url, 9, 10);
function updateResource(url, matDistId, matCount){
    //let column = hash[key]
    //`${url}/${matDistId}`
    console.log('updating')
    fetch(`${url}/${matDistId}`, {
        method: "PATCH", 
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            amount: matCount
        })
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    console.log('after fetch')

}


function updateBase(url, baseId, hash){
    //let column = hash[key]
    //`${url}/${matDistId}`
    console.log(hash.population)
    console.log('updating')
    fetch(`${url}/${baseId}`, {
        method: "PATCH", 
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            population: hash.population,
            
            happiness: hash.happiness,
            waste_management: hash.waste_management,
            solar_power: hash.solar_power,
            nuclear_power: hash.nuclear_power,
            material_production: hash.material_production,
            food_production: hash.food_production,
            housing: hash.housing,
            luxury: hash.luxury,
            misc: hash.misc
            
        })
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    console.log('after fetch')

}