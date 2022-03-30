'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
     /**
      * Searches the catalogs for 
      * @params (brand, model)
      * @return {Array}
     */

     async search(ctx) {
          if (ctx.params.brand) {
               ctx.query.brand = ctx.params.brand
          }

          if (ctx.params.model) {
               ctx.query.model = ctx.params.model
          }

          let entities
          if (ctx.query._q) {
               entities = await strapi.services.catalogs.search(ctx.query);
          } else {
               entities = await strapi.services.catalogs.find(ctx.query);
          }

          return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.catalogs }));
     }
};
