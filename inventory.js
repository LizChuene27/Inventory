class Shoes {
    constructor(name, productCode, quantity, valuePerItem) {
      this.name = name;
      this.productCode = productCode;
      this.quantity = quantity;
      this.valuePerItem = valuePerItem;  
       } 
      }
      
      const shoeInventory = [];
      shoeInventory.push(new Shoes('Drip', '001', 20, 200)); 
      shoeInventory.push(new Shoes('Bathu', '002', 10, 150)); 
      shoeInventory.push(new Shoes('Nike', '003', 25, 250));
      shoeInventory.push(new Shoes('Mphala', '004', 35, 220));
      shoeInventory.push(new Shoes('Adidas Stan Smiths', '005', 25, 100));
      
    
      function searchShoeByName(name) {
           const result = shoeInventory.find(shoe => shoe.name === name);
            if (result) {
      console.log('Shoe found:');
      console.log(result);
       } else {
       console.log('No shoes found with that name.');
      }
      }
      
    function findLowestValuePerItem() {
      const result = shoeInventory.reduce((prev, current) => {
      return prev.valuePerItem < current.valuePerItem ? prev : current;
      });
      console.log('Shoe with lowest value per item:');
      console.log(result);
      }
      
      
      
      function findHighestValuePerItem() {
      
        const result = shoeInventory.reduce((prev, current) => {
      
          return prev.valuePerItem > current.valuePerItem ? prev : current;
      
        });
      
        console.log('Shoe with highest value per item:');
      
        console.log(result);
      
      }
      
      
      function editShoe(name, attribute, newValue) {
      
        const shoe = shoeInventory.find(shoe => shoe.name === name);
      
        if (shoe) {
      
          shoe[attribute] = newValue;
      
          console.log('Shoe updated:');
      
          console.log(shoe);
      
        } else {
      
          console.log('No shoes found with that name.');
      
        }
      
      }
      
      
      function orderByValuePerItemAscending() {
      
        const result = shoeInventory.sort((a, b) => a.valuePerItem - b.valuePerItem);
      
        console.log('Shoes ordered by value per item in ascending order:');
      
        console.log(result);
      
      }