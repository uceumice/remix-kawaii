/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  appDirectory: 'application',

  serverBuildTarget: 'cloudflare-pages',
  server: './module/index.ts',

  serverDependenciesToBundle: [],

  ignoredRouteFiles: ['**/.*'],

  serverBuildPath: './functions/[[path]].js',
}
