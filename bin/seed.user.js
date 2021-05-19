require('../config/mongodb');
const UserModel = require('../models/userModel');

const users = [
  {
    username: 'Melisa',
    email: 'melisa@gm',
    password: 'm',
    role: 'admin',
    avatar: 'https://cdn.pixabay.com/photo/2020/02/20/12/12/cat-4864605__340.jpg',
    description: 'Team admin',
    city: 'Paris',
  },
  {
    username: 'alice',
    email: 'o@o',
    password: '$',
    role: 'admin',
    avatar: 'https://i.pinimg.com/originals/62/cf/de/62cfdef6cb05772d1c4c5e3882839238.png',
    description: 'Team admin',
    city: 'Paris',
    wishlist: '',
  },
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
