const fs = require("fs");
const path = require("path");

const iconLibraryFolder = path.join(__dirname, "../src/assets/images/icons");
const iconLibraryFile = path.join(__dirname, "../src/app/shared/icon-library/icon-library.source.ts");
const iconTemplate = `	'[ICON_FILE_NAME]':\n		'[ICON_FILE_CONTENT]'`;
let iconLibraryContent =
    "/**\n * /!\\ This file is generated automatically, do not change it in any way!\n *\n * It works by running the command `npm run build-icon-library`.\n * The command will look for every icon inside `/src/assets/images/icons` and push them into this file so we can then include them in templates like `<app-icon-library icon='icon-check.svg'></app-icon-library>`\n *\n * Make sure you change the colors of your icons to `currentColor` before running the command above, so we can change icon colors with CSS.\n */\n\n";
iconLibraryContent += "export const iconLibrary = {\n";

const init = () => {
    fs.readdir(iconLibraryFolder, (error, filenames) => {
        if (error) {
            console.log("ERROR fetching icons...", error);
            return;
        }

        for (const filename of filenames) {
            const isLastFile = filename === filenames[filenames.length - 1];

            fs.readFile(path.join(iconLibraryFolder, filename), "utf-8", (error, content) => {
                if (error) {
                    console.log(`ERROR fetching file content '${filename}'`, error);
                    return;
                }

                iconLibraryContent += `${iconTemplate
                    .replace("[ICON_FILE_NAME]", filename)
                    .replace("[ICON_FILE_CONTENT]", content.trim())}`;

                console.log(`Added file ${filename}... Last file: ${isLastFile}`);

                if (!isLastFile) {
                    iconLibraryContent += ",\n";
                } else {
                    iconLibraryContent += "\n}\n";
                    writeFile(iconLibraryContent);
                }
            });
        }
    });
};

const writeFile = iconLibraryContent => {
    if (iconLibraryContent.length > 0) {
        fs.writeFile(iconLibraryFile, iconLibraryContent, error => {
            if (error) {
                console.log("ERROR writing file", error);
                return;
            }

            console.log("SUCCESS, icon library was built successfully!");
        });
    }
};

init();
