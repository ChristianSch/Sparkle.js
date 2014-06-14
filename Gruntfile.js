module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['*.js', 'test/**/*.js'],
            options: {
                globals: {
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        jsbeautifier: {
            beautify: {
                src: ['<%= jshint.files %>']
            },
            check: {
                src: ['<%= jshint.files %>'],
                options: {
                    mode: 'VERIFY_ONLY'
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('default', ['jshint', 'jsbeautifier:check']);
    grunt.registerTask('beautify', ['jsbeautifier:beautify']);
};
