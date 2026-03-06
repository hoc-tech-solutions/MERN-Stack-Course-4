// Backed Project
// Node js 
// Express Js
// DB - MongoDb

// API List
// 1. API Create Item - get Data values from front end ( Items details ) and store into DB
// 2. API Update Item - get Item Details from Front end which item we need to update 
// 3. API Delete Item - get Item Details From Frot end an delete this record from database
// 4. API get ALl Records - get All recoreds from DB and show to UI Front end


console.log("Hello Node js Project Strted")

const express = require('express') // Node js Fremwork
const app = express() // app - variable - store express function
const mongoose = require('mongoose') // Library - connect mongodb Database
const cors = require('cors') // Library - solve cors error

app.use(express.json()) // convert all data into json format
app.use(cors())
// DB Connection

mongoose.connect("mongodb://127.0.0.1:27017/item-database").then(() => console.log("Mongo DB Connected")).catch((error) => console.log(error))

// Schema - Model - Data base table structure 
// values store database - structure
const itemsSchema = new mongoose.Schema({
    name: String,
    decription: String,
    sellingPrice: Number,
    purchasePrice: Number,
    quantity: Number,
    unit: String
})


const Items = new mongoose.model("Items", itemsSchema) // Table Name / Collection Name - Items

// API 1 - Create Item 
app.post("/api/create-item", async (req, res) => {

    try {

        const { name, decription, sellingPrice, purchasePrice, quantity, unit } = req.body


        const saveItem = new Items(
            {
                name,
                decription,
                sellingPrice,
                purchasePrice, 
                quantity, 
                unit
            }
        )

        await saveItem.save()

        res.status(201).json({ message: "Item Created", data: saveItem })


    } catch (error) {
        console.log(error)
    }
})


// API 2 - Update/Edit Item 
app.put("/api/update-item", (req, res) => {

    try {



    } catch (error) {
        console.log(error)
    }

})


// API 3 - Delete Item 
app.delete("/api/delete-item", (req, res) => {
    try {



    } catch (error) {
        console.log(error)
    }
})


// API 4 - GetAll Item 
app.get("/api/get-all-item", async (req, res) => {
    try {

        const items = await Items.find()

        res.status(200).json({ message: "Get All Item List", data: items })


    } catch (error) {
        console.log(error)
    }
})




// Helth API
app.get("/helth", (req, res) => {
    res.status(200).json({ message: "Server is Runing" })
})



// server Start
const PORT = 9090

app.listen(PORT, () => {
    console.log('Server Started')
})
