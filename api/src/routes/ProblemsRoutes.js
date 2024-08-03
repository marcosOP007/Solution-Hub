'use strict';

const {Router} = require('express');
const express = require('express');
const path = require('path');
const router = Router();


const ProblemController = require('../controller/ProblemController')
const Problem = require('../models/problem')



router.post('/problem/create', (req, res) => {
    const { name,problem, solution,tags, date  } = req.body;
    
    try{

        Problem.create({name: name,date: date,problem: problem, solution: solution, token:"arrom"});
  
        return res.status(200).json('Problem Add sucess');
    }catch(error){
        console.log("Erro no cadastro de User: ", error);
        
        res.status(500).json({ msg: 'error no servidor, tente mais tarde novamente!' });
    }
})

router.get('/problem/:id', async (req, res) => {

    try {
        const problemId = req.params.id;
        const problem = await ProblemController.getProblemById(problemId);

        if(!problem)
            res.status(300).json({ message: 'No exist problem.' });
        else
            res.status(200).json(problem);

    } catch (error) {
        console.error('Error get problem', error.message);
        res.status(500).json({ error: 'Error in Server.' });
    }


})


module.exports = router;
