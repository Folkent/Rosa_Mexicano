const express = require('express');
const router  = exoress.Router();


router.use('/products', require('/products'));
router.use ('/orders', require('/orders'));
router.use('/users', require('/user'));
router.use ('/reviews', require('/reviews'));

module.exports = router;