document.addEventListener('DOMContentLoaded', () => {
    const locationsURL = 'http://localhost:3000/locations'
    const materialsURL = 'http://localhost:3000/material_resources'
    const matDistributionsURL = 'http://localhost:3000/mat_distributions'
    const basesURL = 'http://localhost:3000/bases'

    fetchLocations(locationsURL);
    fetchMaterials(materialsURL);
    fetchMatDistributions(matDistributionsURL);
    fetchBases(basesURL);
    
})

function fetchLocations(url){
    fetch(url)
    .then(resp => resp.json()
    .then(json => {
        console.log('fetched locations!')
        console.log(json)
    }))
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
