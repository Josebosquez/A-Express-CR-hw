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
    ]

router.get('/get-all-todos', function (res,req){
    console.log('it works')

})

router.get('/get-todo-by-id', function (res,req){
    console.log('this also works')
})

router.get('/get-todos-by-done', function (res,req){
    console.log(' also works')
})

router.post('/create-new-todo', function (res,req){
    console.log('post')
})
module.exports = router;