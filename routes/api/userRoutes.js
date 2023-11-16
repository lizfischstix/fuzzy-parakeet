const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUsers).post(newUser);

// /api/user/:UserId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

//api/user/:UserId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:studentId/:friendId').delete(deleteFriend);

module.exports = router;
