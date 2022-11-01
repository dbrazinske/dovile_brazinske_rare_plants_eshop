const { Router } = require('express');
const categoriesRouter = require('./categories-router');
const rarePlantsRouter = require('./rare-plants-router');
const usersRouter = require('./users-router');
const cartItemsRouter = require('./cart-items-router');

const apiRouter = Router();

apiRouter.use('/rarePlants', rarePlantsRouter);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/cart-items', cartItemsRouter);

module.exports = apiRouter;
