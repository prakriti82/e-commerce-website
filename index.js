const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
if(bar){
  bar.addEventListener('click',() =>{
    nav.classList.add('active');

  })
}
if(close){
  close.addEventListener('click',() =>{
    nav.classList.remove('active');
})
}
// Sample product data
const products = [
  { id: 1, name: "Sporty Long Sleeve Jersey", price: 18, image: "img/clothes/c2.jpg" },
  { id: 2, name: "Black Leather jacket", price: 36, image: "img/clothes/c3.jpg" },
  { id: 3, name: "Typography T-shirt", price: 12, image: "img/clothes/c9.jpg" },
  { id: 4, name: "Mini Denim Skirt", price: 28, image: "img/clothes/c6.jpg" }
];
 