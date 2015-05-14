'use strict';
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        destDir: 'dist',
        moduleName: 'TravisClient',
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            main: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/**/*.js', 'Gruntfile.js']
            }//,
            //backendJasmineTest: {
            //    options: {
            //        jshintrc: 'test/backend/.jshintrc'
            //    },
            //    files: {
            //        src: [
            //            'test/backend/**/*.js'
            //        ]
            //    }
            //}
        },
        uglify: {
            angular_client: {
                files: {
                    '<%= destDir %>/<%= moduleName %>.angular.min.js': ['<%= destDir %>/<%= moduleName %>.angular.js']
                }
            },
            jquery_client: {
                files: {
                    '<%= destDir %>/<%= moduleName %>.jquery.min.js': ['<%= destDir %>/<%= moduleName %>.jquery.js']
                }
            },
            vanilla_client: {
                files: {
                    '<%= destDir %>/<%= moduleName %>.vanilla.min.js': ['<%= destDir %>/<%= moduleName %>.vanilla.js']
                }
            }
        },
        browserify: {
            options: {
                banner: '/** This is a demo travis client **/'
            },
            angular_client: {
                files: {
                    '<%= destDir %>/<%= moduleName %>.angular.js': ['src/<%= moduleName %>.angular.js']
                }
            },
            jquery_client: {
                files: {
                    '<%= destDir %>/<%= moduleName %>.jquery.js': ['src/<%= moduleName %>.jquery.js']
                }
            },
            vanilla_client: {
                files: {
                    '<%= destDir %>/<%= moduleName %>.vanilla.js': ['src/<%= moduleName %>.vanilla.js']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    middleware: function (connect) {
                        return [
                            connect.static('./test/example'),
                            connect.static('./dist')
                        ];
                    }
                }
            }
        },
        karma: {
            vanilla: {
                configFile:'test/karma.vanilla.conf.js'
            },
            jquery: {
                configFile:'test/karma.jquery.conf.js'
            },
            angular: {
                configFile:'test/karma.angular.conf.js'
            }
        }
    });

    grunt.registerTask('test', [
        'jshint',
        'browserify',
        'karma:jquery'
    ]);

    grunt.registerTask('build', [
        'jshint',
        'browserify',
        'uglify'
    ]);


    grunt.registerTask('default', [
        'jshint',
        //'test',
        'build'
    ]);
};