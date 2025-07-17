const router = require('express').Router();
const { addNotice, getNotices, getNotice, updateNotice, deleteNotice } = require('./../controllers/noticeController');
const verifyToken = require('./../middlewares/verifyToken')
// ✅ Create Notice
router.post('/',verifyToken, async (req, res) => {
    try {
        const notice = await addNotice(req.body);
        res.status(201).json({
            success: true,
            message: "Notice created successfully",
            notice
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ✅ Get All Notices
router.get('/', async (req, res) => {
    try {
        const notices = await getNotices();
        res.status(200).json({
            success: true,
            notices
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ✅ Get Single Notice by ID
router.get('/:id', async (req, res) => {
    try {
        const notice = await getNotice(req.params.id);
        if (!notice) return res.status(404).json({ success: false, message: "Notice not found" });
        res.status(200).json({
            success: true,
            notice
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ✅ Update Notice
router.put('/:id',verifyToken, async (req, res) => {
    try {
        const notice = await updateNotice(req.params.id, req.body);
        if (!notice) return res.status(404).json({ success: false, message: "Notice not found" });
        res.status(200).json({
            success: true,
            message: "Notice updated successfully",
            notice
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ✅ Delete Notice
router.delete('/:id',verifyToken, async (req, res) => {
    try {
        const notice = await deleteNotice(req.params.id);
        if (!notice) return res.status(404).json({ success: false, message: "Notice not found" });
        res.status(200).json({
            success: true,
            message: "Notice deleted successfully",
            notice
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
