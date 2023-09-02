const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            err && res.status(403).json("token is not valid!!");

            req.user = user;
            next();
        });
    } else {
        return res.status(401).json('you are not authenticated');
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("your does not have admin access");
        }
    })
    
} 


module.exports = { verifyToken , verifyTokenAndAuthorization};