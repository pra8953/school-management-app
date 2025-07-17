const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // First priority: Body se token lo
    const token = req.body.token;

    if (!token) {
        return res.status(403).json({ success: false, message: "Token required in body" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

module.exports = verifyToken;
