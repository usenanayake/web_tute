const express = require ('express');
var router= express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Lab} = require('../models/lab');

// =>localhost:3000/employees
router.get('/',(req,res) => {
    Lab.find((err,docs) => {
        if(!err) {res.send(docs);}
        else {console.log('error in retrieving lab :' + JSON.stringify(err,undefined,2)); }

        });
    });

    router.get('/:id',(req,res)=>{
         if(!ObjectId.isValid(req.params.id))
             return res.status(400).send('No record with given id : ${req.params.id}');

             Lab.findById(req.params.id,(err,doc) =>{
                if(!err){res.send(doc);}
                else{console.log('error in retriving lab:'+JSON.stringify(err,undefined,2));}
            });
    });



    router.post('/',(req,res) =>{
        console.log(req.body);
        var la = new Lab ({
            name: req.body.name,
            lab: req.body.lab,
            date: req.body.date,
            time: req.body.time,
        });
        la.save((err,doc) => {
            if(!err) {res.send(doc);}
            else{console.log('error in saving lab'+ JSON.stringify(err,undefined,2));}
        });
    });

    router.put('/:id', (req, res)=>{
        if(!ObjectId.isValid(req.params.id))
            return res.status(400).send('No record with given id : ${req.params.id}');
            var la = {
                name: req.body.name,
                lab: req.body.lab,
                date: req.body.date,
                time: req.body.time,
            };

            Lab.findByIdAndUpdate(req.params.id,{$set:la},{new:true},(err,doc) =>{
                if(!err){res.send(doc);}
                else{console.log('error in updating lab:'+JSON.stringify(err,undefined,2));}
            });

        });

        router.delete('/:id',(req,res)=>{
            if(!ObjectId.isValid(req.params.id))
                return res.status(400).send('No record with given id : ${req.params.id}');
   
                Lab.findByIdAndRemove(req.params.id,(err,doc) =>{
                   if(!err){res.send(doc);}
                   else{console.log('error in deleting lab:'+JSON.stringify(err,undefined,2));}
               });
       });


       router.get('/search/:lab',(req,res)=>{
        console.log(req.params.lab);
        // if(!ObjectId.isValid(req.params.lab))
        // return res.status(400).send('No record with given lab : ${req.params.lab}');

        Lab.find({lab:req.params.lab},(err,doc) =>{
            console.log(doc);
           if(!err){res.send(doc);}
           else{console.log('error in retriving lab:'+JSON.stringify(err,undefined,2));}
       });

        });

module.exports = router;
