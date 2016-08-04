/**
 * Created by HeroLiu on 08/04/2016.
 */
//在node_modules中的引用方式
var ltq = require("bar");//引入此文件时会执行这个js文件。
var showName = require("showname");

console.log(ltq);
showName.show();
