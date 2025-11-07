const mongoose = require('mongoose')

const TodoSchema = new  mongoose.Schema ({
    
    task: String,
    done: {
        type: Boolean,

        
        default: false
        
    }
//     },
//      {
//       toJSON: {
//     transform: function(doc, ret) {
//       // `ret` is the plain object that will be sent as JSON
//       delete ret._id;    // remove internal _id
//       delete ret.__v;    // if you want to remove version key
//       // optionally, you can rename it:
//       // ret.id = doc._id;
//     },
// },
}
    
)

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel