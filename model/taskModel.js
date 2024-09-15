const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title:{
            required:[true,'Task Titile is required'],
            type:String,
            trim:true
        },
        description:{
            type:String,
            trim:true,
            default:""
        },
        taskComplete:{
            type:Boolean,
            default:false
        },
        dueDate:{
            type:Date,
            set: function (value){
                let date = new Date;
                date.setDate(new Date().getDate() + value);
                console.log(date);
                return date;
            }
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category'
        }
    }
);

const Task = new mongoose.model('Task',taskSchema);

module.exports = Task;