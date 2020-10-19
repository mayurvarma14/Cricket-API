const service = require('./match.service');

module.exports = {
  async find(req, res, next) {
    try {
      const matches = await service.find();
      return res.json(matches);
    } catch (error) {
      return next(error);
    }
  },
};
