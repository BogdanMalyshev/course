"use strict";

let options = {
	name: `test`,
	width:1024,
	height:1024,
	colors:{
		border:"green",
		bg:"black"
	},
	nameTest: function(){
		const basicMassiv = [];
		let counter = 1;
		for (let key in options) {
			if (typeof (options[key])  === "object") {
				for (let i in options[key]){
				console.log(counter);
				console.log(`Ключ под названием ${i} имеет значение ${options[key][i]}`);
				basicMassiv[counter-1] = i;
				counter++;}
			}else if (key === "nameTest"){
				
			}else{
				console.log(counter);
				console.log(`Ключ под названием ${key} имеет значение ${options[key]}`);
				basicMassiv[counter-1] = key;
				counter++;
			}
		}
		console.log(basicMassiv);
	}
}
options.nameTest();
