const mongoose =require('mongoose')

const C2Menu=new mongoose.Schema({
    Item:String,
    Price:Number,
    Quantity:Number
})

const C2Menucoll =mongoose.model('C2Menucoll',C2Menu)

module.exports=C2Menucoll;