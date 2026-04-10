function router(page){

if(page=="loads"){

showLoads()

}


if(page=="profile"){

showProfile()

}


if(page=="postLoad"){

showPostLoad()

}


if(page=="map"){

showMap()

}

}


function showLoads(){

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

<button onclick="showLoadDetail(${load.id})">

جزئیات

</button>

</div>

`

})

document.getElementById("app").innerHTML=html

}


function showLoadDetail(id){

let l=loads.find(x=>x.id==id)

document.getElementById("app").innerHTML=`

<div class="card">

مبدا: ${l.origin}

<br>

مقصد: ${l.destination}

<br>

بار: ${l.cargo}

<br>

قیمت: ${l.price}

<br>

<button>

تماس

</button>

</div>

`

}


function showProfile(){

document.getElementById("app").innerHTML=`

<div class="card">

پروفایل راننده

</div>

`

}


function showPostLoad(){

document.getElementById("app").innerHTML=`

<div class="card">

ثبت بار

<input placeholder="مبدا">

<input placeholder="مقصد">

<button>

ثبت

</button>

</div>

`

}


function showMap(){

document.getElementById("app").innerHTML=`

<div class="card">

در نسخه بعد نقشه اضافه می‌شود

</div>

`

}


showLoads()
