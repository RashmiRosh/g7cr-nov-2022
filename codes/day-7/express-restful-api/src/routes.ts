import { Router } from "express";

const routerMiddleware = Router()

routerMiddleware.get(
    '/api/todos',
    (req, res) => {
        res.send('getting all todos')
    }
)
routerMiddleware.get(
    '/api/todos/:id',
    (req, res) => {
        res.send('getting todo with id: ' + req.params.id)
    }
)

routerMiddleware.post(
    '/api/todos',
    (req, res) => {
        const data = req.body
        console.log(data)
        res.send('got data from POST')
    }
)

routerMiddleware.put(
    '/api/todos/:id',
    function (req, res, next) {
        console.log(req.url)
        next()
        // console.log('done')
        res.send('got data from PUT for todo: ' + req.params.id)
    },
    (req, res) => {
        const data = req.body
        console.log(data)
        res.setHeader('My-Header', 'hello')
        // res.send('got data from PUT for todo: ' + req.params.id)       
    }
)

routerMiddleware.delete(
    '/api/todos/:id',
    (req, res) => {
        res.send('deleting todo with id: ' + req.params.id)
    }
)

export default routerMiddleware