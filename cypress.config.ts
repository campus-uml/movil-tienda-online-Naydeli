const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "rapfkv",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})