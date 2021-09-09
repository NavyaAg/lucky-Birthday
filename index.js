var date=document.querySelector(".birthday");
var number=document.querySelector(".lucky-no");
var button=document.querySelector(".check");

button.addEventListener("click",function(){
    console.log(date.value);
    console.log(number.value);
    console.log("clicked");
});