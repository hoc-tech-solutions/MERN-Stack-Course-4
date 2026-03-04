// Backed Project

// Node js 
// Express Js
// DB - MongoDb


// API List

// 1. API Create Item - get Data values from front end ( Items details ) and store into DB

// 2. API Update Item - get Item Details from Front end which item we need to update 

// 3. API Delete Item - get Item Details From Frot end an delete this record from database

// 4. API get ALl Records - get All recoreds from DB and show to UI Front end


// const getData = () => {

// }

// function getData(){
    
// }

console.log("Hello Node js Project Strted")

const express = require('express') // Node js Fremwork
const app = express() // app - variable - store express function
const mongoose = require('mongoose') // Library - connect mongodb Database


app.use(express.json()) // convert all data into json format

// DB Connection

mongoose.connect("mongodb://127.0.0.1:27017/item-database").then( () => console.log("Mongo DB Connected") ).catch( (error) => console.log(error) )

// Schema - Model - Data base table structure 
// values store database - structure


const itemsSchema = new mongoose.Schema({
    name: String,
    decription : String,
    sellingPrice : Number
})


const Items = new mongoose.model("Items", itemsSchema) // Table Name / Collection Name - Items

// API 1 - Create Item 