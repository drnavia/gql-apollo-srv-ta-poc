import mongoose, { Promise } from 'mongoose';
import { Paises } from './db';

// Los Resolvers
export const resolvers = {
    Query: {
        obtenerPaises : (root, {limite, offset}) => {
            return Paises.find({}).limit(limite).skip(offset);
        },
        obtenerPais : (root, {id}) => {
            return new Promise((resolve, object) => {
            	Paises.findById(id,(error, pais) => {
            		if(error) rejects(error)
            		else resolve(pais)
            	})
            })
        },
        totalPaises : (root) => {
            return new Promise((resolve, object) =>{
                Paises.countDocuments({}, (error, count) => {
                    if(error) rejects(error)
                    else resolve(count)
                })
            })
        }
    },
    Mutation: {
        crearPais : (root, {input}) => {
            const nuevoPais = new Paises({
                codpais:  input.codpais,
                nombpais: input.nombpais,
                prefpais: input.prefpais,
                continente:  input.continente,
                estados:     input.estados,
                localidades: input.localidades
            });
            // Mongode crea el ID que se asigna al objeto
            nuevoPais.id = nuevoPais._id;

            return new Promise((resolve, object) => {
                nuevoPais.save((error) => {
                    if(error) rejects(error)
                    else resolve(nuevoPais)
                })
            });
        },
        actualizarPais: (root, {input}) => {
            return new Promise((resolve, object) => {
                // usamos el modelo de Paises
                Paises.findOneAndUpdate( {_id : input.id}, input, {new: true}, (error, pais) => {
                    if(error) rejects(error)
                    else resolve(pais)
                });
            });
        },
        eliminarPais: (root, {id}) => {
            return new Promise((resolve, object) => {
                // usamos el modelo de Paises
                Paises.findOneAndDelete( {_id : id}, (error) => {
                    if(error) rejects(error)
                    else resolve("El Pais se eliminó correctamente!")
                });
            });
        }
    }
}
