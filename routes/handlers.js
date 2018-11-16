const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    orm.selectAll((error, result) => {
        if (error) {
            return res.status(501),json({
                message: 'Not able to query the database'
            });
        }
        console.log('Burgers: ', burgers);
        res.render("index", { burgers });
    });
});


module.exports = router;