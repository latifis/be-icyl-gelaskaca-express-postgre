const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.event = require("../models/event.model.js")(sequelize, Sequelize);
db.product = require("../models/product.model.js")(sequelize, Sequelize);
db.type = require("../models/type.model.js")(sequelize, Sequelize);
db.stock = require("../models/stock.model.js")(sequelize, Sequelize);
db.cart = require("../models/cart.model.js")(sequelize, Sequelize);
db.rent = require("../models/rent.model.js")(sequelize, Sequelize);
db.category = require("../models/category.model.js")(sequelize, Sequelize);
db.paymentProof = require("../models/paymentProof.model.js")(sequelize, Sequelize);

db.userr = require("../models/userr.model.js")(sequelize, Sequelize);
db.voucher = require("../models/voucher.model.js")(sequelize, Sequelize);
db.account = require("../models/account.model.js")(sequelize, Sequelize);
db.rolee = require("../models/rolee.model.js")(sequelize, Sequelize);
db.delivery = require("../models/delivery.model.js")(sequelize, Sequelize);
db.payment = require("../models/payment.model.js")(sequelize, Sequelize);
db.history = require("../models/history.model.js")(sequelize, Sequelize);
db.returned = require("../models/returned.model.js")(sequelize, Sequelize);
db.verification = require("../models/verification.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "pic"];

// product and type
db.product.hasMany(db.type, { as: "types" });
db.type.belongsTo(db.product, {
  foreignKey: "productId",
  as: "product",
});

// product and stock
db.product.hasMany(db.stock, { as: "stocks" });
db.stock.belongsTo(db.product, {
  foreignKey: "productId",
  as: "product",
});

// product and cart
db.cart.hasMany(db.product, { as: "products" });
db.product.belongsTo(db.cart, {
  foreignKey: "cartId",
  as: "cart",
});

// product and category
db.category.hasMany(db.product, { as: "products" });
db.product.belongsTo(db.category, {
  foreignKey: "categoryId",
  as: "category",
});

// rent and cart
db.rent.hasOne(db.cart, {as: "carts"});
db.cart.belongsTo(db.rent, {
  foreignKey: "rentId",
  as: "rent",
});

// rent and paymentProof
db.rent.hasOne(db.paymentProof, {as: "paymentProofs"});
db.paymentProof.belongsTo(db.rent, {
  foreignKey: "rentId",
  as: "rent",
});

// rent and history
db.rent.hasOne(db.history, {as: "historys"});
db.history.belongsTo(db.rent, {
  foreignKey: "rentId",
  as: "rent",
});

// rent and returned
db.rent.hasOne(db.returned, {as: "returneds"});
db.returned.belongsTo(db.rent, {
  foreignKey: "rentId",
  as: "rent",
});

// user and rent
db.userr.hasMany(db.rent, { as: "rents" });
db.rent.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// user and paymentProof
db.userr.hasOne(db.paymentProof, {as: "paymentProofs"});
db.paymentProof.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// user and cart
db.userr.hasOne(db.cart, {as: "carts"});
db.cart.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// user and category
db.userr.hasMany(db.category, { as: "categorys" });
db.category.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// user and voucher
db.userr.hasOne(db.voucher, {as: "vouchers"});
db.voucher.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// user and history
db.userr.hasOne(db.history, {as: "historys"});
db.history.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// user and returned
db.userr.hasOne(db.returned, {as: "returneds"});
db.returned.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// payment and voucher
db.payment.hasOne(db.voucher, {as: "vouchers"});
db.voucher.belongsTo(db.payment, {
  foreignKey: "paymentId",
  as: "payment",
});

// payment and delivery
db.payment.hasOne(db.delivery, {as: "deliverys"});
db.delivery.belongsTo(db.payment, {
  foreignKey: "paymentId",
  as: "payment",
});

// payment and rent
db.payment.hasOne(db.rent, {as: "rents"});
db.rent.belongsTo(db.payment, {
  foreignKey: "paymentId",
  as: "payment",
});

// user and payment
db.userr.hasOne(db.payment, {as: "payments"});
db.payment.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// user and account
db.userr.hasOne(db.account, {as: "accounts"});
db.account.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// user and delivery
db.userr.hasOne(db.delivery, {as: "deliverys"});
db.delivery.belongsTo(db.userr, {
  foreignKey: "userrId",
  as: "userr",
});

// role and account
db.rolee.hasMany(db.account, { as: "accounts" });
db.account.belongsTo(db.rolee, {
  foreignKey: "roleeId",
  as: "rolee",
});



module.exports = db;