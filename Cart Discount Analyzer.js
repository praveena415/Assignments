const cartItems = [
  { name: "Shoes", category: "Footwear", price: 4999, discount: 20 },
  { name: "T-shirt", category: "Apparel", price: 1999, discount: 35 },
  { name: "Bag", category: "Accessories", price: 2499, discount: 40 },
  { name: "Socks", category: "Apparel", price: 499, discount: 10 }
];

const items=cartItems.map(item=>{
  const discountedPrice=item.price-(item.price*item.discount / 100 );
  return {...item,discountedPrice: parseFloat(discountedPrice.toFixed(2))}
})
const filteredItems=items.filter(item=>item.discount>=30).map(item=>({
  name:item.name,discountedPrice:item.discountedPrice}))
  
const totalDiscountedValue=filteredItems.reduce((sum,item)=>sum+item.discountedPrice)

console.log("filteredItems:", filteredItems)
console.log("totalDiscountedValue:", parseFloat(totalDiscountedValue.toFixed(2)))
