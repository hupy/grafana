module.exports = function(config) {
  return {
    source: {
      files: {
        src: ['<%= srcDir %>/app/**/*.ts', '!<%= srcDir %>/app/**/*.d.ts'],
      }
    },
    options: {
      configuration: {
        rules: {
          curly: true,
          align: [true, "parameters", "arguments", "statements"],
          indent: [true, "spaces"],
          "class-name": true,
          "interface-name": true,
          "semicolon": true,
          "use-strict": [true, "check-module", "check-function" ],
          "whitespace": [true, "check-branch", "check-decl", "check-operator", "check-separator", "check-type"],
        }
      }
    }
  };
};