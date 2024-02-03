var img1= document.querySelector("#a")
var img2= document.querySelector("#b")
var btn = document.querySelector("button")
btn.addEventListener("click",function()
{
 var img1wow= img1.getAttribute("src")
 var img2wow= img2.getAttribute("src") 
  img1.setAttribute("src",img2wow)
  img2.setAttribute("src",img1wow)
})

