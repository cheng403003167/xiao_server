const mysql = require('mysql');


class getData {
  constructor(){
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'xiaoshuo_new'
    })
    this.pool.on('error',err=>console.log(err.code));
  }
  getList(sql,values){
    return new Promise((resolve,reject)=>{
      this.pool.getConnection(function(err,connection){
        if(err){
          reject(err)
        }else{
          connection.query('SELECT `describe` FROM library ORDER BY currentList  LIMIT ?,?',[0,10],(err,rows)=>{
            if(err){
              reject(err)
            }else{
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}
module.exports = getData;