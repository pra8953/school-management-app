const TeacherModel = require('./../models/TeacherModel');

// ✅ Add Teacher
async function addTeacher(data) {
    try {
        const newTeacher = new TeacherModel({ ...data });
        await newTeacher.save();
        return newTeacher.toObject();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// ✅ Get All Teachers
async function getTeachers() {
    try {
        const teachers = await TeacherModel.find();
        return teachers.map((teacher) => teacher.toObject());
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// ✅ Get Single Teacher
async function getTeacher(id) {
    try {
        const teacher = await TeacherModel.findById(id);
        if (!teacher) return null;
        return teacher.toObject();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// ✅ Update Teacher
async function updateTeacher(id, data) {
    try {
        const teacher = await TeacherModel.findByIdAndUpdate(id, data, { new: true });
        if (!teacher) return null;
        return teacher.toObject();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// ✅ Delete Teacher
async function deleteTeacher(id) {
    try {
        const teacher = await TeacherModel.findByIdAndDelete(id);
        if (!teacher) return null;
        return teacher.toObject();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    addTeacher,
    getTeachers,
    getTeacher,
    updateTeacher,
    deleteTeacher
};
