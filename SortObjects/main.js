
const students = [
    { name: 'Alice', price: 20 },
    { name: 'Bob', price: 22 },
    { name: 'Charlie', price: 21 },
];

    function sorting_price(students){
        students.sort((a,b)=>a.price-b.price)
        return students
    }

console.log(sorting_price(students))