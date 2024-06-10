const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://alexeyisrael22:2SljOJHYDESBKYLQ@cluster0.3vlotbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Mongo DB is connected"))
  .catch((err) => console.log("Error: ", err));

const courseSchema = mongoose.Schema({
  tags: [String],
  date: Date,
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("courses-ex", courseSchema);

async function getCourses() {
  return await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function getCoursesByPrices() {
  return await Course
    // .find( { isPublished: true, tags: {$in: ['frontend', 'backend']}} )
    .find({ isPublished: true })
    .or([{ tags: "frontend" }, { tags: "backend" }])
    .sort({ price: -1 }) // =.sort('-price')
    .select({ name: 1, author: 1, price: 1 }); // =.select('name author price')
}

async function getCoursesExercise3() {
  return await Course.find().or([
    { isPublished: true, price: { $gte: 15 } },
    { name: /.*by.*/i },
  ]);
}

async function run() {
  const courses = await getCoursesExercise3();
  console.log(courses);
}

run();
