let emp = {
    id : 1,
    name : "lavanya",
    college : "oxy",
};
console.log(Object.assign({},emp));
console.log({...emp});
let arr1 = [
    ["id", "1"],
    ["name", "user"],
    ["age", "25"],
    ["profession", "developer"],
];
console.log(Object.fromEntries(arr1));