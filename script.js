

 window.addEventListener('onload',(e)=>{


       e.preventDefault();


       setInterval(hm,500);
       console.log("helo");

       function hm(){
         page.add.classList("voila");
       }

          







 },false)

 
pw = document.getElementById('pw');
see.onclick = (e)=>{

  e.preventDefault();

      
//    if(pw.type="password" ){
       
//       icon.className = "fas fa-home";
     
//      see.addEventListener('click', function(e){
             
//               icon.className = "fas fa-eye";
//               pw.type="password";
      
//      })

 
// }
}



see.addEventListener("click",test);
function test(e){
   e.preventDefault();
       
      icon.className ="fas fa-eye";
      pw.type="text";
      see.removeEventListener("click",test);
      see.addEventListener("click",tes);
   
}

 function tes(e){

   e.preventDefault();
      
   icon.className ="fas fa-eye-slash";
   pw.type="password";
   see.addEventListener("click",test);

 } 

 texte.addEventListener("input",function(e) { 
   e.preventDefault();

       txt.innerHTML = texte.value;


 },false);
 pw.addEventListener("input",function(e) { 
   e.preventDefault();

       txt.innerHTML = pw.value;
       
       if(pw.value.length>= 6 ){
         pwt.innerHTML =" bonne longueur de mot de passe";
       }else if(pw.value.length == 0){

         pwt.innerHTML ="Veuillez entrer votre mot de passe";
         
       }else if(pw.value.length  >= 1 && pw.value.length < 6){

         pwt.innerHTML ="mauvaise longueur de mot de passe";
         
       }



 },false);
 
const sr = ScrollReveal({
   reset:true
});


sr.reveal("#texte",{

   duration:1000,
   Delay:2,
   distance:"40px",
   origin:"bottom"

});
sr.reveal("#pw",{

   duration:1000,
   Delay:2,
   distance:"150px",
   origin:"left"

});


sr.reveal("#btn",{

   duration:1000,
   Delay:2,
   distance:"150px",
   origin:"left"

});

sr.reveal("#breset",{

   duration:1000,
   Delay:2,
   distance:"150px",
   origin:"right"

});