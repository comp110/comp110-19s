var mocha = require('mocha');
module.exports = TestReporter;
var original_stdout = process.stdout.write;
var original_stderr = process.stderr.write;
function TestReporter(runner) {
    mocha.reporters.Base.call(this, runner);
    var stats = {
        passes: 0,
        failures: 0
    };
    var passed = [];
    var failed = [];
    var stdout = "";
    var stderr = "";
    runner.on('start', function () {
        process.stdout.write = function (data, encoding, fd) { stdout += data; };
        process.stderr.write = function (data, encoding, fd) { stderr += data; };
    });
    runner.on('pass', function (test) {
        stats.passes++;
        passed.push(sanitize(test));
    });
    runner.on('fail', function (test, err) {
        stats.failures++;
        failed.push(sanitize(test, err));
    });
    runner.on('end', function () {
        process.stdout.write = original_stdout;
        process.stderr.write = original_stderr;
        stats.total = stats.passes + stats.failures;
        if (stats.total > 0) {
            stats.percent = stats.passes / stats.total;
        }
        else {
            stats.percent = 0.0;
        }
        try {
            console.log(JSON.stringify({ stats: stats, passed: passed, failed: failed, stdout: stdout, stderr: stderr }));
            process.exit(0);
        }
        catch (e) {
            console.error(e);
        }
    });
}
function sanitize(test, error) {
    var result = {
        test: test.fullTitle()
    };
    if (test.err || error) {
        result.error = errorJSON(test.err || error);
    }
    return result;
}
function errorJSON(err) {
    var res = {};
    Object.getOwnPropertyNames(err).forEach(function (key) {
        res[key] = err[key];
    }, err);
    return res;
}
//# sourceMappingURL=reporter.js.map