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

// db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.voucher = require("../models/voucher.model.js")(sequelize, Sequelize);
// db.account = require("../models/account.model.js")(sequelize, Sequelize);
// db.rolee = require("../models/rolee.model.js")(sequelize, Sequelize);
db.delivery = require("../models/delivery.model.js")(sequelize, Sequelize);
db.payment = require("../models/payment.model.js")(sequelize, Sequelize);
db.history = require("../models/history.model.js")(sequelize, Sequelize);
db.historyStatus = require("../models/historyStatus.model.js")(sequelize, Sequelize);
db.returned = require("../models/returned.model.js")(sequelize, Sequelize);
db.verification = require("../models/verification.model.js")(sequelize, Sequelize);
db.productGallery = require("../models/productGallery.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "accounts",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "accounts",
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

// // rent and cart
// db.rent.hasOne(db.cart, {as: "carts"});
// db.cart.belongsTo(db.rent, {
//   foreignKey: "rentId",
//   as: "rent",
// });
db.cart.hasOne(db.rent);
db.rent.belongsTo(db.cart);

// // rent and paymentProof
// db.rent.hasOne(db.paymentProof, {as: "paymentProofs"});
// db.paymentProof.belongsTo(db.rent, {
//   foreignKey: "rentId",
//   as: "rent",
// });
db.rent.hasOne(db.paymentProof);
db.paymentProof.belongsTo(db.rent);

// // rent and history
// db.rent.hasOne(db.history, {as: "historys"});
// db.history.belongsTo(db.rent, {
//   foreignKey: "rentId",
//   as: "rent",
// });
db.rent.hasOne(db.history);
db.history.belongsTo(db.rent);

// // rent and returned
// db.rent.hasOne(db.returned, {as: "returneds"});
// db.returned.belongsTo(db.rent, {
//   foreignKey: "rentId",
//   as: "rent",
// });
db.rent.hasOne(db.returned);
db.returned.belongsTo(db.rent);

// user and rent
db.user.hasMany(db.rent, { as: "rents" });
db.rent.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

// // user and paymentProof
// db.user.hasOne(db.paymentProof, {as: "paymentProofs"});
// db.paymentProof.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
db.user.hasOne(db.paymentProof);
db.paymentProof.belongsTo(db.user);

// // user and cart
// db.user.hasOne(db.cart, {as: "carts"});
// db.cart.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
// db.user.hasMany(db.cart, { as: "carts" });
// db.cart.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
db.user.hasOne(db.cart);
db.cart.belongsTo(db.user);

// deleted
// user and category
// db.user.hasMany(db.category, { as: "categorys" });
// db.category.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });

// // user and voucher
// db.user.hasOne(db.voucher, {as: "vouchers"});
// db.voucher.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
db.user.hasOne(db.voucher);
db.voucher.belongsTo(db.user);

// // user and history
// db.user.hasOne(db.history, {as: "historys"});
// db.history.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
db.user.hasOne(db.history);
db.history.belongsTo(db.user);

// history and historyStatus
db.historyStatus.hasMany(db.history, { as: "historys" });
db.history.belongsTo(db.historyStatus, {
  foreignKey: "historyStatusId",
  as: "historyStatus",
});

// // user and returned
// db.user.hasOne(db.returned, {as: "returneds"});
// db.returned.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
db.user.hasOne(db.returned);
db.returned.belongsTo(db.user);

// // payment and voucher
// db.payment.hasOne(db.voucher, {as: "vouchers"});
// db.voucher.belongsTo(db.payment, {
//   foreignKey: "paymentId",
//   as: "payment",
// });
db.payment.hasOne(db.voucher);
db.voucher.belongsTo(db.payment);

// // payment and delivery
// db.payment.hasOne(db.delivery, {as: "deliverys"});
// db.delivery.belongsTo(db.payment, {
//   foreignKey: "paymentId",
//   as: "payment",
// });
db.payment.hasOne(db.delivery);
db.delivery.belongsTo(db.payment);

// // payment and rent
// db.payment.hasOne(db.rent, {as: "rents"});
// db.rent.belongsTo(db.payment, {
//   foreignKey: "paymentId",
//   as: "payment",
// });
db.payment.hasOne(db.rent);
db.rent.belongsTo(db.payment);

// // user and payment
// db.user.hasOne(db.payment, {as: "payments"});
// db.payment.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
db.user.hasOne(db.payment);
db.payment.belongsTo(db.user);

// sign
// user and account
// db.user.hasOne(db.account, {as: "accounts"});
// db.account.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });

// // user and delivery
// db.user.hasOne(db.delivery, {as: "deliverys"});
// db.delivery.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });
db.user.hasOne(db.delivery);
db.delivery.belongsTo(db.user);

// sign
// role and account
// db.rolee.hasMany(db.account, { as: "accounts" });
// db.account.belongsTo(db.rolee, {
//   foreignKey: "roleeId",
//   as: "rolee",
// });

// // verification and payment
// db.verification.hasOne(db.payment, {as: "payments"});
// db.payment.belongsTo(db.verification, {
//   foreignKey: "verificationId",
//   as: "verification",
// });
db.verification.hasOne(db.payment);
db.payment.belongsTo(db.verification);

// // verification and paymentProof
// db.verification.hasOne(db.paymentProof, {as: "paymentProofs"});
// db.paymentProof.belongsTo(db.verification, {
//   foreignKey: "verificationId",
//   as: "verification",
// });
db.verification.hasOne(db.paymentProof);
db.paymentProof.belongsTo(db.verification);

// product and productGallery
db.product.hasMany(db.productGallery, { as: "productGalleries" });
db.productGallery.belongsTo(db.product, {
  foreignKey: "productId",
  as: "product",
});

module.exports = db;