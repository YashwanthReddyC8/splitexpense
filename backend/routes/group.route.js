const express = require("express");
const router = express.Router();

const {
    getAllGroups,
    createGroup,
    addMember,
    getGroupInfo,
    joinGroup
} = require("../controllers/group.controller");
const txnRoutes = require("../controllers/txn.controller");

// Create a group
router.post('/create', createGroup)
// Get Group Details
router.get('/:groupId', getGroupInfo)
// Add a new member to the group
router.post('/:groupId/member', addMember)
// Join a Group
router.post('/:groupId/join', joinGroup)
// Get User Groups
router.get('/getall', getAllGroups)
// Group Transactions
// router.get('/txns', txnRoutes)


module.exports = router;
