const fs = require("fs");

const DATA_FILE_PATH = "";

const loadData = () => {
  fs.readFile(DATA_FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.log("\n\nacces impossible fichier non trouvé current path : ");
      console.log(err);
      return;
    }
    console.log(data);
    const dataObj = JSON.parse(data);
    return dataObj;
  });
};

const saveData = (dataToSave) => {
  fs.writeFile(DATA_FILE_PATH, JSON.parse(dataToSave), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
//saveData({ gigo: 1, miguel: 2 });

export { loadData, saveData };
