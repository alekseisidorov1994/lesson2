// Изучите Script 1. Перепишите класс в классическом вид.
{
    function Animal(type, voice, name) {
    this.type = type;
    this.voice = voice;
    this.name = name;
}
Animal.prototype.letVoice = function () {
    console.log(`${this.name} говорит ${this.voice}! ${this.type} очень милый.`)
}

const animal = new Animal('кот', 'мяу', 'Мурзик');
animal.letVoice();
}
// Изучите Script 1. Перепишите класс в современном вид.
{
class Animal {
    constructor(type, voice, name) {
        this.type = type;
        this.voice = voice;
        this.name = name;
    }
    letVoice(){
        console.log(`${this.name} говорит ${this.voice}! ${this.type} очень милый.`)
    }
}

const animal = new Animal('кот', 'мяу', 'Мурзик');
animal.letVoice()
}
// Унаследуйте от класса, который вы написали в задание 2, новый классы Cat и Dog. Добейтесь того, что в конструктор этих классов было бы достаточно передать только кличку животного. Добавьте несколько методов в классы (действия, характерные животному)
{
    class Animal {
        constructor(type, voice, name) {
            this.type = type;
            this.voice = voice;
            this.name = name;
        }
        letVoice(){
            console.log(`${this.name} говорит ${this.voice}! ${this.type} очень милый.`)
        }
    }
    class Cat extends Animal{
        constructor(name,type, voice){
            super(type, voice, name)
            this.type = 'кот';
            this.voice='мяу';
            this._sneak = false;
        }
        sleep(){
            console.log(`${this.type} is sleeping`);
        }
        get getSneak(){
            return this._sneak;
        }
        set getSneak(val){
            this._sneak = val;
        }

    }

    class Dog extends Animal{
        constructor(name,type, voice){
            super(type, voice, name)
            this.type = 'собака';
            this.voice='гав';
            this._sniff = true;
        }
        run(){
            console.log(`${this.type} is running`);
        }
        get getSniff(){
            return this._sniff;
        }
        set getSniff(val){
            this._sniff = val;
        }

    }
   
}
// Изучите Script 2. Напишите класс Manager для которо такое использование будет возможным.
{
class Manager{
    static create(){
        return new Manager();
    }
    constructor(){
        this.num = 0;
    }
    init(n=0){
        this.num = n
        return this;
    }
    add(n=0){
        this.num+=n;
        return this;
    }
    log(){
        console.log(this.num);
        return this;
    }
    multi(n){
        this.num*=n;
        return this;
    }
    reverse(){
        this.num=+(this.num+'').split('').reverse().join('')
        return this;
    }
    
}
Manager.create()
    .init(5)
    .log() // 5
    .add(100)
    .log() // 105
    .multi(1.5)
    .log() // 157,5
    .init(10)
    .log() // 10
    .add(113)
    .reverse()
    .log() // 321
}   
// Изучите Script 3. Доработайте класс Basket так, чтобы приведенный скрипт работал.
// Подсказка: totalPrice геттер.


let arr=[1,2,3,4,5];
arr.splice(0,1)
console.log(arr);
