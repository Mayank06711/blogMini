import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const blogSchema = new Schema({
      title:{
        type: String,
        required: true,
        uppercase: true,
      },
      content:{
        type: String,
        required: true,
      },
      image:{
        type:[String],
        required: false,
      },
      author:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      isPublished:{
        type:Boolean,
        default:true,
      },
},{timestamps: true});

blogSchema.plugin(mongooseAggregatePaginate);//Adding the plugin to a schema

export const Blog = mongoose.model("Blog", blogSchema);