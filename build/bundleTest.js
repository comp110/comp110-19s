const dir = __dirname;
const mkdirp = require("mkdirp");
const path = require("path");
const cpr = require("cpr");
const glob = require("glob");
const fs = require("fs");
const replace = require("replace");
const child_process = require("child_process");
const zipFolder = require("zip-folder");
const rimraf = require("rimraf");

let main = async function(args) {
    
    let project;
    if (args.length !== 3) {
        console.log("You must run this as: npm run package-test [package]");
        process.exit(0);
    } else {
        project = args[2];
    }

    let timestamp = (new Date()).getTime();
    let target = path.join(dir, "tests", `${project}-${timestamp}`);
    let targetProject = path.join(target, "src", project);

    // Make a directory based on project name
    mkdirp.sync(targetProject);

    // Copy standard files In
    let standardFiles = path.join(dir, "testTemplate");
    await cprP(standardFiles, target);

    // Copy test to directory
    let projectDir = path.join(dir, "..", "src", project);
    let testPattern = path.join(projectDir, "*-test.ts");
    let inputFiles = await globP(testPattern);
    let outputFiles = inputFiles.map((file) => {
        return path.join(targetProject, path.join(file).replace(projectDir, ""));
    });
    await cpa(inputFiles, outputFiles);

    // Change paths of required student code import
    replace({
        regex: /from \".\//,
        replacement: `from \"../../lib/${project}/`,
        paths: outputFiles
    });

    // Run npm install
    await run("npm install", [], { cwd: targetProject, shell: true });
    
    // Run tsc
    await run("tsc", [], { cwd: targetProject, shell: true });

    // Zip the bundle
    await zip(target, `${target}.zip`);

    // Delete the bundle folder
    await rm(target);

};

let run = (cmd, args, options) => {
    return new Promise((resolve, reject) => {
        child_process.spawn(cmd, args, options)
                        .on("exit", () => resolve())
                        .on("error", (err) => resolve());
    });
}

let cprP = async (from, to) => {
    return new Promise((resolve, reject) => {
        cpr(from, to, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
};

let cp = async function(from, to) {
    return new Promise((resolve, reject) => {
        let inputStream = fs.createReadStream(from);
        let outputStream = fs.createWriteStream(to);
        inputStream.pipe(outputStream)
                    .on("finish", resolve)
                    .on("error", reject);
    });
};

let cpa = async function(input, output) {
    return Promise.all(
        input.map(
            (file, i) => {
                return cp(file, output[i]);
            }
        )
    );
};

let globP = async (pattern) => {
    return new Promise((resolve, reject) => {
        glob(pattern, (err, matches) => {
            if(err) {
                reject(err);
            } else {
                resolve(matches);
            }
        });
    });
};

let zip = async function(directory, target) {
    console.log(target);
    return new Promise((resolve, reject) => {
        zipFolder(directory, target, (err) => {
            if (err) {
                console.error("Error zipping package");
                console.error(err);
                reject(err);
            } else {
                resolve(target);
            }
        });
    });
};

let rm = function(target) {
    return new Promise((resolve, reject) => {
        rimraf(target, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

main(process.argv);