const argv = require('yargs')
            .option('b',{
                alias : 'base',
                type : 'number',
                demandOption :true,
                describe: 'es la base de la tabla de multiplicar'
            }).option('l',{
                alias : 'listar',
                type : 'boolean',
                default: false,
                describe : 'muestra la tabla en consola'
            }).option('h',{
                alias : 'hasta',
                type : 'number',
                default: 10,
                describe: 'el número hasta cual se va a multiplicar'
            })
            .check((argv,option) => {
                if (isNaN(argv.b)) {
                    throw 'La base debe ser un número'
                } 
                return true;
            })
            .argv
module.exports = argv;