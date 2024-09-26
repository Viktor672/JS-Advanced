function solve() {
    let correct = 0
    let inCorrect = 0

    let mapperObj = {
        'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
        'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
        'Question #3: What is DOM?': 'A programming API for HTML and XML documents'
    }

    let questionEls = document.querySelectorAll('h2');
    let sectionArr = Array.from(document.querySelectorAll('section'));

    for (let i = 0; i < questionEls.length; i++) {
        let curQuestion = questionEls[i].textContent
        let buttonEls = sectionArr[i].querySelectorAll('p');
        for (curEl of buttonEls) {
            curEl.addEventListener('click', clickAnswer)
        }

        function clickAnswer(event) {
            if (event.currentTarget.textContent === mapperObj[curQuestion]) {
                correct += 1;
                if (i < 2) {
                    sectionArr[i].style.display = 'none';
                    sectionArr[i + 1].style.display = 'block';

                }
            } else {
                if (i < 2) {
                    sectionArr[i].style.display = 'none';
                    sectionArr[i + 1].style.display = 'block';
                }
            }

            if (i === 2) {
                if (correct === 3) {
                    let resultEl = document.querySelectorAll('.results-inner')[0].children;
                    resultEl[0].textContent = 'You are recognized as top JavaScript fan!';
                    sectionArr[i].style.display = 'none';
                    document.getElementById('results').style.display = 'block';
                } else {
                    let resultEl = document.querySelectorAll('.results-inner')[0].children;
                    resultEl[0].textContent = `You have ${correct} right answers`;
                    sectionArr[i].style.display = 'none';
                    document.getElementById('results').style.display = 'block';
                }
            }
        }
    }
}