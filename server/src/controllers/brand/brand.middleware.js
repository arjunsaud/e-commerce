const TokenHelper=require("../../helper/TokenHelper")
const User =require("../../model/authModel")

const BrandMiddleware={
    verifyUser: async (req, res, next) => {
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
          return res.status(401).json({
            message: "Bearer token not provided",
          });
        }
    
        const [bearer, token] = bearerToken.split(" ");
        if (bearer !== "Bearer") {
          return res.status(401).json({
            message: "Bearer token not provided",
          });
        }
    
        try {
          const { id } = await TokenHelper.verifyToken(token);
          const user = await User.findOne({ _id: id }, "-password");
          req.user = user;
          next();
        } catch (err) {
          return res.status(401).json({
            message: err.message,
          });
        }
      },
}


module.exports=BrandMiddleware