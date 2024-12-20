import * as path from "path";
import {promises as fs} from "fs";
import {parse} from "csv-parse";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const csvFilePath = path.join(__dirname, "./bs-vars2.csv");

const filePathsByVariable = {};

parse(await fs.readFile(csvFilePath, {encoding:"utf-8"}), {delimiter: ","}, function(err, records){
    if (err) {
        console.error(err);
        return;
    }

    for(const rec of records){
        const [filePath, line, code] = rec;
        const [_, variable] = /(--bs-[\w-]+)/.exec(code) ?? [];

        const top = filePath.split("/")[0];

        if(variable){
            // group filePaths by variable
            filePathsByVariable[top] = filePathsByVariable[top] ?? {};
            filePathsByVariable[top][variable] = filePathsByVariable[top][variable] ?? [];
            filePathsByVariable[top][variable].push({line, filePath});
        }
    }

    // write grouped variables in a file
    fs.writeFile(path.join(__dirname, "./grouped-vars.json"), JSON.stringify(filePathsByVariable, null, 2)).then(() => {
        console.log("grouped-vars.json written");
    });

});


