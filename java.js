let java4;
fetch("https://my.api.mockaroo.com/users.json?key=79a35aa0&qty=3")

.then(function(response) 
    {
    return response.json();
    })

.then(function(myJson) 
    {
    java4=myJson;
    lab4();
    }); 


 function lab4(view)
 {
   const profile = java4.map(data =>`<div class="email-item email-item-selected pure-g " id="click"">
   <div class="pure-u">
   <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="${data.pic}"></div>
    <div class="pure-u-3-4">
    <h5 class="email-name">${data.name}</h5>
    <h4 class="email-subject">${data.subject}</h4>
    <p class="email-desc">${data.paragraph}
      </p>
      </div>
      </div>
      </div>`).join("");
  
const abhi = document.querySelector("#list");
abhi.innerHTML = profile;
}
 function lab(view)
 {
   const pro = java4.map(data =>`<div class="email-item email-item-selected pure-g " id="click1"">
   <div class="pure-u">
   <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="${data.pic}"></div>
    <div class="pure-u-3-4">
    <h5 class="email-name">${data.name}</h5>
    <h4 class="email-subject">${data.subject}</h4>
    <p class="email-desc">${data.paragraph}
      </p>
      </div>
      </div>
      </div>`).join("");
  
const abh = document.querySelector("#list");
abh.innerHTML = pro;
}
