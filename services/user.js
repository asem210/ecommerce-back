const { client } = require('../db');
const ServiceResponse = require('../entities/ServiceResponse');

const userService = {
  save: async (name, email, password, profileId) => {
    let serviceResponse = new ServiceResponse();
    try {
      const { rows } = await client.query(
        'INSERT INTO "user"(name, email, password, id_profile) VALUES($1, $2, $3, $4) RETURNING *',
        [name, email, password, profileId]
      );
      serviceResponse.setSucessResponse('User saved', rows[0]);
    } catch (error) {
      serviceResponse.setErrorResponse(error.message);
    } finally {
      return serviceResponse;
    }
  },
};

module.exports = userService;
