require("../config/mongodb")
const UserModel = require("../models/userModel");

const users = [{
    firstname: "Melisa",
    lastname: "CHA",
    location: "Paris",
    email: "melisahh@gmail.com",
    password: "1234"
},
{
    firstname: "Eric",
    lastname: "CHASUN",
    location: "Paris",
    email: "ericSH@gmail.com",
    password: "3333"
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