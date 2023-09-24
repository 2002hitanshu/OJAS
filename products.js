let http = new XMLHttpRequest();
http.open('get', 'startup.json', true);
http.send();
http.onload = function () {
   if(this.readyState == 4 && this.status == 200){
   let products = JSON.parse(this.responseText);
   let output = "";
   for (let item of products) {
      output += `
         <div class="card">
         <img src="..." class="card-img-top" alt="...">
       
         <div class="card-body">
           <h5 class="card-title">${item.title}</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
       </div>
         `;
   }
   document.querySelector(".startup").innerHTML = output;
   }
}