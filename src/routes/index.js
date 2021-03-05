const express = require("express");
const router = express.Router();
const task = require("../models/task");

router.get("/", async (req, res) => {
  res.send(await task.find());
});
router.post("/", async (req, res) => {
  const taskNew = new task(req.body);
  await taskNew.save();
  res.send("saved!!");
  //   console.log(req.body);
});
router.put("/:id", async (req, res) => {
  await task.findByIdAndUpdate(req.params.id, req.body);
  res.json("received and updated");
});
router.delete("/:id", async (req, res) => {
  await task.findByIdAndDelete(req.params.id);
  res.json("received and deleted");
});
module.exports = router;
