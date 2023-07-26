// // mongo.ts
// import { MongoClient } from 'mongodb';
// import { MONGO_URL } from '../lib/Env';

// import type { returnURLsList } from './BackendUtils';

 
// console.log('url >>> ' + MONGO_URL);
// const client = new MongoClient(MONGO_URL);

 
// export function start_mongo(): Promise<MongoClient> {
// 	console.log('Starting mongo...');
// 	return client.connect();
// }
 
// export default client.db('mydb');

// // export async function load({}) {
// // 	const client = new MongoClient(MONGO_URL);
// // 	let dbError = {
// // 		hasError: false,
// // 		error: '',
	
// // 	}
// // 	let URLList:string[] = [];

// // 	try {
// // 		await client.connect();
// // 	}
// // 	catch(error: any){
// // 		dbError.hasError = true;
// // 		dbError.error = error.message?? "Error Connection to DB"
// // 	}

// // 	const dbName = 'mydb';
// // 	const db = client.db(dbName);
// // 	const collName = 'tutorials'
// // 	const collection = db.collection(collName);

// // 	try{
// // 		URLList = await returnURLsList(collection);
// // 		console.log("URL List")
// // 	} catch (error: any){
// // 		dbError.hasError = true;
// // 		dbError.error = error.message?? "Error retrieving URL List";
// // 	}

// // 	return {dbError, URLList}
	
// // }