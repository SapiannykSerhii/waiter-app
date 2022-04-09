/* global require, process */

import { create, router as _router, defaults, rewriter } from 'json-server';
const server = create();
const router = _router('build/db/app.json');
const middlewares = defaults({
  static: 'build',
  noCors: true
});
const port = process.env.PORT || 3131;
server.use(middlewares);
server.use(rewriter({
  '/api/*': '/$1'
}));

server.use(router);
server.listen(port);