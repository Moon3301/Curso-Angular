export class Person {

    constructor(public name: string, public address: string) {
        this.name = name;
        this.address = address; 
    }
}

export class Hero extends Person {

    constructor(public alterEgo: string, public age: number, public realName:string){
        super('tst','tessdd')
    }
}

const ironman =  new Hero('Jhon', 45, 'Tony Stark');

console.log(ironman);