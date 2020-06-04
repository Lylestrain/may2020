let x = 'testing'

 //alert('first')

 //alert(x);

 //console.log('hello to all');

 const my_element = document.createElement('h1');
 let my_span = document.createElement('span');
 my_span.innerText = 'New JavaScript Heading';
 my_element.appendChild(my_span);
 document.body.appendChild(my_element);

 const subtext2 = "a client-side langauge interpreted by the browser.";

 function newsubtext(params) {
    // var subtext2 = "a client-side langauge interpreted by the browser.";
     document.getElementById('subtitle').innerText = subtext2;
 }


 const theParent = document.querySelector("#theDude");
 theParent.addEventListener("click", doSomething, false);

 function doSomething(e) {
     if(e.target !== e.currentTarget) {
         let clickedItem = e.target.id;
         alert("Hello from " + clickedItem);
     }

     e.stopPropagation();
 }


 function addBox() {
     var temp = document.getElementById("temp").content;
     var copy = document.importNode(temp, true);
     document.getElementById("app").appendChild(copy);
 }

 function deleteBox(e) {
     if(e.target.classList.contains("deleteButton")) {
         e.target.parentElement.remove();
     }
 }
 document.getElementById("app").addEventListener("click", deleteBox);

 document.getElementById("btn").addEventListener("click", addBox);


 function changeColor() {
     let color = document.getElementById('colorInputColor').nodeValue;
     document.styleSheets.backgroundColor = color;
     document.getElementById('colorInputText').value = color;
 }