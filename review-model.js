const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// this will be our data base's data structure 
const ReviewSchema = new Schema(
  {
    id: Number,
    name: String,
    rating: Number,
    product_id: Number,
    user_id: Number,
    // user_id: Number
  },
  { timestamps: true }
);

// ReviewSchema.virtual('user', {
//   ref: 'User', // The model to use
//   localField: 'user_id', // Find people where `localField`
//   foreignField: 'username', // is equal to `foreignField`
//   // If `justOne` is true, 'members' will be a single doc as opposed to
//   // an array. `justOne` is false by default.
//   justOne: true,
// });

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Review', ReviewSchema);