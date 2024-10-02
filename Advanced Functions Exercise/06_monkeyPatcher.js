function solution(input) {
    let resultArr = [];
    if (input == "upvote") {
        this.upvotes += 1;
    }
    else if (input == "downvote") {
        this.downvotes += 1;
    }
    else if (input == "score") {
        resultArr = calculateScore.call(this);
    }

    function calculateScore() {
        let positiveVotes = this.upvotes;
        let negativeVotes = this.downvotes;
        let totalVotes = positiveVotes + negativeVotes;
        let score = positiveVotes - negativeVotes;
        let rating = 'new';
        if (totalVotes > 50) {
            let number = Math.max(positiveVotes, negativeVotes) * 0.25;
            number = Math.ceil(number);
            positiveVotes += number;
            negativeVotes += number;
        }
        if (totalVotes < 10) {
            rating = 'new';
        }
        else if (this.upvotes > totalVotes * 0.66) {
            rating = 'hot';
        }
        else if (totalVotes > 100 && score >= 0) {
            rating = 'controversial';
        }
        else if (score < 0) {
            rating = 'unpopular';
        }
        return [positiveVotes, negativeVotes, score, rating];
    }

    return resultArr;
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); 
solution.call(post, 'downvote');         
score = solution.call(post, 'score');     
console.log(score);

