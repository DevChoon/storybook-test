const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"), // 절대경로로 설정할 폴더 경로
    },
  },
};
