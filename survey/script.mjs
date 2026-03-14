// survey page definitions

const surveyData = {
    q1: "",
    q2: [],
    q3: "",
    q4: "",
    q5a: [],
    q5b: [],
    q5c: [],
    q5d: [],
    name: "",
    email: ""
};

const pageIndex = [
    pageStart,
    pageQ1,
    pageQ2,
    pageQ3,
    pageQ4,
    pageQ5,
    pageSubmit,
    pageEnd
];

function pageDefault() {
    onLoad(() => {
        console.log("Page loaded.")
        document.getElementById('page-counter').textContent = `Page ${pageActive}/${pageIndex.length - 2}`;
        document.getElementById('btn-next').textContent = "Next";
        document.getElementById('btn-next').disabled = pageActive === pageIndex.length - 1;
        document.getElementById('btn-back').textContent = "Back";
        document.getElementById('btn-back').disabled = pageActive === 0;
        document.getElementById('survey-container').innerHTML = `
        <p>Default page content.</p>
        `;
    });
};

function pageStart() {
    onLoad(() => {
        document.getElementById('page-counter').textContent = `Total pages: ${pageIndex.length - 2}`;
        document.getElementById('btn-next').textContent = "Start";
        document.getElementById('survey-container').innerHTML = `
        <h1>BCIT students, we want your feedback!</h1>
        <br>
        <p>Is BCIT doing enough to make life affordable for you? This survey is an opportunity to make your voice heard! We have a few brief questions to ask you about affordability on campus; please answer thoughtfully and to the best of your ability.</p>
        <br>
        <hr>
        <br>
        <h1>Win up to $100.00 CAD in cash!</h1>
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
    });
};

function pageQ1() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>Question 1: Are you currently enrolled as a student in any program or course at BCIT?</h2>
        <br>
        <p>Select one (must be a student):</p>
        <div class="radio-group">
            <label>
                <input type="radio" name="question" value="yes"> Yes
            </label>
            <label>
                <input type="radio" name="question" value="no"> No
            </label>
        </div>
        `;
        handlerRadio("question", "q1");
    });

    document.getElementById('btn-next').disabled = surveyData.q1 !== "yes";
};

function pageQ2() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>Question 2: Which BCIT campus/campuses do you study at?</h2>
        <br>
        <p>Select all that apply:</p>
        <div class="checkbox-group">
            <label>
                <input type="checkbox" name="question" value="burnaby"> Burnaby Campus
            </label>
            <label>
                <input type="checkbox" name="question" value="vancouver"> Downtown Vancouver Campus
            </label>
            <label>
                <input type="checkbox" name="question" value="richmond"> Aerospace Technology Campus, Richmond
            </label>
            <label>
                <input type="checkbox" name="question" value="north_vancouver"> Marine Campus, North Vancouver
            </label>
            <label>
                <input type="checkbox" name="question" value="delta"> Annacis Island Campus, Delta
            </label>
            <label>
                <input type="checkbox" name="question" value="other"> Other
            </label>
        </div>
        `;
        handlerCheckbox("question", "q2");
    });

    document.getElementById('btn-next').disabled = surveyData.q2.length === 0;
};

function pageQ3() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>Question 3: How many times have you paid for food from <u>restaurants or stores on campus</u> in the last 7 days?</h2>
        <br>
        <p>Number of times:</p>
        <input type="text" name="question" placeholder="Type here...">
        `;
        handlerText("question", "q3");
    });

    document.getElementById('btn-next').disabled = !(surveyData.q3 !== "" && !isNaN(surveyData.q3) && Number.isInteger(parseFloat(surveyData.q3)) && surveyData.q3 >= 0);
};

function pageQ4() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>Question 4: How much money in total have you paid for food from <u>restaurants or stores on campus</u> in the last 7 days?</h2>
        <br>
        <p>Total money spent ($CAD):</p>
        <input type="text" name="question" placeholder="Type here...">
        `;
        handlerText("question", "q4");
    });

    document.getElementById('btn-next').disabled = !(surveyData.q4 !== "" && !isNaN(surveyData.q4) && surveyData.q4 >= 0);
};

function pageQ5() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>Question 5: How concerned are you about the following aspects of <u>restaurants or stores on campus</u>?</h2>
        <br>
        <p>Select a concern level for each:</p>
        <div class="likert-row">
            <span><strong>Too expensive</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5a" value="3"> Very</label>
                <label><input type="radio" name="q5a" value="2"> Somewhat</label>
                <label><input type="radio" name="q5a" value="1"> Not at all</label>
            </div>
        </div>
        <div class="likert-row">
            <span><strong>Too expensive</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5a" value="1"> Very</label>
                <label><input type="radio" name="q5a" value="2"> Somewhat</label>
                <label><input type="radio" name="q5a" value="3"> Not at all</label>
            </div>
        </div>
        `;
    });

    document.getElementById('btn-next').disabled = !(surveyData.q4 !== "" && !isNaN(surveyData.q4) && surveyData.q4 >= 0);
};

function pageSubmit() {
    onLoad(() => {
        document.getElementById('btn-next').textContent = "Submit";
        document.getElementById('survey-container').innerHTML = `
        <h2>Contact Information</h2>
        <br>
        <p>Please provide your name and student email. These are required so we can reach out to you if you win one of the cash prizes.</p>
        <br>
        <hr>
        <br>
        <p>First and last name:</p>
        <input type="text" name="name" placeholder="Type here...">
        <br>
        <p>Student email address (ending in @my.bcit.ca):</p>
        <input type="text" name="email" placeholder="Type here...">
        `;
        handlerText("name", "name");
        handlerText("email", "email");
    });

    document.getElementById('btn-next').disabled = !(surveyData.name !== "" && surveyData.email.length > 11 && surveyData.email.slice(-11) === "@my.bcit.ca");
};

function pageEnd() {
    onLoad(() => {
        document.getElementById('page-counter').textContent = "Submitted";
        document.getElementById('btn-back').disabled = true;
    });
};



// functional definitions

let pageActive = 5;
let pageLast;
function onLoad(callback = () => {}) { if(pageLast !== pageActive) callback(); };
function onLoadEnd() { pageLast = pageActive; };

document.getElementById('btn-next').addEventListener('click', () => {
    pageActive += 1;
    onUpdate();
});

document.getElementById('btn-back').addEventListener('click', () => {
    pageActive -= 1;
    onUpdate();
});

function handlerRadio(name = "", index = "") {
    try { document.querySelector(`input[name="${name}"][value="${surveyData[index]}"]`).checked = true; } catch {};
    document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
        radio.addEventListener('change', () => {
            surveyData[index] = radio.value;
            onUpdate();
        });
    });
};

function handlerCheckbox(name = "", index = "") {
    try { surveyData[index].forEach(value => { document.querySelector(`input[name="${name}"][value="${value}"]`).checked = true; }); } catch {}
    document.querySelectorAll(`input[name="${name}"]`).forEach(cb => {
        cb.addEventListener('change', () => {
            surveyData[index] = [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(cb => cb.value);
            onUpdate();
        });
    });
};

function handlerText(name = "", index = "") {
    try { document.querySelector(`input[name="${name}"]`).value = surveyData[index]; } catch {}
    document.querySelector(`input[name="${name}"]`).addEventListener('input', () => {
        surveyData[index] = document.querySelector(`input[name="${name}"]`).value;
        onUpdate();
    });
};

function onUpdate() {
    console.log("Page updated.")

    pageActive = Math.min(Math.max(0, pageActive), pageIndex.length - 1);

    pageDefault();
    pageIndex[pageActive]();

    onLoadEnd();
};

onUpdate();