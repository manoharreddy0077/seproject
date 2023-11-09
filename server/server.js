// const express = require('express');
// const app=express();
// //importing database connection code
const db=require('../server/models/db');
// //import user model
// const User=require('./models/UserModel');

// //routes here 

// app.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// });

// server.js
const express = require('express');
const cors=require('cors');
const app = express();
const port = 3001;
app.use(express.json())
app.use(cors());

const User = require('./models/UserModel'); // Update the import path

// Load auth router
const authRouter = require('./routes/auth');
const menuRouter=require('./routes/menu');

app.use('/api',menuRouter)
app.use('/api', authRouter);



// Start server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

