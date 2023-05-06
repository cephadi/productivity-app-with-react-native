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

    countTasksByGroup(group, callbackSuccess, callbackFailed) {
        this.rawQuery(
            `select COUNT(*) as total from ${this.tableName} where task_group = ?`,
            [group],
            callbackSuccess,
            callbackFailed
        )
    }

    fetchByDate(date, callbackSuccess, callbackFailed) {
        this.rawQuery(
            `select * from ${this.tableName} where created_at = ?`,
            [date],
            callbackSuccess,
            callbackFailed
        )
    }
}

export default new Tasks()