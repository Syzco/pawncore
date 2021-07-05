'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
     /**
      * Searches the brands for 
      * @params (name)
      * @return {Array}
     */

      async search(ctx) {
          if (ctx.params.name) {
               ctx.query.name = ctx.params.name
          }

          let entities
          if (ctx.query._q) {
               entities = await strapi.services.brands.search(ctx.query);
          } else {
               entities = await strapi.services.brands.find(ctx.query);
          }

          return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.brands }));
     }
};
