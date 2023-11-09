const mongoose =require('mongoose')

const C3Menu=new mongoose.Schema({
    Item:String,
    Price:Number,
    Quantity:Number
})

const C3Menucoll =mongoose.model('C3Menucoll',C3Menu)

module.exports=C3Menucoll;