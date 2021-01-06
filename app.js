// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
p1.dataset.number = (parseInt(p1.dataset.number) + 10).toString();

let p2 = document.getElementById('p2');
p2.dataset.chaine = p2.dataset.chaine.length.toString();

let p3 = document.getElementById('p3');
let tabs = p3.dataset.tabs.split("|");
for(let tab of tabs){
    p3.innerHTML += "<br> ajoutez " + tab.trim();
}

let p4 = document.getElementById('p4');
let test = p4.dataset.boolean;
test = test.toLowerCase() === "true";
if(test){
    p4.innerHTML += " : la valeur vaut true";
}
else {
    p4.innerHTML += " : la valeur vaut false";
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.

let p5 = document.getElementById('p5');
p5.dataset.number = "10";
p5.dataset.number = (parseInt(p5.dataset.number) + 10).toString();

let p6 = document.getElementById('p6');
p6.dataset.chaine = "enter the matrix";
p6.dataset.chaine = p6.dataset.chaine.length.toString();

let p7 = document.getElementById('p7');
p7.dataset.tabs ="farine|chocolat|amandes|nappage";
let tabs1 = p7.dataset.tabs.split("|");
for(let tab of tabs1){
    p7.innerHTML += "<br> ajoutez " + tab.trim();
}

let p8 = document.getElementById('p8');
p8.dataset.boolean = "false";
let test1 = p8.dataset.boolean;
test1 = test1.toLowerCase() === "true";
if(test1){
    p8.innerHTML += " : la valeur vaut true";
}
else {
    p8.innerHTML += " : la valeur vaut false";
}

