module.exports = function(grunt) {

    /*
    Source:
        https://github.com/gruntjs/grunt-contrib-compress/
    */
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
 
        // Metadata.
        meta: {
            basePath: '.',
            srcPath: 'src/',
            deployPath: 'dest/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // Task configuration.
        sass: {
            dist: {
                files: {
                    '<%= meta.deployPath %>style.css': '<%= meta.srcPath %>style.scss'
                }
            }
        },

        cssmin : {
			target : {
				src : ["dest/style.css"],
				dest : "dest/style.min.css"
			}
		},

        compress: {
            main: {
                options: {
                    archive: 'dest.zip'
                },
                files: [{
                    expand: true,
                    cwd: 'dest/',
                    src: ['**/*'],
                    dest: 'dest/'
                }]
            }
        }
 
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');

    //load cssmin plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-compress');

	//create default task
	grunt.registerTask("default", ["sass", "cssmin", "compress"]);
    // grunt.registerTask("default", ["compress"]);
 
};