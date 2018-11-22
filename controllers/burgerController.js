const express = require("express");
const router = express.Router();
const orm = require("../config/orm");

// style is for css and picks the css file name
router.get("/",  (req, res) => {
    orm.selectAllBy('is_favorite', false, (error, result) => {
        if (error) {
            return res.render('error');
        }
        res.render("index", { result: result, style: 'index', title: 'Burger App' });
    });
});

router.get('/favorites', (req, res) => {
    orm.selectAllBy('is_favorite', true, (error, result) => {
        if (error) {
            return res.render('error');
        }
        res.render("favorites", { result: result, style: 'favorite', title: 'My Favorite Burgers' });
    });
});

router.get('/all', (req, res) => {
    orm.selectAll( (error, result) => {
        if (error) {
            return res.render('error');
        }
        res.render("allBurgers", { result: result, style: 'all', title: 'View all burgers' });
    });
});



// Adding and Update burger section
router.post("/add", (req, res) => {
    const burgerName = req.body.burger_name;
    const isFavorite = req.body.isFavorite;

    orm.insertOne(burgerName, (error, burger) => {
        if (error) {
            return res.status(401).json({
                message: 'Not able to add the burger'
            });
        }

        return res.json({
            burger_name: burgerName,
            id: burger.insertId,
            is_favorite: 0
        });
    });
});


router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    orm.deleteOne(id, (err, result) => {
        if (err) {
            return res.status(501).json({
                message: 'Not able to delete burger'
            });
        }

        return res.json({
            id
        });
    });
});

// deletes burgers
router.put("/:id/:value", (req, res) => {
    const id = req.params.id;
    const value = JSON.parse(req.params.value);

    orm.updateOne(value, id, (error, burger) => {
        if (error) {
            return res.status(501).json({
                message: 'Not able to add burger to your favorite'
            });
        }
        return res.json({
            id: id
        });
    });
});




module.exports = router;