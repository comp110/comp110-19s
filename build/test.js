const dir = __dirname;
const path = require("path");
const child_process = require("child_process");

let main = async function(args) {

    let project;
    if (args.length !== 3) {
        console.log("You must run this as: npm run package-test [package]");
        process.exit(0);
    } else {
        project = args[2];
    }

    await run(`"./node_modules/.bin/mocha"`, ["-r", "ts-node/register", "-r", "ignore-styles", `src/${project}/*-test.ts`], {
        shell: true,
        cwd: path.join(dir, "..")
    });

};

let run = (cmd, args, options) => {
    return new Promise((resolve, reject) => {
        let proc = child_process.spawn(cmd, args, options)
                    .on("exit", () => resolve())
                    .on("error", (err) => resolve());
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
    });
}

main(process.argv);