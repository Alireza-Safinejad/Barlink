function saveDriver(data){

localStorage.setItem(

"driver",

JSON.stringify(data)

)

}


function getDriver(){

return JSON.parse(

localStorage.getItem("driver")

)

}
