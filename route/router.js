const express = require("express");
const router = express.Router();

const Alien = require('./../model/alien');

router.get('/', async (req, res) => {
	try {
		const user = await Alien.find();
		res.json(user);
	} catch (err) {
		res.send("Error".err);
	}
})

router.post("/", async (req, res) => {
	const alien = new Alien({
		name: req.body.name,
		tech: req.body.tech,
		sub: req.body.sub,
		address: req.body.address,
	})
	try {
		const user = await alien.save()
		res.json(user)
	} catch (err) {
		res.send("Error".err);
	}
})

router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const updatedAlien = await alien.save();
        res.json(updatedAlien);
    } catch (err) {
        res.status(500).send("Error: " + err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
		alien.sub = req.body.sub;
		const removedAlien = await alien.deleteOne();
        res.json(removedAlien);
    } catch (err) {
        res.status(500).send("Error: " + err);
    }
});

router.put("/:id", async (req, res) => {
	try {
	  const alien = await Alien.findByIdAndUpdate(
		req.params.id,
		{
		  name: req.body.name,
		  tech: req.body.tech,
		  sub: req.body.sub,
		  address: req.body.address,
		},
		{ new: true }
	  );
	  res.json(alien);
	} catch (err) {
	  res.send("Error: " + err);
	}
  });
  
module.exports = router;