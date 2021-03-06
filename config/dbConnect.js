const mongoose = require("mongoose");

module.exports = dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connected error: ${error.message}`);
    process.exit(1);
  }
};
