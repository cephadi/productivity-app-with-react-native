import BaseModel from "./BaseModel";

class Users extends BaseModel {
    constructor() {
        super('tbl_users', [
            { name: 'id', type: 'integer primary key not null' },
            { name: 'username', type: 'text' },
            { name: 'password', type: 'text' },
            { name: 'email', type: 'text' },
            { name: 'fullname', type: 'text' },
        ])

        // this.dropTable()
        this.initTable()
        // this.clearTable()
    }

    fetchUserByEmailOrUsername(account, callbackSuccess, callbackFailed) {
        this.rawQuery(
            `select * from ${this.tableName} where email = ? or username = ? LIMIT 1`,
            [account, account],
            callbackSuccess,
            callbackFailed
        )
    }
}

export default new Users()