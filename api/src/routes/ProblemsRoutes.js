'use strict';

const {Router} = require('express');
const express = require('express');
const path = require('path');
const router = Router();


const ProblemController = require('../Controller/ProblemController')
const Problem = require('../models/problem')


router.get('/create/problem', (req, res) =>{
    const { name,problemInfo, date, solve  } = req.body;

  
    console.log(solve)
    try{

        Problem.create({name: name,solve: solve,date: date,problem: problemInfo, solution: 'none'});
  
        return res.redirect('/index/login');
    }catch(error){
        console.log("Erro no cadastro de User: ", error);
        
        res.status(500).json({ msg: 'error no servidor, tente mais tarde novamente!' });
    }




 
})



module.exports = router;
