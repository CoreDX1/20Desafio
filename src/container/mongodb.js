import {connect} from 'mongoose'

export const connectDB = async () => {
  try{
    await connect('mongodb://127.0.0.1:27017/products')
    console.log('connect to db')
  }catch(err){
    console.log(err)
  }
}

