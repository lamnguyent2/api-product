const productsRouter = require('./Products')
function route(app) {
    app.use('/', productsRouter);
}

module.exports = route;