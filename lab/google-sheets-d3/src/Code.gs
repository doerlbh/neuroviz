function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("D3 on Google Sheets");
}

function getData() {
  const sheetData = SpreadsheetApp.openById(/* FILL ME IN */)
    .getActiveSheet()
    .getDataRange()
    .getValues();
  const columns = sheetData.slice(0, 1)[0];
  const data = sheetData
    .slice(1)
    .map((d) => Object.fromEntries(columns.map((c, i) => [c, d[i]])));
  return JSON.stringify(data);
}
