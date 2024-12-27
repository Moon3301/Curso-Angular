interface SuperHero {

    name: string;
    age: number;
    address: Address,
    showAdress: () => string;

}

interface Address {

    street: string;
    country: string;
    city: string;
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY',
    },
    showAdress(){
        return this.name + ', ' + this.address.street + ', ' + this.address.city + ', ' + this.address.country;
    }
}

export {};