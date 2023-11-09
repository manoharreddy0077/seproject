const express =require('express')
const router=express.Router();
const C1Menu=require('../models/C1Menu');
const C2Menu=require('../models/C2Menu');
const C3Menu=require('../models/C3Menu');

router.post('/menu',async(req,res)=>{
    const {canteen_name}=req.body;
    console.log(canteen_name);

    try{
        let collection;
        switch(canteen_name){
            case 'C1':
                collection=C1Menu;
                break;
            case 'C2':
                collection=C2Menu;
                break;
            case 'C3':
                collection=C3Menu;
                break;
            default:
                return res.status(400).json({error:'Invalid canteen_name'})
        }

        //fetching and displaying
        const documents=await collection.find();
        res.status(200).json(documents);
        
    }catch(error){
        console.log(error);
        res.status(500).json({error:'An error occured while retriving'})
    }

    
});

module.exports=router