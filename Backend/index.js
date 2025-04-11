const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv")
dotenv.config();
const userModel = require('./models/Pharmacy'); 
const MedicineModel = require('./models/Medicines'); 

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/pharmacy")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));



app.post('/login', (req, res) => {
  const {email,pass} = req.body;
  userModel.findOne({email: email})
  .then(user => {
    if(user)
    {
      if(user.pass === pass)
      {
        res.json("Success")
      }
      else
      {
        res.json("Incorrect password")
      }
    }
    else
    {
      res.json("No record existed")
    }
  })
})

app.post('/register', (req, res) => {
  userModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
});

app.get('/getByCategory/:category', async (req, res) => {
  const category = req.params.category;
  try 
  {
    const data = await MedicineModel.find({ category: category }); 
    if (data.length === 0) return res.status(404).json({ message: "No data found" });
    res.json(data);
  } 
  catch (error) 
  {
    res.status(500).json({ message: "Server error" });
  }
});

app.get('/search', async (req, res) => {
  const query = req.query.q;

  try {
    const result = await MedicineModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
        { price: isNaN(query) ? -1 : Number(query) },
        { 'pharmacy.name': { $regex: query, $options: 'i' } },
        { 'pharmacy.address': { $regex: query, $options: 'i' } }
      ]
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 9000, (err)=>{
  if(err)console.log(err);
  console.log("running successfully at ",process.env.PORT);
});