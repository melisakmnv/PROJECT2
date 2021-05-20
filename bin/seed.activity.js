require('../config/mongodb');
const ActivityModel = require('../models/activityModel');

const activities = [
  {
    category: "City",
    accessibility:["Plane", "Train", "Bus", "Bicycle", "Walk"],
    itinerary: "",
    city_name: "Paris",
    city_photo: ["https://lp-cms-production.imgix.net/image_browser/Effiel%20Tower%20-%20Paris%20Highlights.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850"],
    category_photo: [""],
    id_tags: ["Romantic", "Culture", "Food"],
    description: "The most beautiful city in the world. You will get striked by the beauty of its architecture. The French food is to die for.",
    creator: "",
  },
  {
    category: "City",
    accessibility:["Plane", "Train", "Bus", "Bicycle", "Walk"],
    itinerary: "",
    city_name: "Bordeaux",
    city_photo: ["https://www.easyjet.com/ejcms/cache/medialibrary/Images/JSS/Destinations/Hero/France_Bordeaux_3840x2160.jpg?mw=1920&hash=242C6469BCC3F45D427FC3815D437224EF32558D"],
    category_photo: [""],
    id_tags: ["Romantic", "Culture", "Food", "Family-friendly"],
    description: "Discover the french little Paris in the south West of France. Charming, dynamic, young city.",
    creator: "",
  }
];

async function insertActivities() {
  try {
    await AcitivityModel.deleteMany();
    const inserted = await ActivityModel.insertMany(activities);
    console.log(
      `seed activities done : ${inserted.length} documents inserted in database !`
    );
  } catch (err) {
    console.error(err);
  }
}

insertActivities();