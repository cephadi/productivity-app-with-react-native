import BaseModel from "./BaseModel";

class Tasks extends BaseModel {
    constructor() {
        super('tbl_tasks', [
            { name: 'id', type: 'integer primary key not null' },
            { name: 'task_title', type: 'text' },
            { name: 'task_group', type: 'text' },
            { name: 'task_status', type: 'integer' },
            { name: 'created_at', type: 'text' },
            { name: 'user_id', type: 'integer' },
        ])

        // this.dropTable()
        this.initTable()
        // this.clearTable()
    }

    fetchAll(userId, callbackSuccess, callbackFailed) {
        this.db.transaction((tx) => {
            tx.executeSql(
                `select * from ${this.tableName} where user_id = ? order by id DESC`,
                [userId],
                callbackSuccess,
                callbackFailed
            )
        },
        (error) => {
            console.log(`Tasks.fetchAll Error: ${error.message}`)
        })
    }

    countTasksByGroup(group, userId, callbackSuccess, callbackFailed) {
        this.rawQuery(
            `select COUNT(*) as total from ${this.tableName} where task_group = ? and user_id = ?`,
            [group, userId],
            callbackSuccess,
            callbackFailed
        )
    }

    fetchByDate(date, userId, callbackSuccess, callbackFailed) {
        this.rawQuery(
            `select * from ${this.tableName} where created_at = ? and user_id = ?`,
            [date, userId],
            callbackSuccess,
            callbackFailed
        )
    }
}

export default new Tasks()