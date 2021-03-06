exports.wem2wav = wem2wav = async ({
  outputDir,
  processingDir,
  createdFile,
}) => {
  const path = require("path");
  const util = require("util");
  const exec = util.promisify(require("child_process").execFile);
  const vgmstream = path.join(".", "libs", "vgmstream-cli.exe");
  const outputFile = path.join(
    outputDir,
    createdFile.split(".")[0] + ".wav"
  );
  const createdFilePath = path.join(processingDir, createdFile);

  await exec(vgmstream, ["-o", outputFile, createdFilePath]);
};
