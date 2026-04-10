function loadMap(){

document.getElementById("app").innerHTML=`

<div id="map"></div>

`


let map = L.map('map')

.setView([29.45,55.68],6)


L.tileLayer(

'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

).addTo(map)


loads.forEach(load=>{

L.marker([

load.lat,

load.lng

])

.addTo(map)

.bindPopup(

load.origin+

" → "+

load.destination

)

})

}
