const noticeModel = require('./../models/NoticeModel');


async function addNotice(data) {
    try {
        const newNotice = new noticeModel({ ...data });
        await newNotice.save();
        return newNotice.toObject();
    } catch (err) {
        console.error(err);
        throw err;
    }
}


async function getNotices() {
    try {
        const notices = await noticeModel.find();
        return notices.map((notice) => notice.toObject());
    } catch (err) {
        console.error(err);
        throw err;
    }
}


async function getNotice(id) {
    try {
        const notice = await noticeModel.findById(id);
        if (!notice) return null;
        return notice.toObject();
    } catch (err) {
        console.error(err);
        throw err;
    }
}


async function updateNotice(id, data) {
    try {
        const notice = await noticeModel.findByIdAndUpdate(id, data, { new: true });
        if (!notice) return null;
        return notice.toObject();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function deleteNotice(id) {
    try {
        const notice = await noticeModel.findByIdAndDelete(id);
        if (!notice) return null;
        return notice.toObject();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    addNotice,
    getNotices,
    getNotice,
    updateNotice,
    deleteNotice
};

