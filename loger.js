const momemnt = require("moment")


const logger = (req,res,next)=>{
    console.log (`${req.protocol}://${req.get("host")}${req.originalUrl}:${momemnt().format()}`)
    next()
}

module.exports = logger