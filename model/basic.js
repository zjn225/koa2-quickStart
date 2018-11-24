const db = require('../utils/db-utils'); 

//创建user的sql语句
users =
    `create table if not exists users(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 pass2 VARCHAR(40) NOT NULL,
 PRIMARY KEY ( id )
);`

async function init(){
  let res = await db.createTable(users)
  console.log("初始化数据表成功",res)
}

async function getUsers() {
    let sql = 'SELECT * FROM users'
    let result = await db.query( sql )
    console.log(`getUsers方法执行了`)
    return result
}

init()

module.exports = {
  getUsers
}