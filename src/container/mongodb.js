import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('connect to db');
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
