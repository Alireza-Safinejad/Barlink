function router(page){

if(page=="loads"){

loadList()

}


if(page=="map"){

loadMap()

}


if(page=="postLoad"){

loadPostLoad()

}


if(page=="profile"){

loadProfile()

}

}


function start(){

let d=getDriver()

if(!d){

showRegister()

}

else{

loadList()

}

}


function showRegister(){

document.getElementById("app").innerHTML=`

<div class="card">

ثبت راننده

<input id="name">

<select id="city">

${cities.map(c=>

`<option>${c}</option>`).join("")}

</select>

<button onclick="register()">

ثبت

</button>

</div>

`

}


function register(){

saveDriver({

name:name.value,

city:city.value

})


loadList()

}


start()
