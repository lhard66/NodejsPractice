/**
 * Created by HeroLiu on 08/04/2016.
 */
var base=require("./p_base.js");
var Person=require("./p_person");

console.log(base.msg);
base.sayHi();

var lucy=new Person("lucy",18,"女");
lucy.sayHello();