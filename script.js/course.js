"use strict";

let options = {
	name: `test`,
	width:1024,
	height:1024,
	colors:{
		border:"green",
		bg:"black"
	}
}

for (let key in options) {
	if (typeof (options[key])  === "object") {
		for (let i in options[key]) {
			console.log(`Ключ под названием ${i} имеет значение ${options[key][i]}`);
		}
	}else{
		console.log(`Ключ под названием ${key} имеет значение ${options[key]}`);
	}
}