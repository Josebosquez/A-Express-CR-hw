const express = require("express");
const router = express.Router();
const uuidv4 = require('uuid').v4

let todos = [
    {
    id: "haf24jd",
    todo: "do laundry",
    done: "false"
    },
    {
    id: "jp2nkl2",
    todo: "wash dishes",
    done: "true"
    }
];

router.get('/get-all-todos', function (req, res){
    res.json({payload: todos})
}),

router.get('/get-todo-by-id/:id', function (req,res){
    let gotTodo;
    let id = req.params.id;

    todos.forEach((item)=>{
        if (item.id === id){
            gotTodo = item;
        }
    })
    
    if (!gotTodo){
        res.status(404).json({ message: "The Todo ID you are looking for does not exists, please check ID" })
    } else {
        res.json({ payload: gotTodo })
    }
}),

router.get('/get-todos-by-done/:done', function (req,res){
    let gotTodoArr = [];
    let done = req.params.done;

    todos.forEach((item)=>{
        if (item.done === done){
            gotTodoArr.push(item);
        }
    })
    
    if (!gotTodoArr){
        res.status(404).json({ message: "Type true or false" })
    } else {
        res.json({ payload: gotTodoArr })
    }
}),

router.post('/create-new-todo', function (req,res){
    console.log('post')
    let foundTodo;
    
    let newTodo = {
        id: uuidv4 (),
        todo: req.body.todo,
        done: false,
    }
    
    todos.forEach((item) => {
        if (newTodo.todo === item.todo) {
            foundGame = true;
        } else if (newTodo.todo === "") {
            res.json({ message: "Cannot leave text area blank" })
        } else {
            if (newTodo.description === "") {
                res.json({ message: "Cannot leave text area blank" })
            }
        }
    })
    
    if (foundTodo) {
        res.status(404).json({ message: "Todo already exists" })
    } else {
        todos.push(newTodo),
        res.json({ todos })
    }
})

module.exports = router;