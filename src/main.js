import { conectar } from './controllers/server.js';
//import {MODO} from './config.js'
import cluster from 'cluster' 
import os from 'os'
import {MODO_POR_DEFECTO} from './config/config.js'


cluster.schedulingPolicy = cluster.SCHED_RR;

const numCPUs = os.cpus().length


//PRIMERO ESTRAIGO EL 3ER. PARÁMETRO PASADO POR CONSOLA
//EN CASO DE PASAR EL PUERTO SERÁ EL PUERTO Y EL MODO ESTARÁ EN EL 4TO. PARÁMETRO
//EN EL CASO QUE NO PASE EL PUERTO, EN EL 3ER. PARÁMETRO ESTARÁ EL MODO
//SI NO PASA EL MODO POR CONSOLA, SE TOMARÁ EL VALOR POR DEFECTO, DEFINIDO EN LAS VARIABLES DE ENTORNO (fork)


const MODO = (process.argv.slice(2)[0] ?? MODO_POR_DEFECTO) === ('cluster' || 'fork') ? process.argv.slice(2)[0] : (process.argv.slice(3)[0] ?? MODO_POR_DEFECTO)  

async function main() {
if(MODO === 'cluster') { 
    /* --------------------------------------------------------------------------- */
    /* MASTER */
    
    if (cluster.isPrimary) {
       
        //await createTables()
        console.log("Cantidad de Procesadores: " + numCPUs)
        console.log(`PID MASTER ${process.pid}`)
    
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork()
        }
    
        cluster.on('exit', worker => {
            console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
            cluster.fork()
        })
    }
    /* --------------------------------------------------------------------------- */
    /* WORKERS */
    else {
    
        try {
            const serv = await conectar();
            console.log(`conectado al puerto ${serv.address().port}, proceso secundario: pid ${process.pid}`);
        } catch (error) {
            console.log('algo falló: ' + error);
        }
     }
    } else {
        try {
            //await createTables()
            const serv = await conectar();
            console.log(`conectado al puerto ${serv.address().port}, proceso: pid ${process.pid}`);
        } catch (error) {
            console.log('algo falló: ' + error);
        }
    }
    }
    
    main()
 