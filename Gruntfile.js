module.exports = grunt => {
  grunt.initConfig({
    ts: {
      default: {
        outDir: "dist/",
        // out: "./dist/metadefender.js",
        src: ["src/**/*.ts"]
      },

      options: {
        declaration: true,
        rootDir: "src"
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", ["ts"]);
};
