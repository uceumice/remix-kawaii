
module.exports = {
  extends: ["turbo", "prettier", "airbnb"],
  settings: {
    "import/resolver": {
      node: {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
