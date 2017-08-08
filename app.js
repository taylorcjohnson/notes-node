console.log('Starting app.js...')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
let command = argv._[0]
console.log(`Command: ${command}`)
console.log('Yargs:', argv)

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log(`Note: ${note.title} was successfully added.`)
        console.log('--')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    } else {
        console.log('Note title already exists; try again with unique title.')
    }
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognized!')
}