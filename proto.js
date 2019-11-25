// Script 3

class Basket {

    constructor () {

        this.goods = []
        this.price=null;
        this.method=function(){
            console.log(this.price);
        }
    }
   

    addGood (args) {
        this.goods.push(args)
        this.method()
    }
    inspect () {
        const mass=this.goods;
        getMass();

       function getMass(){
        outer:for(let i=0;i<mass.length-1;i++){

            for(let j=i+1;j<mass.length;j++){

                if(mass[i].label===mass[j].label){
                    mass[i].count+=mass[j].count;
                    mass.splice(j,1);
                    getMass();    
                    break outer
                }
                
            }
        }
       }

       const info = {
        'Продукты':[],
        'Количество':[],
        'Общая цена':[]
         }
        mass.forEach(item=>{
            info['Продукты'].push(item.label)
            info['Количество'].push(item.count)
            info['Общая цена'].push(item.count*item.price)

        });
        this.price=info['Общая цена'].reduce((a,b)=>{
            return a+b;
        })
                                        
       
       
        console.table(info);
        
        
    }
    get totalPrice(){
        return this.price
    }

}

const basket = new Basket

basket.addGood({
    label: 'Молоко',
    price: 120,
    count: 1
})

basket.addGood({
    label: 'Печенье',
    price: 43,
    count: 10
})

basket.addGood({
    label: 'Молоко',
    price: 120,
    count: 2
})




basket.inspect()
/*
Продукт / Количество / Общая цена
Молоко / 3 / 360
Печенье / 10 / 430
*/
console.log(basket.totalPrice) 

