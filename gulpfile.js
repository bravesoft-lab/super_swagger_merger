const { series, src, dest, watch } = require('gulp');
const exec = require('exec');

function swagger(done) {
  const command = "npm run merge";
  const command_redoc = "npm run redoc";
  console.log('merge yaml');
  exec(command, function (err, output, code) {
    if (err instanceof Error)
      throw err;
    process.stderr.write(err);
    process.stdout.write(output);
  });
  console.log('output html');
  exec(command_redoc, function (err, output, code) {
    if (err instanceof Error)
      throw err;
    process.stderr.write(err);
    process.stdout.write(output);
  });
  done();
}

exports.default = series(swagger);

exports.watch = function() {
  watch("./api/src/**/*.yaml", swagger);
};
