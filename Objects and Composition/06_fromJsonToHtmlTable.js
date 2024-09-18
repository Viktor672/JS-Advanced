function fromJsonToHtmlTable(string) {
    let arr = JSON.parse(string);
    let result = '<table>\n';
    let mainColums = Object.keys(arr[0]);
    let colums = arr.map(obj => Object.values(obj));
    function header(mainColums) {
        result += '    <tr>';
        for (const curEl of mainColums) {
            result += `<th>${escapeHTML(curEl)}</th>`;
        }
        result += '</tr>\n';
    }
    function body(colums) {
        for (const curEl of colums) {
            result += '    <tr>';
            for (const curValue of curEl) {
                result += `<td>${escapeHTML(curValue)}</td>`;
            }
            result += '</tr>\n';
        }
    }
    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/ /g, "&nbsp;");
    }
    header(mainColums);
    body(colums);
    result += '</table>';
    console.log(result);
}
fromJsonToHtmlTable('[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho", "Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]');