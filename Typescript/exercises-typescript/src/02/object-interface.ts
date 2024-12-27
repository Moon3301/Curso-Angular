let skills: string[] = ['bash', 'counter', 'healing'];

interface Character {

    name: string;
    hp: number;
    skills: string[];
    
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counter', 'healing']
}

console.log(skills);
console.table(strider);

export {};