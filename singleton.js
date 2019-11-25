// Задание №6 (***)
// Реализуйте singleton класс UserStatistic, который будет собирать статистику пользовательской деятельности:

// координаты мыши
// время кликов
// прожатые клавиши

// let instance = null;
class Singleton{
    static create(){
        return new Singleton;
    }
    constructor(){
        this.timeNow= Math.floor(new Date().getTime()/1000)
        this.info = {
            coordinates:{
                x:[],
                y:[],
            },
            intervalClicks:[],
            keyDown:[],
        }
        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance=this;
    }
    spyMouse(){
        document.addEventListener('mousemove',function(event){
            green.call(new Singleton())
            function green(){
                this.info.coordinates.x.push(event.x)
                this.info.coordinates.y.push(event.y)
            }
        });
        return this;

    }
    spyTimeClick(){
        document.addEventListener('click',function(event){
            clicker.call(new Singleton())
            function clicker(){
                let sec =  Math.floor(new Date().getTime()/1000)-this.timeNow
                this.info.intervalClicks.push(sec);
            }
        });
        return this;

    }
    spyKeyDowm(){
        document.addEventListener('keydown',function(event){
            keyDown.call(new Singleton())
            function keyDown(){
                this.info.keyDown.push(event.key);
            }
        });
        return this;

    }
    inform(){
        console.log(this.info);
        // return this;
    }
    
}

Singleton.create().spyMouse().spyTimeClick().spyKeyDowm().inform()


