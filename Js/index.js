
var siteName= document.getElementById("siteName")
var siteURl= document.getElementById("siteURl")
var tBody=document.getElementById("tBody")
var bookMark=[];
var regex = /^https:\/\/[A-Za-z0-9_\.]{4,}\.[(com)(COM)]/
var regexNam =/[a-zA-Z_]{3,}/
if (localStorage.getItem("bookMark") != null) {
    bookMark = JSON.parse(localStorage.getItem("bookMark"));
    displayUrl();
}
function addUrl(){
var bookO={
    name:siteName.value,
    myU:siteURl.value
};
     if(bookO.myU.toLowerCase().includes("https://")==true){
         if (regex.test(bookO.myU ) ==true && regexNam.test(bookO.name) ==true){
            bookMark.push(bookO);
            localStorage.setItem("bookMark", JSON.stringify(bookMark));
            displayUrl();
            clearData();
    
 }else{
swal(`
Wrong !!
 The name Or URL is not valied mast be insert a valed one  `,`Site name must contain at least 3 
 characters Site URL must be a valid one`); 
clearData();
}
}else{
    bookO.myU="https://"+bookO.myU
    if (regex.test(bookO.myU)==true && regexNam.test(bookO.name) ==true){
        bookMark.push(bookO);
        localStorage.setItem("bookMark", JSON.stringify(bookMark));
        displayUrl();
        clearData();
    }
    else{
        swal(`
        Wrong !!
        The name Or URL is not valied mast be insert a valed one  `,`Site name must contain at least 3 
        characters Site URL must be a valid one`);
        clearData();

         }
}
 

}
function displayUrl(){
var box ='';
for(var i=0;i<bookMark.length;i++){
box+=`
<tr>
    <td>${i+1}</td>
    <td>${bookMark[i].name}</td>
    <td><button onclick="visitUrl(${i})" class="btn btn-success px-4" >Visit</button></td>
    <td><button onclick="deleteU(${i})" class="btn btn-danger px-4  " >Delete</button>
    </td>

</tr>
`

}
document.getElementById("tBody").innerHTML = box
}

function visitUrl(i){

window.open(bookMark[i].myU,"_blank")

}
function deleteU(index){
    bookMark.splice(index,1)
    localStorage.setItem("bookMark", JSON.stringify(bookMark));
displayUrl();
}
function clearData(){
    siteName.value=""
    siteURl.value=""
}