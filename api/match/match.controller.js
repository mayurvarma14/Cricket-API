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
  async wonOrLost(req, res, next) {
    try {
      const { id } = req.params;
      const matches = await service.wonOrLost(id);
      return res.json(matches);
    } catch (error) {
      return next(error);
    }
  },
};
