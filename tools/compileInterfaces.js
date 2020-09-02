const jsonSchemaToTypescript = require("json-schema-to-typescript");
const compileFromFile = jsonSchemaToTypescript.compileFromFile;
const fs = require("fs");
const path = require("path");
// const schema = require("../source/index.json");

const ROOT_DIR = path.join(__dirname, "..");

(async () => {
    const typescriptInterfacesSource = await compileFromFile(
        path.join(ROOT_DIR, "source", "index.json"),
        {
            unreachableDefinitions: true,
        },
    );
    fs.writeFileSync(
        path.join(ROOT_DIR, "source", "index.d.ts"),
        typescriptInterfacesSource,
    );
})();
