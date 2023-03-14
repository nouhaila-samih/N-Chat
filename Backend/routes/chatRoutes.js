const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroup, addToGroup, renameGroup, removeFromGroup } = require("../controllers/chatControllers");

const router = express.Router();

router.route('/').post(protect, accessChat);
router.route('/').get(protect, fetchChats);
router.route('/group').post(protect, createGroup);
router.route('/groupadd').put(protect, addToGroup);
router.route('/rename').put(protect, renameGroup);
router.route('/groupremove').put(protect, removeFromGroup);

module.exports = router;