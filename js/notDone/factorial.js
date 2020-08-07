const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
};

const { name, ...rest } = hotel;

console.log(name); // "Resort Hotel"
console.log(rest); // {stars: 5, capacity: 100}