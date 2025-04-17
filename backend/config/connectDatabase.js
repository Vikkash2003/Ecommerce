const mongoose = require("mongoose");

const connDB = () => {
    mongoose.connect(process.env.DB_URI)
    .then((con) => {
        console.log(`MongoDB connected with host: ${con.connection.host}`);
    })
    .catch((err) => {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Exit the process if the database connection fails
    });
};

module.exports = connDB;
