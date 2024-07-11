'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let [fotos, fotos_metadata] = await queryInterface.sequelize.query('SELECT id FROM fotos');
    let [etiquetas, etiquetas_metadata] = await queryInterface.sequelize.query('SELECT id FROM etiquetas');

    // Insertar datos en la tabla fotoetiquetas
    await queryInterface.bulkInsert('fotoetiquetas', [
      //Al elemento 0 de fotos le asignamos las etiquetas 0 y 1, es decir, dos etiquetas
      { foto_id: fotos[0].id, etiqueta_id: etiquetas[0].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[0].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() },
      { foto_id: fotos[1].id, etiqueta_id: etiquetas[1].id, createdAt: new Date(), updatedAt: new Date() }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('fotoetiquetas', null, {});
  }
};
