import { openDatabase } from 'react-native-sqlite-storage';

function openConection() {

    const database = openDatabase('db.db');
    return database;

}

export const db = openConection();