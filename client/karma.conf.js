module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['Chrome'],
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/**/*',
      'spec/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'spec/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    singleRun: true
  });
};
