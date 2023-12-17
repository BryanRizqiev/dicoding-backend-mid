const Hapi = require("@hapi/hapi")
const notes = require("./api/notes/index.js")
const NotesService = require("./services/inMemory/NotesService.js")
const NotesValidator = require("./validator/notes/index.js")

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: "localhost",
        routes: {
            cors: {
                origin: ["*"]
            }
        }
    })

    const notesService = new NotesService()
    await server.register({
        plugin: notes,
        options: {
          service: notesService,
          validator: NotesValidator,
        },
    })

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
