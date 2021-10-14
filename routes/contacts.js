const express = require('express');
const router = express.Router();

//@route    GET /api/contacts
//@desc     Get all users contacts
//@access   Private

router.get('/', (req, res) => res.json({ msg: 'Get all contacts' }));

//@route    POST /api/contacts
//@desc     Add new contact
//@access   Private

router.post('/', (req, res) => res.json({ msg: 'Add contact' }));

//@route    POST /api/contacts/:id
//@desc     Update contact
//@access   Private

router.put('/:id', (req, res) => res.json({ msg: 'Update contact' }));

//@route    POST /api/contacts/:id
//@desc     Delete contact
//@access   Private

router.delete('/', (req, res) => res.json({ msg: 'Delete contact' }));

module.exports = router;
