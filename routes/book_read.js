var express = require('express');
var router = express.Router();

const db = require('../db');


router.get('/:book_id', function(req, res, next) {
    const queryStatement = `SELECT * FROM books WHERE idbooks = ${req.params.book_id}; `;

    if(req.user){
        db.query(queryStatement, (error, result) => { 
            res.render('book_read',{ book: result[0]});
        })
        
    } else {
        res.render('policy');
    }

});

module.exports = router;
