const TokenHelper = require("../../helper/TokenHelper");
const AuthHelper=require("./auth.helper")

class AuthService {
  User;
  constructor(User) {
    this.User = User;
  }

  async attemptLogin(email, password) {
    try {
      const user = await this.User.findOne({ email });

      if (!user) throw new Error("Authentication failed");

      const isValidPassword = await AuthHelper.compareHash(password, user.password);

      if (!isValidPassword) throw new Error("Authentication failed");

      const token = await TokenHelper.generateToken({ id: user._id });
      const refreshToken = await TokenHelper.generateRefreshToken({
        id: user._id,
        type: "refresh",
      });
      const loggedInUser = JSON.parse(JSON.stringify(user));

      delete loggedInUser.password;

      return { loggedInUser, token, refreshToken };
    } catch (err) {
      throw err;
    }
  }

  async registerUser(email, password) {
    try {
      const user = await this.User.findOne({ email });
      if (user) throw new Error("user already exists");
      const hashedPassword = await AuthHelper.hashPassword(password);
      const newUser = await new this.User({
        email,
        password: hashedPassword,
      }).save();
      const registeredUser = JSON.parse(JSON.stringify(newUser));
      delete registeredUser.password;
      return registeredUser;
    } catch (err) {
      throw err;
    }
  }
  
}

module.exports = AuthService;
