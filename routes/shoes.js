const express = require(`express`);

const router = express.Router();

router.get(`/`, (req, res) => {
    res.json({mssg: `GET all shoes.`});
})

router.get(`/:id`, (req, res) => {
    res.json({mssg: `GET a single shoe.`});
})

router.post(`/`, (req, res) => {
    res.json({mssg: `POST a shoe.`});
})

router.delete(`/:id`, (req, res) => {
    res.json({mssg: `DELETE a shoe.`});
})

router.patch(`/:id`, (req, res) => {
    res.json({mssg: `UPDATE a shoe.`});
})

module.exports = router