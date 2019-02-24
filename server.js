var express = require('express');
var app = express();
var cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/localdb');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/angular-admin-lte-demo')));
app.use('/', express.static(path.join(__dirname, 'dist/angular-admin-lte-demo')));
// app.use(express.static('public'));
// var restuarant = require('./models/restuarant');
console.log("server is runnin")
// specific html page load
//app.get('/', function(req, res){
//    console.log("hello");
//    res.sendfile('./public/sub.html');
//});

app.get('/', (req,res) => {
    res.send("Invalid page");
})

// rest api get
app.post('/save',function(req,res){
    console.log(req.body);
    restuarant.find({},function(err,data){
        var instance = new restuarant;
        instance.name=req.body.name;
        instance.area=req.body.area;
        instance.food=req.body.food;
        instance.save(function(err,savedata){
            if(err){
                console.log(err)
            }
            if(savedata){
                console.log("222",savedata);
                res.json(200,{status:true})
            }
        })

    })
})

// app.get('/getdata',function(req,res){
//     restuarant.find({},function(err,restinstance){
//         console.log("324234")
//         res.json(200,restinstance)
//     })
// })

// app.post('/getdatabyid',function(req,res){
//     restuarant.findOne({_id:req.body.Id},function(err,data){
//         if(data){
//             res.json(200,data);
//         }
//     })
// })

// app.post('/deletedata',function(req,res){
//     restuarant.findByIdAndRemove(req.body.Id,function(err,data){
//         res.json(200,{status:"successfully removed"})
//     })
// })

// app.post('/update',function(req,res){
//     console.log("222",req.body);
//     var id = req.body._id;
//     restuarant.findOne({_id:id},function(err,data){
//         if(err){
//             console.log(err);
//         }
//         if(data){
//             data.name=req.body.name;
//             data.area=req.body.area;
//             data.food=req.body.food;
//             data.save(function(err,savedata){
//                 console.log("44err",err)
//                 res.json(200,{status:"Updated sucessfully"})
//             })
//         }
//     })
// })

app.listen(3000,function(){
    console.log("app is listenging 3000 port")
});
