require("../config/mongodb")
const UserModel = require("../models/userModel");

const users = [
// {
//     firstname: "Melisa",
//     lastname: "CHA",
//     location: "Paris",
//     email: "melisahh@gmail.com",
//     password: "1234"
// },
// {
//     firstname: "Eric",
//     lastname: "CHASUN",
//     location: "Paris",
//     email: "ericSH@gmail.com",
//     password: "3333"
// },
{
    username: "alice",
    email: "o@o",
    password: "$",
    role: "admin",
    avatar: "https://i.pinimg.com/originals/62/cf/de/62cfdef6cb05772d1c4c5e3882839238.png",
    description: "Team admin",
    city: "Paris",
    wishlist: ""
}
];

async function insertUsers() {
    try {
        await UserModel.deleteMany();
        const inserted = await UserModel.insertMany(users);
        console.log(
            `seed artists done : ${inserted.length} documents inserted in database !`
        );
    } catch (err) {
        console.error(err);
    }
}

insertUsers();