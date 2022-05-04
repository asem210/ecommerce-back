const router = require('express').Router();
const categoryRouter = require('./category');
const navBarRouter = require('./navBar');
const productRouter = require('./product');
const authRouter = require('./auth');

router.use('/auth', authRouter);
router.use('/nav', navBarRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);

module.exports = router;
