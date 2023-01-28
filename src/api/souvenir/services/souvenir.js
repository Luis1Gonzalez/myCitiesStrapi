'use strict';

/**
 * souvenir service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::souvenir.souvenir');
