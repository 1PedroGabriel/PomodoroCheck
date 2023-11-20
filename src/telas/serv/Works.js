import {db} from './SQLite'

export default function criaTabela() {

    db.transaction((transaction) => {

        transaction.executeSql("CREATE TABLE IF NOT EXISTS " + 
        "Trab" +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, tarefa TEXT, min INT, CurMin INT, CurSec INT);")
    });
}