const express = require('express');
const router  = exoress.Router();

// get all orders

router.get('/', (req , res) => {
    return res.json('review');
})

router.post('/' , (req , res) =>{
    return res.json({message: 'created successfully'})
})

router.put('/:id', (req , res) =>{
    return res.json({message: 'Update Successfully'})
})

router.delete('/:id', (req , res) =>{
    return res.json({message: 'Delete Successfully'})
}) 

module.exports = router;