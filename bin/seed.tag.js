require("../config/mongodb");
const TagModel = require("../models/tagModel");

const tags = [
  {
    label: "Family-friendly",
  },
  {
    label: "Food",
  },
  {
    label: "Hiking",
  },
  {
    label: "Swim",
  },
  {
    label: "Trek",
  },
  {
    label: "Animal-friendly",
  },
  {
    label: "Culture",
  },
  {
    label: "Children-friendly",
  },
];

async function insertTags() {
  try {
    await TagModel.deleteMany();
    const inserted = await TagModel.insertMany(tags);
    console.log(
      `seed tags done : ${inserted.length} documents inserted in database !`
    );
  } catch (err) {
    console.error(err);
  }
}

insertTags();
