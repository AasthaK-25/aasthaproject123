
var a = document.querySelector("Button")
{ var flag=0
a.addEventListener("click", function(){
   if(flag==0)
{a.innerHTML = "<h2>Following</h2>"
 a.style.backgroundColor="grey"
 flag=1}
 
 else{
    a.style.backgroundColor="rgb(88, 88, 233)"
    a.innerHTML = "<h2>Follow</h2>"
    flag=0}
})}






