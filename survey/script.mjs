let pageActive = 0;
const pageIndex = [pageStart,page1,page2,page3,pageEnd];
let surveyResponses = {
    q1: ""
};

update();

document.getElementById('btn-next').addEventListener('click', () => {
    pageActive += 1;
    update();
});

document.getElementById('btn-back').addEventListener('click', () => {
    pageActive -= 1;
    update();
});

function update() {
    pageActive = Math.min(Math.max(0, pageActive), pageIndex.length - 1);

    document.getElementById('survey-container').innerHTML = "";

    document.getElementById('page-counter').textContent = `Page ${pageActive}/${pageIndex.length - 2}`;
    document.getElementById('btn-next').textContent = "Next";
    document.getElementById('btn-next').disabled = pageActive === pageIndex.length - 1;
    document.getElementById('btn-back').textContent = "Back";
    document.getElementById('btn-back').disabled = pageActive === 0;
    
    pageIndex[pageActive]();
};

function pageStart() {
    document.getElementById('survey-container').innerHTML = `
    <h1>Students, we want your feedback!</h1>
    <br>
    <p>Is BCIT doing enough to make life affordable for you? This survey is an opportunity to make your voice heard! In it, we'll ask you a few brief questions about affordability on campus. To help us advocate for student needs, please answer each question thoughtfully and to the best of your ability.</p>
    <br>
    <hr>
    <br>
    <h2>$100.00 in cash prizes available!</h2>
    <br>
    <p>All eligible* students who complete this survey will be automatically entered into a draw for a <strong>$50.00 CAD cash prize!</strong></p>
    <br>
    <p><strong>AND,</strong> all eligible* students who help share this survey will have a chance to win an additional <strong>$50.00 CAD cash prize!</strong> (More info after the survey.)</p>
    <br>
    <p><small>*To be eligible, you must (1) be currently enrolled in any program or course at the British Columbia Institute of Technology, and (2) provide only truthful and accurate survey responses. All winners will be checked to ensure they are eligible.</small></p>
    <br>
    <hr>
    <br>
    <p>When you're ready to begin the survey, please click <strong>Start...</strong></p>
    `;

    document.getElementById('page-counter').textContent = `Total pages: ${pageIndex.length - 2}`;
    document.getElementById('btn-next').textContent = "Start";
};

function page1() {
    document.getElementById('survey-container').innerHTML = `
    <h2>Are you currently enrolled in any program or course at BCIT?</h2>
    <br>
    <div class="radio-group">
        <label>
            <input type="radio" name="q" value="yes"> Yes
        </label>
        <label>
            <input type="radio" name="q" value="no"> No
        </label>
    </div>
    `;

    if(surveyResponses.q1) document.querySelector(`input[name="q"][value="${surveyResponses.q1}"]`).checked = true;
    document.querySelectorAll('input[name="q"]').forEach(radio => {
        radio.addEventListener('change', () => {
            surveyResponses.q1 = radio.value;
            update();
        });
    }); 

    document.getElementById('btn-next').disabled = pageActive === pageIndex.length - 1;
};

function page2() {
};

function page3() {
    document.getElementById('btn-next').textContent = "Submit";
};

function pageEnd() {
    document.getElementById('page-counter').textContent = "Submitted";
    document.getElementById('btn-back').disabled = true;
};