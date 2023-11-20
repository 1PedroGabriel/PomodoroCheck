import { db } from "../serv/SQLite";

export default async function Delete(id){

    return new Promise((resolve) => {

        db.transaction((tx) => {
            tx.executeSql('DELETE FROM Trab where id = (?);', [id], () => {

                //Depois que pararam e piririm, isso acontece ( pelo oq eu entendi ).

                resolve();
                
        
            });
        });
    });


}