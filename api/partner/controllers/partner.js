const { sanitizeEntity } = require("strapi-utils");
const { makePaginateSearch } = require("../../../lib/helper");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record
   *
   *
   *
   * @param {*} ctx
   * @return {Object}
   */
  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.services.partner.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.partner });
  },

  /**
   * Retrieve the record.
   *
   * @return {Object}
   */
  async find(ctx) {
    let entities;
    let { page, _limit, _q, _sort } = ctx.query;
    if (page) {
      const count = await strapi.services.partner.count();
      _limit = _limit || parseInt(process.env.LIMIT);
      page = page || 1;
      _q = _q || '';
      const _start = (page - 1) * _limit;
      const paginate = makePaginateSearch(count, _limit, page);
      const query = {
        _limit,
        _start,
        _q,
      }
      if (_sort) {
        query._sort = _sort;
      }
      entities = await strapi.services.partner.search(query);
      const data = entities.map((entity) =>
        sanitizeEntity(entity, { model: strapi.models.partner })
      );
      return {
        data,
        paginate,
      };
    } else {
      entities = await strapi.services.partner.find();
      return entities.map((entity) =>
        sanitizeEntity(entity, { model: strapi.models.partner })
      );
    }
  },
};
