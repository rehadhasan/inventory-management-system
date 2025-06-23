const app = require('./app')
require('dotenv').config()

let port = process.env.PORT || 4050;

app.listen(port,()=>{
    if(process.env.NODE_ENV === 'production') {
        console.log(`Server running on production port ${port}`);
    }else{
        console.log(`Server running on development port ${port}`);
    }
})