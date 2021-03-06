require('express-async-errors');
const express       = require('express');
const morgan        = require('morgan');
const helmet        = require('helmet');
const bodyParser    = require('body-parser');
const swaggerUi     = require('swagger-ui-express');
const cors          = require ('cors');

// mongodb
const { mongoDbConnect } = require('./database-connections/db.mongo');

// swagger
const swaggerDocument    = require('./swagger.json');

// routers file
const routerHealth  = require('./modules/health/health.route');
const routerStudent = require('./modules/student/student.route');
const routerImages = require('./modules/images/images.route');

// middle-wares
const ConfigLoaderMiddleware = require('./middlewares/config-loader');
const RouteNotFoundMiddleware = require('./middlewares/not-found');
const ExceptionHandlerMiddleware = require('./middlewares/exception-handler');

// rabbitmq if required producer & listener
// const { initiateRabbitMQ } = require('./queues/connection/rabbitmq');


const app = express();

// Connect to multiple DB's
if (process.env.NODE_ENV !== 'test') {

    // setup connections
    //mongoDbConnect('DCS');

    // queue listener
    // initiateRabbitMQ();
}

app
  .disable('x-powered-by')
  .use(cors({origin: ['https://api.jonathanczyzyk.com', 'http://localhost:3000']}))
  .use(express.static('public'))
  .use(helmet()) // helmet for security purpose
  .use(morgan('tiny')) // for logging
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json({ limit: '5mb' }))
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) // swagger ui
  .use('/', routerHealth)
  .use('/', ConfigLoaderMiddleware, routerStudent)
  .use('/', ConfigLoaderMiddleware, routerImages)
  .use(RouteNotFoundMiddleware) // RouteNotFound middle-wares must
  .use(ExceptionHandlerMiddleware); // ExceptionHandler will be the last one to be registered

module.exports = app;