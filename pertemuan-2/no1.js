//No.1
console.log("1. Edit Object");
let arrayobj = [
	{
		name: "Tatas",
		company: "Arkademy",
		job: "Trainer",
		status: "single",
		city: "Jogja"
	},
	{
		name: "Pratama",
		company: "Emago",
		job: "Trainer",
		status: "single",
		city: "Jakarta"
	}
];

arrayobj[0].status= 'menikah',
arrayobj[0].city = 'jakarta',
arrayobj[1].city = 'jogja';
console.log(arrayobj);

