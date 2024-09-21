function ticTacToe(arr) {
    function checkWinner(dashboard, indicator) {
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] === indicator && dashboard[i][1] === indicator && dashboard[i][2] === indicator) {
                return true;
            }
            else if (dashboard[0][i] === indicator && dashboard[1][i] === indicator && dashboard[2][i] === indicator) {
                return true;
            }
            else if (dashboard[0][0] === indicator && dashboard[1][1] === indicator && dashboard[2][2] === indicator) {
                return true;
            }
            else if (dashboard[0][2] === indicator && dashboard[1][1] === indicator && dashboard[2][0] === indicator) {
                return true;
            }
        }
        return false;
    }

    function checkForFreeSpace(dashboard) {
        return !dashboard.flat().filter(x => !x).length;
    }

    function printDashboard(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join("\t"));
        });
    }

    let initialDashbArr = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];
    let isFirstPlayer = true;
    for (let curEl of arr) {
        let [a, b] = curEl.split(" ");
        if (initialDashbArr[a][b]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        let indicator = "";
        if (indicator == isFirstPlayer) {
            indicator = "O";
        }
        else {
            indicator = "X";
        }
        initialDashbArr[a][b] = indicator;

        if (checkForFreeSpace(initialDashbArr)) {
            console.log("The game ended! Nobody wins :(");
            return printDashboard(initialDashbArr);
        }

        if (checkWinner(initialDashbArr, indicator)) {
            console.log(`Player ${indicator} wins!`);
            return printDashboard(initialDashbArr);
        }
        isFirstPlayer = !isFirstPlayer;
    }
}
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);