

// let names = [ 'Sarvar', 'Ibragim', 'Odil', 'Anvar'];

// for(let key in names) {
// 	// console.log(names[key]);

// 	// Metod splice(nomer yacheyki, kollichestvo yacheyek) - udalayet vibranniye yacheyki c massiva.

// 	// names[key] == 'Sarvar' ? names.splice(key, 2) : ''; tun nachinayet udalit posle pervogo massiva (Ibragim i Odil udalitsya)

// 	names[key] == 'Sarvar' ? names.splice(0, 5) : '';/* '' - eto zaglushka ona stavitsya obyazatelna. Tut nachinayet udalit snachala  */

// }

// metod push() - Dobavlyaet ukazannoe znachenie v kones massiva
// metod unshift() - Dobavlyaet ukazannoe znachenie v nachala massiva
// metod pop() - Udalyaet poslednoy znachenie massiva
// metod shift() - Udalyaet perviy znachenie massiva

// names.push('Zafar');
// names.unshift('Void');
// names.pop();
// names.shift();

// console.log(names);

let users = [
	{
		name: 'HTML',
		age: 25
	},
	{
		name: 'CSS',
		age: 24
	}

]

// for(let key in users) {
// 	console.log(users[key]);
// }

// for in - vozvrashayet kluchi
// for of - vozvrashaet znacheniye

for(let item of users) {
	console.log(item);
}















