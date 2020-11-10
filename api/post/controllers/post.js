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
   * @param {*} ctx
   * @return {Object}
   */
  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.services.post.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.post });
  },

  /**
   * Retrieve the record.
   *
   * @return {Object}
   */
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      const count = await strapi.services.post.count();
      const limit = ctx.query._limit;
      const { page, ...query } = ctx.query;
      const start = (page - 1) * limit;
      query["_start"] = start;
      const paginate = makePaginateSearch(count, limit, page);
      const entities = await strapi.services.post.search(query);
      const data = entities.map((entity) =>
        sanitizeEntity(entity, { model: strapi.models.post })
      );
      return {
        data,
        paginate,
      }
      
    } else {
      entities = await strapi.services.post.find(ctx.query);
      return entities.map((entity) =>
        sanitizeEntity(entity, { model: strapi.models.post })
      );
    }
  },
};
