import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

// Conectar a la base de datos --> base: clientedb
mongoose.connect('mongodb://poc-gql-mongodb:27017/poc-graphql-db', {useNewUrlParser: true})
    .then(() => {
        console.log(">>> CONECTADO EXITOSAMENTE A LA BASE DE DATOS <<<");    
    }).catch(err => {
        console.log('¡¡¡NO SE PUDO CONECTAR A LA BASE DE DATOS. Saliendo ahora... !!!', err);
        process.exit();
});

mongoose.set('useFindAndModify', false);

// Definir el schema de Paises
const paisesSchema = new mongoose.Schema({
    codpais:    String,
    nombpais:   String,
    prefpais:   Number,
    continente: String,
    estados:    Array
})
// Crear el modelo --> tabla: paises
const Paises = mongoose.model('paises', paisesSchema);

export { Paises };