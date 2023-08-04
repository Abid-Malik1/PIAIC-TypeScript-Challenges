let user:string = "Hello Piaic my name is Abid Malik";

console.log("Upeercase = " + user.toUpperCase());
console.log("Lowercase = " + user.toLowerCase());

const newName = user.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log("Titlecase = " + newName);
