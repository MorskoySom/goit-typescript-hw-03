class Key {
    private signature: string;
    constructor() {
        this.signature = Math.random().toString(36).substring(2, 10);
    }
    getSignature(): string {
        return this.signature;
    }
}

class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = key;
    }
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];
                            
    constructor(key: Key) {
        this.key = key;
        this.door = false;
    }
    
    abstract openDoor(key: Key): void;
    
    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person came in.');
        } else {
            console.log('Door is closed. Person cannot come in.');
        }
    }
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door is opened.');
        } else {
            console.log('Invalid key. Door remains closed.');
        }
    }
}
                
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };


                
                
                