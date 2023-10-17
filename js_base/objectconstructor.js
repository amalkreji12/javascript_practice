function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.diplay=function ()
    {
        console.log("Name: " +this.name+ "Age: "+this.age)
    }
}

var apple=new Person("Apple",20,"Kerala")
var orange=new Person("Orange",25,"India")

apple.display()
orange.display()