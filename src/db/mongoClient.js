import { MongoClient } from 'mongodb';
import { STRING_CONEXION_MONGO, USUARIO_CONEXION_MONGO, PASSWORD_CONEXION_MONGO,  BD_MONGO, BD_MONGO_NAME} from '../config/config.js'

const MONGOCONECTION = STRING_CONEXION_MONGO + USUARIO_CONEXION_MONGO + ':' + PASSWORD_CONEXION_MONGO + BD_MONGO

const CNX_STR = MONGOCONECTION

const mongoClient = new MongoClient(CNX_STR);
await mongoClient.connect();

export const mongoDatabase = mongoClient.db(BD_MONGO_NAME)

