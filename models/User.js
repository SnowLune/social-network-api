const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
         trim: true,
         unique: true
      },
      email: {
         type: String,
         required: true,
         unique: true, 
      },
      thoughts: [{ type: Schema.Types.ObjectID, ref: "Thought"}],
      friends: [{ type: Schema.Types.ObjectID, ref: "User"}]
   }
);

UserSchema.virtual("friendCount")
   .get( function() { 
      return this.friends.length;
   });

const User = model("User", UserSchema);

module.exports = User;
