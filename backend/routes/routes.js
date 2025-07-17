const router = require('express').Router();
const contactRoute = require('./contactRoutes');
const eventRoute = require('./eventRoutes');
const gallaryRoute = require('./gallaryRoutes');
const teacherRoute = require('./teacherRoutes');
const noticeRoute = require('./noticeRoutes');
const authRoute = require('./authRoute')


router.use('/api',authRoute);
router.use('/api/contact',contactRoute);
router.use('/api/event',eventRoute);
router.use('/api/gallary',gallaryRoute);
router.use('/api/teacher',teacherRoute);
router.use('/api/notice',noticeRoute);


module.exports = router;