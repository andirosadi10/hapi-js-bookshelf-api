const {
  addBookHandler,
  getAllBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => 'Home Page',
},
{
  method: 'POST',
  path: '/books',
  handler: addBookHandler,
},
{
  method: 'GET',
  path: '/books',
  handler: getAllBookHandler,
},
{
  method: 'GET',
  path: '/books/{bookId}',
  handler: getBookByIdHandler,
},
{
  method: 'PUT',
  path: '/books/{bookId}',
  handler: editBookByIdHandler,
},
{
  method: 'DELETE',
  path: '/books/{bookId}',
  handler: deleteBookByIdHandler,
},
{
  method: '*',
  path: '/{any*}',
  handler: (request, h) => 'Halaman tidak ditemukan',
},
];

module.exports = routes;
