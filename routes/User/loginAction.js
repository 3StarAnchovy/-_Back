const mysql = require("mysql");
const db = require("../../db/index");

checkUser = (userData, loginSuccess, loginFalse) => {
    var params = [userData.id, userData.pw];
    console.log("checkUser");
    var sql = `SELECT id, pw FROM user WHERE id = ?`;
    db.connection.query(sql, params[0], (err, results)=>{
        if(err) console.log(err);
        console.log(results);

        if(results[0].id.length > 0 && userData.pw === results[0].pw)
            loginSuccess();
        else loginFalse();
    });
};

module.exports={
    checkUser
};