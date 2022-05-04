const userService = require('../services/user');
const { hashPassword } = require('../utils/encryption');

const authController = {
  register: async (name, email, password, profileId) => {
    const hashedPassword = await hashPassword(password);
    const result = await userService.save(
      name,
      email,
      hashedPassword,
      profileId
    );
    return result;
  },
};

module.exports = authController;
