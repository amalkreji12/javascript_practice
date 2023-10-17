var person={name:"Apple",age:25,place:"Kerala",
display:function(){
    console.log(this.name)
}}
console.log(person.name)

for(x in person){
    console.log(x)
}