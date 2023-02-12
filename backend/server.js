const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(cors());

//Database connection
mongoose.connect(
  "mongodb://localhost:27017/ChartsPlotting",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

//Data schema
const dataSchema = new mongoose.Schema({
  year: {
    type: Number,
  },
  profit: {
    type: Array,
  },
});


//Data Router
const Data = new mongoose.model("Data", dataSchema);

//Data Api
app.post("/add-Data", async (req, res) => {
    try {
      const result = await Data.findOne({ year: req.body.year });
      if (result) {
        var addData = [];
        for (let i = 0; i < result.profit.length; i++) {
          addData.push(result.profit[i]);
        }
        addData.push(req.body.profit);
        const updated_data = await Data.findOneAndUpdate(
          { year: req.body.year },
          { $set: { profit: addData } }
        );
        res
          .status(200)
          .send({ success: true, msg: "Profit details", data: updated_data });
      } else {
        const data = new Data({
          year: req.body.year,
          profit: req.body.profit,
        });
        const profit_data = await data.save();
        res
          .status(200)
          .send({ success: true, msg: "Profit details", data: profit_data });
      }
    } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
    }
});


//get all data
app.get("/allData", (req, res) => {
  Data.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(`Error:${err}`));
});

//get single data
app.get("/data/:id", (req, res) => {
  Data.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(`Error:${err}`));
});


app.listen(4000, () => {
  console.log("Server started on port 4000");
});
