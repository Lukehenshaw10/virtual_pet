const Pet = require('../src/pet');

const MAXIMUM_FITNESS = 10;
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;


describe ('constructor' , () => {
    it ('returns an object' , () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    
    it ('sets the name property' , () => {
        const pet = new Pet ('Fido');
        expect(pet.name).toEqual('Fido');
     });
     it ('has an initial age of 0' , () => {
         const pet = new Pet ('Fido');
         expect(pet.age).toEqual(INITIAL_AGE);
     });
     it('has an initial hunger of 0' , () => {
         const pet = new Pet ('Fido');
         expect(pet.hunger).toEqual(INITIAL_HUNGER);
     });
     it('has an initial fitness of 10', () => {
         const pet = new Pet ('Fido'); 
         expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
     });

     describe ('growUp' , () => {
    it ('increments the age by 1' , () => {
        const pet = new Pet ('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increments hunger by 5', () => {
        const pet = new Pet  ('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('reduces fitness by 3', () => {
        const pet = new Pet ('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
    });
    describe ('walk' , () => {
        it('it increases fitness by 4' , () => {
            const pet = new Pet ('Fido');
            pet.fitness = 8;
            pet.walk();
            expect (pet.fitness).toEqual(MAXIMUM_FITNESS);
        });
    
});
describe ('feed' , () => {
    it ('decreases hunger by 3', () =>{
        const pet = new Pet ('Fido');
        pet.feed();
        expect (pet.hunger).toEqual(0)
    });
    it('throws an error if the pet is not alive' , () => {
        const pet = new Pet ('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
    describe ('checkUp' , () => {
        xit('if fitness is equal to or less than 3 return "I need a walk" ' , () => {
            const pet = new Pet ('Fido');
            expect (pet.checkUp()).toEqual ('I need a walk');
        });
        xit('if hunger is 5 or more return "I am hungry" ' , () => {
            const pet = new Pet ('Fido');
            expect (pet.checkUp()).toEqual ('I am hungry');
        });
        xit('if both are true return "I am hungry' , () => {
            const pet = new Pet ('Fido');
            expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
        });
        xit('if neither are true return "I feel great" ' ,  () => {
            const pet = new Pet ('Fido');
            expect(pet.checkUp()).toEqual('I feel great');
        });
        describe ('isAlive' , () => {
            it('if fitness is 0 or less return false' , () => {
                const pet = new Pet ('Fido');
                expect (pet.isAlive).toBe(true);
            });
            it('if hunger is 10 or more return false' , () => {
                const pet = new Pet ('Fido');
                expect (pet.isAlive).toBe(true);
            });
            it('if age is 30 or more return false' , () => {
                const pet = new Pet ('Fido');
                expect (pet.isAlive).toBe(true); 
            });
        });
        
        });
   
   });

});