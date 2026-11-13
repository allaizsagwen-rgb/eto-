const connection = require("../config/db");

exports.getAllUsers = (req, res) => {
  connection.query("SELECT * FROM dorm_rentals", (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
};

exports.createUser = (req, res) => {
  const { studentid, name, room, rate } = req.body;
  connection.query(
    "INSERT INTO dorm_rentals (student_id, student_name, room_number, monthly_rate) VALUES (?,?,?,?)",
    [studentid, name, room, rate],
    (err, result) => {
      if (err) throw err;
      res
        .status(201)
        .json({ message: "Student created successfully", id: result.insertId });
    },
  );
};

exports.updateUser = (req, res) => {
  const { room, ids } = req.body;
  connection.query(
    "UPDATE dorm_rentals SET room_number=?  WHERE id=? ",
    [room, ids],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows > 0)
        res.json({
          message: "Please provide rental ID and payment successfully",
        });
      else res.status(404).json({ message: "Rental record not found" });
    },
  );
};

// //sql
// const connection = require("../config/db");
// //GET
// exports.getAllUsers = (req, res) => {
//   connection.query("SELECT * FROM userdata", (err, rows, fields) => {
//     if (err) throw err;
//     res.json(rows);
//   });
// };

// //PDRILL 1
// exports.getHelloWorld = (req, res) => {
//   res.send("Hello World");
// };

// //GET (search)
// exports.getUserById = (req, res) => {
//   const id = req.params.id;
//   //SQL INJECTION
//   connection.query(
//     "SELECT * FROM userdata WHERE id = ?",
//     [id],
//     (err, rows, fields) => {
//       if (err) throw err;

//       if (rows.length > 0) res.json(rows);
//       else res.json(404).json({ message: "404 User not found" });
//     },
//   );
// };

// // //GET (search by IP address)
// exports.getUserByIp = (req, res) => {
//   const ipAddress = req.params.ip; // Gets the IP from the URL

//   connection.query(
//     "SELECT * FROM userdata WHERE ip = ?",
//     [ipAddress],
//     (err, rows) => {
//       if (rows.length === 0) {
//         res.json(rows);
//       } else {
//         res.status(404).json({ message: "No user found with this IP address" });
//       }
//     },
//   );
// };

// //GET (search by IP or Email address)
// exports.getUserByIpOrEmail = (req, res) => {
//   const searchValue = req.params.search; // Gets the IP from the URL
//   connection.query(
//     "SELECT * FROM userdata WHERE ip = ? OR email = ?",
//     [searchValue, searchValue],
//     (err, rows) => {
//       if (err) throw err;
//       if (rows.length === 0) {
//         res
//           .status(404)
//           .json({ message: "No user found with this IP or Email" });
//       } else {
//         res.json(rows);
//       }
//     },
//   );
// };

// //CREATE
// exports.createUser = (req, res) => {
//   const { fname, lname, email, gender, ip, salary, department } = req.body;
//   connection.query(
//     "INSERT INTO userdata (first_name,last_name,email,gender, ip_address, salary, department)  VALUES (??,?,?,?,?,?)",
//     [fname, lname, email, gender, ip, salary, department],
//     (err, result) => {
//       if (err) throw err;
//       res.json({ message: "User created successfully", id: result.insertId });
//     },
//   );
// };
// //UPDATE
// exports.updateUser = (req, res) => {
//   const { id, fname, lname, email, gender, ip, salary, department } = req.body;
//   connection.query(
//     "UPDATE userdata SET first_name=? last_name=? email=? gender=? ip=? salary=? department=? WHERE id=?",
//     [id, fname, lname, email, gender, ip, salary, department],
//     (err, result) => {
//       if (err) throw err;
//       if (result.affectedRows > 0)
//         res.json({ message: "User updated successfully" });
//       else res.status(404).json({ message: "User not found" });
//     },
//   );
// };

// //DELETE
// exports.deleteUser = (req, res) => {
//   const { id } = req.body;
//   connection.query("DELETE FROM userdata WHERE id=?", [id], (err, result) => {
//     if (err) throw err;
//     if (result.affectedRows > 0)
//       res.json({ message: "User deleted successfully" });
//     else res.status(404).json({ message: "User not found" });
//   });
// };
