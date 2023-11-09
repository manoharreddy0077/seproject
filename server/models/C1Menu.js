const mongoose =require('mongoose')

const C1Menu=new mongoose.Schema({
    Item:String,
    Price:Number,
    Quantity:Number
})

const C1Menucoll =mongoose.model('C1Menucoll',C1Menu)

module.exports=C1Menucoll;