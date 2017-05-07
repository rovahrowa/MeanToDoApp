/**
 * Created by danstan on 5/7/17.
 */
var Todos = require ('../models/todoModel');

module.exports= function (app) {

    app.get('/api/initialData', function (req, res) {

            var starterTodos = [

                {
                    Username: "mack",
                    Todo: "Buy Milk for Mom",
                    isDone: true,
                    hasAttachment: false
                },
                {
                    Username: "shem",
                    Todo: "Buy Milk for Mom",
                    isDone: true,
                    hasAttachment: false
                },
                {
                    Username: "danstan",
                    Todo: "Buy Milk for Mom",
                    isDone: true,
                    hasAttachment: false
                },
                {
                    Username: "fred",
                    Todo: "Buy Milk for Mom",
                    isDone: true,
                    hasAttachment: false
                }
            ];

            Todos.create(starterTodos, function (err, results) {

                res.send(results);
            })
    })

}