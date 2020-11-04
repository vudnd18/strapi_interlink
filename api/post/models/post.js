'use strict';
const helper = require('../../../lib/helper');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  /**
   * Triggered before user creation.
   */
  
  lifecycles: {
    beforeCreate: async (model) => {
      console.log(model);
      if (model.name) {
        model.slug = helper.convertSlug(model.name);
      }
    },
    beforeUpdate: async (params, model) => {
      if (model.name) {
        model.slug = helper.convertSlug(model.name);
      }
    },
  },
};
