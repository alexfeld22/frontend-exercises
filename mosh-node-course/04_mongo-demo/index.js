const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

mongoose
  .connect(
    "mongodb+srv://alexeyisrael22:2SljOJHYDESBKYLQ@cluster0.3vlotbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/playground"
  )
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.error("Could not connect to mongo db... ", error));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// Classes, objects
// Human, John
// Course, nodeCourse

const Course = mongoose.model("courses-ex", courseSchema); // Course is a class, not an object.

async function createCourse() {
  const course = new Course({
    name: "Angular course",
    author: "Alex",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  /** EQIALITY operators
   * eq - equal
   * ne - not equal
   * gt - greater than
   * gte - greater than or equal to
   * lt - less than
   * lte - less than or equal to
   * in
   * nin - not in
   */

  /** LOGICAL operators
   * or
   * and
   */

  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course.find({_id: "5a68fdd7bee8ea64649c2777"})
    // .find({ author: "Alex", isPublished: true })
    // .find ( {price: { $gt: 10, $lte }} ) // pass object, greater than 10 AND less than or equal to 20
    // .find( { price: { $in: [10, 15, 20] } } ) // price = 10 OR = 15 OR = 20
    // .find()
    // .or([ {author: 'Alex'}, {isPublished: true}] )
    // .and( [{author: 'Alex'}, {isPublished: true}] )

    // REGEX
    // .find( { author: /^Alex/ } ) // Starts with "Alex", case sensitive
    // .find( { author: /Hamedani$/i } ) // Ends with "Hamedani", case insensitive
    // .find( { author: /.*Alex.*/i } ) // "Alex" anywhere in the string, case insensitive
    // .skip((pageNumber - 1) * pageSize)
    // .limit(pageSize)
    .sort({ name: 1 }) // 1 - asc, -1 - desc; also could be ".sort("name")" - asc, ".sort("-name")" - desc
  // for example: '.sort("name -author")' - name asc, author desc
  // .select( { name: 1, tags: 1 }
    .count();
  console.log(courses);
}

getCourses();

async function updateCourse(id) {
  /**
   * Approach: Query first:
   * 1. FindById()
   * 2. Modify it's properties
   * 3. save()
   */

  // Check if the ID is a valid ObjectID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID format");
  }

  const courses = await Course.find({_id: "5a68fdd7bee8ea64649c2777"})

  console.log(id, courses);

  if (!courses) {
    console.log("cant find course");
    return;
  }
  return
  // approach 1 to update values
  course.isPublished = true;
  course.author = "Author Author";

  // approach 2 to update values
  // course.set({
  //     isPublished: true,
  //     author: 'Author Author'
  // });

  const result = await course.save();
  console.log(result);
  /**
   * Approach: Update first:
   * 1. Update directly
   * 2. Optionally: get the updated document
   */
}

// updateCourse("5a68fdf95db93f6477053ddd");

async function updateCourseDirectlly(id) {
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Jason",
        isPublished: false,
      },
    },
    { new: true }
  );

  console.log(course);
}

// updateCourseDirectlly("5a68fdf95db93f6477053ddd");

async function removeCourse(id) {
//   const result = await Course.deleteOne({ _id: id }); // deleteMany... 
  const course = await Course.findOneAndDelete(id);
  console.log(course);
}

// removeCourse('5a68fdf95db93f6477053ddd')


async function updateCourse2() {

    const courses = await Course.find({_id: "5a68fdd7bee8ea64649c2777"})
      // .find({ author: "Alex", isPublished: true })
      // .find ( {price: { $gt: 10, $lte }} ) // pass object, greater than 10 AND less than or equal to 20
      // .find( { price: { $in: [10, 15, 20] } } ) // price = 10 OR = 15 OR = 20
      // .find()
      // .or([ {author: 'Alex'}, {isPublished: true}] )
      // .and( [{author: 'Alex'}, {isPublished: true}] )
  
      // REGEX
      // .find( { author: /^Alex/ } ) // Starts with "Alex", case sensitive
      // .find( { author: /Hamedani$/i } ) // Ends with "Hamedani", case insensitive
      // .find( { author: /.*Alex.*/i } ) // "Alex" anywhere in the string, case insensitive
      // .skip((pageNumber - 1) * pageSize)
      // .limit(pageSize)
      .sort({ name: 1 }) // 1 - asc, -1 - desc; also could be ".sort("name")" - asc, ".sort("-name")" - desc
    // for example: '.sort("name -author")' - name asc, author desc
    // .select( { name: 1, tags: 1 }
    //   .count();
    console.log(courses);
  }
  
   updateCourse2();