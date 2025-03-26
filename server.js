const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

// Database connection string
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true, // Add this for Mongoose 6+ compatibility
    });
    console.log('DB connection successful!');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1); // Exit the process if the database connection fails
  }
};

// Start the server
const startServer = async () => {
  try {
    await connectDB(); // Connect to the database first

    app.listen(process.env.PORT, () => {
      console.log(`Server listening on http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.error('Server startup error:', err);
    process.exit(1); // Exit the process if the server fails to start
  }
};

// Start the application
startServer();
