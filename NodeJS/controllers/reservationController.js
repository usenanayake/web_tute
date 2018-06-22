const express = require ('express');
var router= express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Reservation} = require('../models/reservation');

// =>localhost:3000/employees
router.get('/',(req,res) => {
    Reservation.find((err,docs) => {
        if(!err) {res.send(docs);}
        else {console.log('error in retrieving Reservation :' + JSON.stringify(err,undefined,2)); }

        });
    });

    router.get('/:id',(req,res)=>{
         if(!ObjectId.isValid(req.params.id))
             return res.status(400).send('No record with given id : ${req.params.id}');

             Reservation.findById(req.params.id,(err,doc) =>{
                if(!err){res.send(doc);}
                else{console.log('error in retriving Reservation:'+JSON.stringify(err,undefined,2));}
            });
    });



    router.post('/',(req,res) =>{
        console.log(req.body);
        var resv = new Reservation ({
            name: req.body.name,
            date: req.body.date,
            lab: req.body.lab,
            time: req.body.time,
            duration: req.body.duration,
            contact: req.body.contact,

        });
        resv.save((err,doc) => {
            if(!err) {res.send(doc);}
            else{console.log('error in saving Reservation'+ JSON.stringify(err,undefined,2));}
        });
    });

    router.put('/:id', (req, res)=>{
        if(!ObjectId.isValid(req.params.id))
            return res.status(400).send('No record with given id : ${req.params.id}');
            var resv = {
                name: req.body.name,
                date: req.body.date,
                lab: req.body.lab,
                time: req.body.time,
                duration: req.body.duration,
                contact: req.body.contact,
    
            };

            Reservation.findByIdAndUpdate(req.params.id,{$set:resv},{new:true},(err,doc) =>{
                if(!err){res.send(doc);}
                else{console.log('error in updating Reservation:'+JSON.stringify(err,undefined,2));}
            });

        });

        router.delete('/:id',(req,res)=>{
            if(!ObjectId.isValid(req.params.id))
                return res.status(400).send('No record with given id : ${req.params.id}');
   
                Reservation.findByIdAndRemove(req.params.id,(err,doc) =>{
                   if(!err){res.send(doc);}
                   else{console.log('error in deleting Reservation:'+JSON.stringify(err,undefined,2));}
               });
       });

module.exports = router;
