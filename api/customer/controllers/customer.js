const { sanitizeEntity } = require('strapi-utils');
const mail = require("../../../lib/sendMail");
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const data = ctx.request.body;
    const { email, name } = data;
    mail.sendMailRegisterCustomer(email, name);
    const entity = await strapi.services.customer.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.customer });
  }
};
