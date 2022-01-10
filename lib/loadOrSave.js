const fs = require("fs")

const DATA_FILE_PATH = ""

const loadData = () => {
  fs.readFile(DATA_FILE_PATH, "utf8", (err, data) => {
    if (err) {
      return
    }

    const dataObj = JSON.parse(data)

    return dataObj
  })
}

const saveData = (dataToSave) => {
  fs.writeFile(DATA_FILE_PATH, JSON.parse(dataToSave), (err) => {
    if (err) {
      return
    }
  })
}

export { loadData, saveData }
