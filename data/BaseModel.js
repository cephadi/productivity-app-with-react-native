import * as SQLite from 'expo-sqlite'

class BaseModel {
    
    constructor(tableName, columns) {
        this.tableName = tableName // tasks
        // [ { name: 'id', type: 'integer primary key not null' }, { name: 'title', type: 'text' } ]
        this.columns = columns
        this.db = SQLite.openDatabase('productivity.db') // open connection
    }

    initTable() {
        // ['id integer primaru key not null', 'title text'] --> join pakai comma
        const parsingColumns = this.columns.map(col => `${col.name} ${col.type}`).join(', ')
        this.db.transaction((tx) => {
            tx.executeSql(`create table if not exists ${this.tableName} (${parsingColumns})`)
        },
        (error) => {
            console.log(`BaseModel.initTable Error: ${error.message}`)
        })
    }

    clearTable() {
        this.db.transaction((tx) => {
            tx.executeSql(`delete from ${this.tableName}`)
        },
        (error) => {
            console.log(`BaseModel.clearTable Error: ${error.message}`)
        })
    }

    rawQuery(query, params = [], callbackSuccess, callbackFailed) {
        this.db.transaction((tx) => {
            tx.executeSql(
                query,
                params,
                callbackSuccess,
                callbackFailed
            )
        },
        (error) => {
            console.log(`BaseModel.rawQuery Error: ${error.message}`)
        })
    }

    fetchAll(callbackSuccess, callbackFailed) {
        this.db.transaction((tx) => {
            tx.executeSql(
                `select * from ${this.tableName} order by id DESC`,
                [],
                callbackSuccess,
                callbackFailed
            )
        },
        (error) => {
            console.log(`BaseModel.fetchAll Error: ${error.message}`)
        })
    }

    save(data, callbackSuccess, callbackFailed) {
        // data => [{ column: 'title', value: 'testing sql' }, { column: 'desc', value: 'description value' }]
        const onlyColumn = data.map(obj => obj.column).join(', ') // ['title', 'desc'] --> title, desc
        const argsValue = data.map(_ => '?').join(', ') // ['?', '?'] --> ?, ?
        const values = data.map(obj => obj.value) // ['testing sql', 'description value']
        this.db.transaction((tx) => {
            tx.executeSql(
                `insert into ${this.tableName} (${onlyColumn}) values (${argsValue})`,
                values,
                callbackSuccess,
                callbackFailed
            )
        },
        (error) => {
            console.log(`BaseModel.save Error: ${error.message}`)
        })
    }
}

export default BaseModel