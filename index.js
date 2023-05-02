import express, { urlencoded } from "express";
const router = express.Router();

const PORT = "4000";
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const getUsersData = () => {
  console.log("getUsersData");
};

const createUserData = () => {
  console.log("createUserData");
};

app.listen(PORT, () => {
  console.log("server running on port : ", PORT);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/usersdata", (req, res) => {
  res.send("getUsersData");
  getUsersData();
});

app.post("/createuser", (req, res) => {
  res.send("createUserData");
  createUserData()
});
