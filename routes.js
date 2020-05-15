module.exports = [
    {
      path: '/',
      router: require('./components/default/default.routes'),
    },
    {
      path: '/subscribe',
      router: require('./components/subscriber/subscriber.routes'),
    },
    {
      path: '/push',
      router: require('./components/push/push.routes'),
    },
  ];
  