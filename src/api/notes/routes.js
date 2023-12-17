
const routes = (handler) => [
  {
    method: "POST",
    path: "/books",
    handler: handler.postNoteHandler
  },
  {
    method: "GET",
    path: "/books",
    handler: handler.getNotesHandler
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: handler.getNoteByIdHandler
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: handler.putNoteByIdHandler
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: handler.deleteNoteByIdHandler
  }
]

module.exports = routes
