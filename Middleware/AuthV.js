const jwt = require("jsonwebtoken")

exports.adminAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if(token) {
        jwt.verify(token, process.env.STRING, (err, decodedToken) => {
            if(err) {
                return res.status(401).json({
                    message: "Not authorized!"
                })
            } else {
                if(decodedToken.role !== "admin") {
                    return res.status(401).json({
                        message: "Not authorized!"
                    })
                } else {
                    next()
                }
            }
        })
    } else {
        return res.status(401).json({
            message: "Token not available!"
        })
    }
}

exports.userAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if(token) {
        jwt.verify(token, process.env.STRING, (err, decodedToken) => {
            if(err) {
                return res.status(401).json({
                    message: "Not authorized!"
                })
            } else {
                if(decodedToken.role !== "Basic") {
                    return res.status(401).json({
                        message: "Not authorized!"
                    })
                } else {
                    next()
                }
            }
        })
    } else {
        return res.status(401).json({
            message: "Token not available!"
        })
    }
}