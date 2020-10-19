const service = require('./team.service');

module.exports = {
  async find(req, res, next) {
    try {
      const teams = await service.find();
      return res.json(teams);
    } catch (error) {
      return next(error);
    }
  },
};
