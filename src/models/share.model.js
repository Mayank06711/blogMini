import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const shareSchema = new Schema(
  {
    sender: {
      // one who is sending blog
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      //to whome you send blog : reciever
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    creator: {
      // whose blog is being shared array bcz one user might send many blogs of diff author to diff sers
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
  },
  { timestamps: true }
);

shareSchema.plugin(mongooseAggregatePaginate);
export const Share = mongoose.model("Share", shareSchema);
