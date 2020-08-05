//jshint esversion:6

// $("#fname").on("click", function () {
//   $("h1").css("color", "red");
// });

// $(".button").click(function () {

// });

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/success", function(req, res) {
  res.send("You did it!")
})

app.get("/failed", function(req,res) {
  res.send(("Please try again"))
})


app.listen(3000, function () {
  console.log("Server started on Port 3000");
});


 