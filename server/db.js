for (let model of models) {
    model(sequelize)
}

const{products, reviews, users, orders } = sequelize.models;
reviews.belongsTo(products);
orders.belongsTo(users); 
orders.belongsTo(products); 

module.exports = sequelize;