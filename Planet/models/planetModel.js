import mongoose from "mongoose";

const planetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    circumference: {
      type: Number,
      required: true,
    },
    distance_from_sun_km: {
      type: Number,
      required: true,
    },
    distance_from_earth_km: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const planetModel = mongoose.model("planets",planetSchema)

export default planetModel