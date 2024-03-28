require('dotenv').config();
const mongoose = require('mongoose');

// db connection
mongoose.connect('mongodb+srv://admin1:admin123@cluster0.il5wcvl.mongodb.net/business-card').then(()=>{
    console.log('DB Connnected');
}).catch((error)=>{
    console.log('DB not Connected: ERROR: '+error)
})

const CardSchema = new mongoose.Schema({
    fullname: String,
        description: String,
        Interests: [{
            id: String,
            name: String
        }],
        SocialmediaHandles: [{
            id: String,
            handles: String
        }],
}, {timestamps: true});

const CardModel = mongoose.model('Cards', CardSchema);

module.exports = {CardModel};