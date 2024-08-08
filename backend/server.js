let exp = require('express')
const app = exp()
const cors = require('cors')
app.use(cors({
    origin : 'http://localhost:5173'
}))
require('dotenv').config() 
//import MongoClient
const {MongoClient} = require('mongodb');
//create MongoClient Object
let mClient = new MongoClient(process.env.DB_URL)
//connect to mongodb server
mClient.connect(). 
then((connectionObj)=>{
    console.log("db connection success")

    //connect to database(
    const dbobj = connectionObj.db('products');
    //connect to a collection
    const homeAppsCollection = dbobj.collection('home-appliances')
    const clothingCollection = dbobj.collection('clothing-accessories')
    const groceryCollection = dbobj.collection('grocery')

    //share collection obj to APIs
    app.set('homeAppsCollection', homeAppsCollection);
    app.set('clothingCollection', clothingCollection);
    app.set('groceryCollection', groceryCollection);


 //assign port number to http server of express app
 app.listen(process.env.PORT, ()=>console.log("http server started on port 4000"))
}).
catch(err=>console.log("error in db connection", err))


const homeApp =  require('./APIs/homeApp')
app.use('/products/home-appliances', homeApp)

const clothing =  require('./APIs/clothing')
app.use('/products/clothing-accessories', clothing)

const grocery =  require('./APIs/grocery')
app.use('/products/grocery', grocery)

app.use('*', (req,res,next)=>{
    res.send({message : `Invalid Path`})
})

//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message : "error occured", errorMessage :err.message})
})

