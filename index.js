import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./db.js";
import taskuserdata from "./schema/userSchema.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 4001;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => {
  console.log("server running on port : ", PORT);
});

app.get("/", (req, res) => {
  res.send("Hello Every, You are at Express Server!");
});

app.get("/usersdata", async (request, response) => {
  try {
    const users = await taskuserdata.find({});
    response.status(200).json(users);
  } catch (e) {
    response.status(404).json({
      message: e.message,
    });
  }
});

app.post("/createuser", async (request, response) => {
  const user1 = request.body;

  // console.log(user1)
  const newUser = new taskuserdata(user1);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (e) {
    response.status(409).json({
      message: e.message,
    });
  }
});
