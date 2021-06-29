class First {
    constructor(){   
    }

    hello() {
        console.log('Привет, я метод родителя!');
    }
}

class Second extends First {
    constructor() {
        super();
    }    
    sayHello() {
        super.hello(); 
        console.log('А я наследуемый метод!');        
    }

}
const newSecond = new Second();
newSecond.sayHello();