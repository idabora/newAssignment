const express = require('express');
const app = express();
require('./DB/connection')

app.use(express.json());
const PORT= process.env.PORT || 2020;

app.get("",async (req,res)=>{
    res.send("HYY")
});

app.use('/task',require('./routes/taskRoutes'))

app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
})