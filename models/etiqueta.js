'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class etiqueta extends Model {
    static associate(models) {
      models.etiqueta.belongsToMany(models.foto, { through: 'fotoetiquetas', foreignKey: "etiqueta_id"})
    }
  }
  etiqueta.init({
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'etiqueta',
    tableName: 'etiquetas',
  });
  return etiqueta;
};
