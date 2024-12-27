import { Product, taxCalculation } from'../06/funtion-destructuring';

const shoppingCart : Product[] = [

    {
        description: 'Nokia A1',
        price: 150.0
    },
    {
        description: 'iPad Air',
        price: 200
    }
]

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.16
})

console.log(total)
console.log(tax)