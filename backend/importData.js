// backend/importData.js
const mongoose = require('mongoose');
const DataModel = require('./models/DataModel'); // Correct path to model
const jsonData = require('./jsondata.json'); // Make sure your JSON is here
const connectDB = require('./config/db'); // Ensure correct DB connection

// Connect to MongoDB
connectDB();

const importData = async () => {
  try {
    // Clear any existing data from the collection
    await DataModel.deleteMany();

    // Insert your provided JSON data into the MongoDB collection
    await DataModel.insertMany(jsonData);
    console.log('Data successfully imported to MongoDB');
    
    process.exit(); // Exit the script
  } catch (error) {
    console.error('Error during data import', error);
    process.exit(1); // Exit with failure
  }
};

// Call the function to execute the import
importData();
