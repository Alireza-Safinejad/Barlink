function loadList(){

let html=""

loads.forEach(load=>{

html+=`

<div class="card">

${load.origin} → ${load.destination}

<br>

${load.cargo}

<br>

${load.price}

<br>

<button onclick="loadDetail(${load.id})">

جزئیات

</button>

</div>

`

})


document.getElementById("app").innerHTML=html

}



function loadDetail(id){

let l=

loads.find(x=>x.id==id)


document.getElementById("app").innerHTML=`

<div class="card">

مبدا: ${l.origin}

<br>

مقصد: ${l.destination}

<br>

نوع بار: ${l.cargo}

<br>

وزن: ${l.weight}

<br>

قیمت: ${l.price}

<br>

<button>

تماس

</button>

</div>

`

}



function loadPostLoad(){

let options=""

cities.forEach(c=>{

options+=`

<option>${c}</option>

`

})


document.getElementById("app").innerHTML=`

<div class="card">

ثبت بار

<select>

${options}

</select>

<select>

${options}

</select>

<input placeholder="نوع بار">

<input placeholder="وزن">

<input placeholder="قیمت">

<button>

ثبت بار

</button>

</div>

`

}



function loadProfile(){

let d=getDriver()

document.getElementById("app").innerHTML=`

<div class="card">

نام:

${d?.name}

</div>

`

}
