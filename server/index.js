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
  const placeofbirth = req.body.placeofbirth;
  const sex = req.body.sex;
  const status = req.body.status;
  const educationalAttainment = req.body.educationalAttainment;
  const religion = req.body.religion;
  const ethnicity = req.body.ethnicity;
  const pwd = req.body.pwd;
  const category = req.body.category;
  const remarks = req.body.remarks;

  db.query(
    "INSERT INTO youth (name, address, age, birthday, placeofbirth, sex, status, educationalAttainment, religion, ethnicity, pwd, category, remarks) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      name,
      address,
      age,
      birthday,
      placeofbirth,
      sex,
      status,
      educationalAttainment,
      religion,
      ethnicity,
      pwd,
      category,
      remarks,
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

app.put("/update", (req, res) => {
  const id = req.body.id;
  const address = req.body.address;
  db.query(
    "UPDATE youth SET address = ? WHERE id = ?",
    [address, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.get("/show", (req, res) => {
  const id = req.body.id;
  const address = req.body.address;
  db.query(
    "SELECT address FROM `youthsystem`.`youth` ",
    [address, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.get("/Keat", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Keat'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});
app.get("/Anak", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Anak'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});
app.get("/Asaklat", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Asaklat'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});
app.get("/Dipantan", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Asaklat'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.get("/Giayan", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Giayan'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.get("/Guingin", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Guingin'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});
app.get("/Landingan", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Landingan'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});
app.get("/Mataddi", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Mataddi'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.get("/Matmad", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Matmad'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.get("/Ponggo", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Ponggo'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});
app.get("/Sanramos", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'San Ramos'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});
app.get("/Sandio", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'San Dionisio II'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});
app.get("/Sanpugo", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'San Pugo'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.get("/Sangbay", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Sangbay'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.get("/Wasid", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;

  db.query(
    "SELECT * FROM `youthsystem`.`youth` WHERE address = 'Wasid'",
    [id, name, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query(" DELETE FROM youth WHERE id = ?", id, (err, result) => {
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
