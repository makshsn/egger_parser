import XLSX from "xlsx";
const workbook = XLSX.readFile("./src/price/price.xlsx");
const sheet_name = workbook.SheetNames;

const cols =
  `4100 x 600 x 38 Столешницы постформинг E1E05 TSCA STL 	4100 x 920 x 38 Столешницы постформинг E1E05 TSCA STL 	4100 x 650 x 38 Столешницы Филвуд с кромкой E1E05 TSCA P2 	4100 x 920 x 38 Столешницы Филвуд с кромкой E1E05 TSCA P2 	4100 x 1200 x 38 Столешницы Филвуд с кромкой E1E05 TSCA P2 	4100 x 650 x 38 Столешницы PerfectSense Premium с кромкой матовые E1E05 TSCA STL 	4100 x 920 x 38 Столешницы PerfectSense Premium с кромкой матовые E1E05 TSCA STL 	4100 x 650 x 12 Столешницы из компакт-плиты 	4100 x 920 x 12 Столешницы из компакт-плиты 	4100 x 650 x 12 Столешницы из компакт-плиты с окрашенным внутренним слоем 	4100 x 920 x 12 Столешницы из компакт-плиты с окрашенным внутренним слоем 	4100 x 25 x 25 Пристеночные бортики 	4100 x 640 x 8 Стеновые панели `.split(
    "\t"
  );

const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name[0]]);
console.log(cols);
export { cols, xlData };
