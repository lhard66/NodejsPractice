/**
 * Created by HeroLiu on 08/05/2016.
 */
var sd=require("silly-datetime");

var date= sd.format(new Date(),"HH:mm:ss YYYY-MM-DD ");
sd.locate("zh-cn");
var deff=sd.fromNow(+new Date());
console.log(date);
console.log(deff);