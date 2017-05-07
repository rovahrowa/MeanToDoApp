/**
 * Created by danstan on 5/7/17.
 */
var Todos = require ('../models/todoModel');
var bodyParser = require('body-parser');

module.exports =  function (app) {


    //pasrse json before handling the request
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    //API Locations
    app.get('/', function (req,res) {

        res.render('../views/apiDoc.ejs')

    })

    app.get('/api', function (req, res) {
        res.json({

            APIName:"DanstanDToDoApp",
            getTodosByUser:"/api/getbyUser/:username",
            getTodosByID:"/api/getbyID/:id",
            createTodos:"/api/createTodo/",
            updateTodo:"/api/updateTodo",
            deleteTodo:"/api/deleteTodo/:id"

        })

    })

    //Get todos for a user
    app.get('/api/getbyUser/:username', function (req, res) {

        Todos.find({username: req.params.username}, function (err, todos) {

            if(err) throw err;
            res.send(todos);
        });
    });
    //get a particularTodo
    app.get('/api/getbyID/:id', function (req, res) {

        Todos.findById({_id: req.params.id}, function (err, todo) {

            if (err) throw err;
            res.send(todo)


        })
    })

    app.put('/api/updateTodo', function (req, res) {

            Todos.findByIdAndUpdate(req.body.id, {
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            }, function (err,todo) {

                if (err) throw err;
                res.send('Updated');
            })

        });



    app.post('/api/createTodo', function (req, res) {

        if (req.params.id) {

            Todos.findByIdAndUpdate(req.body.id, {
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            }, function (err,todo) {

                if (err) throw err;
                res.send('Updated');
            })

        }
        else {

            var newTodo = Todos({
                username:req.body.username,
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            })

            newTodo.save(function (err) {
                if(err) throw err;
                res.send('Created')
            });
        }
    })

    app.delete('/api/deleteTodo/:id', function (req, res) {

        Todos.findByIdAndRemove(req.params.id, function (err) {
            if (err) throw err;
            res.send('deleted')

        })
    })

}