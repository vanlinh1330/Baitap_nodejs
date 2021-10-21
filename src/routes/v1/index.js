const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const linhRoute = require('./linh.route');
const lopRoute = require('./lop.route');
const studentRoute = require('./student.route');
const companyRoute = require('./company.route');
const professionalRoute = require('./professional.route');
const peopleRoute = require('./people.route');
const worksForRoute = require('./worksFor.route');
const blogRoute = require('./blog.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/linhs',
    route: linhRoute,
  },
  {
    path: '/students',
    route: studentRoute,
  },
  {
    path: '/lops',
    route: lopRoute,
  },
  {
    path: '/companies',
    route: companyRoute,
  },
  {
    path: '/worksFors',
    route: worksForRoute,
  },
  {
    path: '/professional',
    route: professionalRoute,
  },
  {
    path: '/people',
    route: peopleRoute,
  },
  {
    path: '/Blog',
    route: blogRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
