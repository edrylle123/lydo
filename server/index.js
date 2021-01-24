const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "youthsystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const age = req.body.age;
  const birthday = req.body.birthday;
  const sex = req.body.sex;
  const status = req.body.status;
  const educationalattainment = req.body.educationalattainment;
  const religion = req.body.religion;

  db.query(
    "INSERT INTO youth (name, address, age, birthday, sex, status, educationalattainment, religion) VALUES (?,?,?,?,?,?,?,?)",
    [
      name,
      address,
      age,
      birthday,
      sex,
      status,
      educationalattainment,
      religion,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.get("/youth", (req, res) => {
  db.query("SELECT * FROM youth", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server is running on 3001");
});
