import mongoose, { plugin } from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  mobile: String,
  emergency: String,
  govtid: String,
  govtidnumber: String,
  gaurdian: String,
  gaurdianname: String,
  email: String,
  pincode: Number,
  city: String,
  country: String,
  state: String,
  address: String,
  nationality: String,
  bloodgroup: String,
  status: String,
  religion: Number,
  occupation: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema / plugin(autoIncrement.plugin, "user");

const taskuserdata = mongoose.model("taskuserdata", userSchema);

export default taskuserdata;