let  java4;
fetch("https://my.api.mockaroo.com/users.json?key=79a35aa0&qty=3")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    java4=myJson;

lab4();
  
  }); 

 function lab4(view){

  const htmlSnippet = java4.map(abhi =>
          `
 <div id="color" onclick="colorred();" class="email-item email-item-selected pure-g ">
<div class="pure-u" onmouseover="change()">
 <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="${abhi.pic}"></div>

            <div class="pure-u-3-4">
                <h5 class="email-name">${abhi.name}</h5>
                <h4 class="email-subject">${abhi.subject}</h4>
                <p class="email-desc">
                ${abhi.paragraph}
                </p>
            </div>
      </div>
</div>
`
      )
          .join("");
  
    
    const main = document.querySelector("#list");
      main.innerHTML = htmlSnippet;
  
  }

 

function colorred() {
 const color=document.getElementById('color');

  color.style.backgroundColor = "skyblue";
    return false;


}    