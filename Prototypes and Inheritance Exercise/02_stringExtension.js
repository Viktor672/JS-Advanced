(function stringExtension() {
    String.prototype.ensureStart = function(str) {
        if (this.startsWith(str)) {
            return this.toString();
        }

        return str + this;
    }

    String.prototype.ensureEnd = function(str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this + str;
    }

    String.prototype.isEmpty = function() {
        return this.length === 0;
    }

    String.prototype.truncate = function(n) {
        if (n < 4) {
            return ".".repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        if (!this.includes(" ")) {
            return this.substring(0, n - 3) + "...";
        }

        let wordsArr = this.split(" ");
        let result = this + "...";

        while (result.length > n) {
            wordsArr.pop();
            result = wordsArr.join(" ") + "...";
        }

        return result;
    }

    String.format = function(string, ...args) {
        args.forEach(arg => {
            string = string.replace(/{\d+}/, arg);
        });

        return string;
    }
})();