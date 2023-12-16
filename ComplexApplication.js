/*
Filename: ComplexApplication.js
Content: A complex application for managing inventory of a grocery store
*/

// Class definitions
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productName) {
    this.products = this.products.filter(product => product.name !== productName);
  }

  getTotalInventoryValue() {
    let totalValue = 0;
    for (let product of this.products) {
      totalValue += product.getTotalPrice();
    }
    return totalValue;
  }

  getLowStockProducts(threshold) {
    return this.products.filter(product => product.quantity < threshold);
  }
}

// Sample data
const apple = new Product('Apple', 0.5, 100);
const banana = new Product('Banana', 0.3, 50);
const carrot = new Product('Carrot', 0.2, 30);

const inventory = new Inventory();
inventory.addProduct(apple);
inventory.addProduct(banana);
inventory.addProduct(carrot);

console.log('Total inventory value:', inventory.getTotalInventoryValue());

const lowStockProducts = inventory.getLowStockProducts(40);
console.log('Low stock products:', lowStockProducts);

inventory.removeProduct('Banana');
console.log('Total inventory value after removing Banana:', inventory.getTotalInventoryValue());

// ... more code ...

// Example of a complex function
function calculateProfitMargin(sellingPrice, costPrice) {
  const profit = sellingPrice - costPrice;
  const margin = (profit / sellingPrice) * 100;
  return margin.toFixed(2); // Return margin rounded to 2 decimal places
}

const sellingPrice = 1.0;
const costPrice = 0.6;
const profitMargin = calculateProfitMargin(sellingPrice, costPrice);
console.log('Profit margin:', profitMargin);

// ... more code ...

// More classes, functions, and business logic can be added here to make the code more elaborate and complex.