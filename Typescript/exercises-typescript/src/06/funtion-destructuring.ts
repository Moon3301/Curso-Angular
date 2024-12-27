export interface Product {
    description: string;
    price: number,

}

const phone : Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 200
}

interface taxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: taxCalculationOptions ): number[] {

    const { products, tax } = options;

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total , total * tax];

}

const shoppingCart = [ phone, tablet];
const tax = 0.16;

// const result = taxCalculation({

//     products: shoppingCart,
//     tax
// })

const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log(total)
console.log(taxTotal)

export {};