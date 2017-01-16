const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

let Cat = mongoose.model('Cat', { name: String });

let kitty = new Cat({ name: 'ltq cat' });
kitty.save(err=>{
	if(err){
		console.log(err);
	}else{
		console.log('meow');
	}
});
