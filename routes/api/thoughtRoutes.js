const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getCourses).post(createCourse);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
