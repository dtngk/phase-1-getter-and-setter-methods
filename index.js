// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }

    set diameter(value){
        this.radius = (value / 2);
    }

    set circumference(value){
        this.radius = (value / (Math.PI * 2))
    }

    set area(value){
        this.radius = (Math.sqrt(value/Math.PI));
    }

    get diameter(){
        return (this.radius * 2);
    }

    get circumference(){
        return (this.radius * Math.PI * 2) ;
    }

    get area(){
       return(Math.PI * this.radius * this.radius)
    }
}