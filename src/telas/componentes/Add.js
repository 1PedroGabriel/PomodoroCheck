import { db } from "../serv/SQLite";

export default async function Add(tarefa, min){
    

        return new Promise((resolve) => {

        db.transaction((transaction) => {
            transaction.executeSql(
            "INSERT INTO Trab (tarefa, min, CurMin, CurSec) VALUES (?, ?, ?, ?);", [tarefa, min, min, 0], () => {
                resolve("Adicionado com Susexo");
            });
        
        });
        

    });

}

