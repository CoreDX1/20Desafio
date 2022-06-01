import {Schema, model} from 'mongoose'

const schema =  new Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    require: true
  }
})

export default model('Products', schema)
