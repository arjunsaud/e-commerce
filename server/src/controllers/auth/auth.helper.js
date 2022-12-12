const bcrypt = require("bcryptjs");
const {SALT_ROUNDS} =require( "../../config/variables")
const salt=parseInt(SALT_ROUNDS)
const AuthHelper = {
  compareHash: async (plainString, hash) => {
    const isValidHash = await bcrypt.compare(plainString, hash);
    return isValidHash;
  },

  hashPassword: async (plainPassword) => {
    const hash = await bcrypt.hash(plainPassword, salt);
    return hash
  },
};

module.exports = AuthHelper;
