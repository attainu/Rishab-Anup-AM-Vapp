const db = require("../database");
const Sequelize = require("sequelize");

const Table = db.define("tables", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false
  },
  strength: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  floor: {
    type: Sequelize.INTEGER
  }
}, 
 {
  timestamps: false,
  underscored: true
});



const Waiters = db.define('waiters', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false
  },
  
  name: {
    type: Sequelize.STRING,
    allowNull:false
  },
  age: {
    type: Sequelize.INTEGER
  },
  mobile:{
    type:Sequelize.STRING
  },
  ratings:{
    type:Sequelize.INTEGER
  },
  experience:{
    type:Sequelize.INTEGER
  }
 
 

},
{
  timestamps: false,
  underscored: true
});

const Menu = db.define('menu', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false
  },
  
  itemName: {
    type: Sequelize.STRING,
    allowNull:false
  },
  cuisineName: {
    type: Sequelize.STRING,
    allowNull:false
  },
  type:{
    type: Sequelize.STRING,
    allowNull:false

  },
  price: {
    type: Sequelize.INTEGER
  }

},
{
  timestamps: false,
  underscored: true
});

const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false
  },
  
  userName: {
    type: Sequelize.STRING,
    allowNull:false
  },
  userMobile: {
    type: Sequelize.STRING,
    allowNull:false
  },
  itemsOrdered: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull:false
  },

  price: {
    type: Sequelize.INTEGER
  },
  payment:{
    type: Sequelize.STRING,
    allowNull:false

  },
  waiter_id:{
    type:Sequelize.INTEGER,
    references: {         
      model: 'waiters',
      key: 'id'
    }
  },
  table_id:{
    type:Sequelize.INTEGER,
    references: {         
      model: 'tables',
      key: 'id'
    }
  }

},
{
  timestamps: false,
  underscored: true
});

// Waiters.belongsTo(Order,{constraints: false})
// Table.belongsTo(Order,{constraints: false})
// Order.hasOne(Waiters,{constraints: false})
// Order.hasOne(Table,{constraints: false})
Order.belongsTo(Waiters);
Order.belongsTo(Table);
Waiters.hasMany(Order);
Table.hasMany(Order)




db.sync()






module.exports = {
  Table,
  Waiters,
  Menu,
  Order
};



// const Waiters = db.define('waiters', {
  
//   name: {
//     type: Sequelize.STRING
//   },
//   age: {
//     type: Sequelize.INTEGER
//   },
//   table_id:{
//     type:Sequelize.INTEGER,
//     references: {         
//       model: 'tables',
//       key: 'id'
//     }
//   }
 

// },
// {
//   timestamps: false,
//   underscored: true
// });

// Customers.belongsTo(Table);
// Table.hasMany(Customers);