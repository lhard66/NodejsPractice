/**
 * Created by HeroLiu on 08/04/2016.
 */
function  Person(name,age,sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
}
Person.prototype= {
    sayHello:function () {
        console.log(this.name+"---"+this.age+"---"+this.sex);
    }
}

module.exports=Person;