var con  = document.querySelector("#container")
var love = document.querySelector("i")
con.addEventListener("dblclick", function(){
    // console.log("hello");
    love.style.transform = "translate(-50% ,-50%) scale(1)"
    love.style.opacity=0.8
// setTimeout=> browser ka inbuild funtion delay
setTimeout(function () {
love.style.opacity = 0; 
},1000);
setTimeout(function () {
    love.style.transform = "translate(-50% ,-50%) scale(0)"},2000);
 });
 
//  var con  = document.querySelector("#container")
//  var love = document.querySelector("i")
//  con.addEventListener("dblclick", function(){
//      // console.log("hello");
//      // love.style.transition= "all s ease-in-out 0s"
//      love.style.transform = "translate(-50% ,-50%) scale(1)"
//      love.style.opacity=0.8
//  // setTimeout=> browser ka inbuild funtion delay
//  // setTimeout(function(){love.style.transform = "translate (-50% ,-50%) scale(0)"}3000);
//  // love.style.transition= "all 0s ease-in-out 2s";
//  // love.style.display = "none"
//  // },1500);
//   });
