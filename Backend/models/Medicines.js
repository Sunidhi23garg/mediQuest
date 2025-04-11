const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  pharmacy: {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  }
})

const MedicineModel = mongoose.model("medicines", MedicineSchema)
module.exports = MedicineModel









// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   category: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   pharmacy: {
//     name: {
//       type: String,
//       required: true
//     },
//     address: {
//       type: String,
//       required: true
//     }
//   }
// })

// const UserModel = mongoose.model("medicines", UserSchema)
// module.exports = UserModel