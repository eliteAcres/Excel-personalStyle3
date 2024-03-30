const XLSX = require('xlsx');
const workbook = XLSX.readFile('data.xlsx');
const sheet_name_list = workbook.SheetNames;
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

// Write the JSON data to a file
const fs = require('fs');
fs.writeFileSync('data.json', JSON.stringify(data));

