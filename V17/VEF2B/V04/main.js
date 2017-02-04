
function Pizza(name,size,topping,price) {
  this.name = name;
  this.size = size;
  this.topping = topping;
  this.price = price;
}
function getPizzaSize(size){
  this.size = pizza.size;
}
function getPizza(pizza){
    document.write("<h2>"+pizza.name+"</h1><br><p>Stærð:"+pizza.size+" <br> Álegg:"+pizza.topping+"<br>  Verð:"+pizza.price+"</p>");
}

var margarita = new Pizza('Margarita','Large','ostur, oregano',2110);
var svepperoni = new Pizza('Svepperoni','Large','Pepperoni, Sveppir',2925);
var hawaiian = new Pizza('Hawaiian','Large','Skinka, Annanas',2925);
