const router = require('express').Router();
const { addTeacher, getTeachers, getTeacher, updateTeacher, deleteTeacher } = require('./../controllers/TeacherController');

// ✅ Create Teacher
router.post('/', async (req, res) => {
    try {
        const teacher = await addTeacher(req.body);
        res.status(201).json({
            success: true,
            message: "Teacher created successfully",
            teacher
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ✅ Get All Teachers
router.get('/', async (req, res) => {
    try {
        const teachers = await getTeachers();
        res.status(200).json({
            success: true,
            teachers
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ✅ Get Single Teacher by ID
router.get('/:id', async (req, res) => {
    try {
        const teacher = await getTeacher(req.params.id);
        if (!teacher) return res.status(404).json({ success: false, message: "Teacher not found" });
        res.status(200).json({
            success: true,
            teacher
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ✅ Update Teacher
router.put('/:id', async (req, res) => {
    try {
        const teacher = await updateTeacher(req.params.id, req.body);
        if (!teacher) return res.status(404).json({ success: false, message: "Teacher not found" });
        res.status(200).json({
            success: true,
            message: "Teacher updated successfully",
            teacher
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ✅ Delete Teacher
router.delete('/:id', async (req, res) => {
    try {
        const teacher = await deleteTeacher(req.params.id);
        if (!teacher) return res.status(404).json({ success: false, message: "Teacher not found" });
        res.status(200).json({
            success: true,
            message: "Teacher deleted successfully",
            teacher
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
