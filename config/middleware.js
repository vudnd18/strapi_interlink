module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      models: ['posts', 'general', 'partners'],
    }
  }
});