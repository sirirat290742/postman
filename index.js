const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors());

app.get('/get',(req,res)=>{
    res.status(200).json({
        message:'Hello'
    });
});

app.post('/send', (req,res)=> {
    let name = req.body.name;
    let age = req.body.age;
    res.status(201).json({
        name:name,
        age:age
    })
})

app.listen(3000, (err)=> err? console.log('Error @3000') : console.log('Success@3000'));