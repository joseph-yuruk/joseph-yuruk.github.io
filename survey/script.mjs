// survey page definitions

const surveyData = {
    q1: [],
    q2: [],
    q3: "",
    q4: "",
    q5a: "", q5b: "", q5c: "", q5d: "", q5e: "", q5f: "", q5g: "", q5h: "",
    q6: "",
    name: "",
    email: "",
    consent: [],
    refFrom: "",
    refTo: ""
};

const pageIndex = [
    pStart,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    pSubmit,
    pEnd
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

function pStart() {
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
        <h2>Win up to $100.00 CAD in cash!</h2>
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

function p1() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>Are you currently enrolled as a student in a program or course at BCIT?</h2>
        <br>
        <p>Check the following:</p>
        <div class="checkbox-group">
            <label>
                <input type="checkbox" name="q1" value="student"> I am currently enrolled as a student in a program or course at BCIT.
            </label>
        </div>
        `;
        handlerCheckbox("q1", "q1");
    });

    document.getElementById('btn-next').disabled = surveyData.q1.length === 0;
};

function p2() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>Which BCIT campus/campuses do you study at?</h2>
        <br>
        <p>Select all that apply:</p>
        <div class="checkbox-group">
            <label>
                <input type="checkbox" name="q2" value="burnaby"> Burnaby Campus
            </label>
            <label>
                <input type="checkbox" name="q2" value="vancouver"> Downtown Vancouver Campus
            </label>
            <label>
                <input type="checkbox" name="q2" value="richmond"> Aerospace Technology Campus, Richmond
            </label>
            <label>
                <input type="checkbox" name="q2" value="north_vancouver"> Marine Campus, North Vancouver
            </label>
            <label>
                <input type="checkbox" name="q2" value="delta"> Annacis Island Campus, Delta
            </label>
            <label>
                <input type="checkbox" name="q2" value="other"> Other
            </label>
        </div>
        `;
        handlerCheckbox("q2", "q2");
    });

    document.getElementById('btn-next').disabled = surveyData.q2.length === 0;
};

function p3() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>How many times did you spend money at <u>restaurants or stores on campus</u> in your <u>most recent full week at school</u>?</h2>
        <br>
        <p>Number of times (an estimation is alright):</p>
        <input type="text" name="q3" placeholder="Type here...">
        `;
        handlerText("q3", "q3");
    });

    document.getElementById('btn-next').disabled = !(surveyData.q3 !== "" && !isNaN(surveyData.q3) && Number.isInteger(parseFloat(surveyData.q3)) && surveyData.q3 >= 0);
};

function p4() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>How much money in total did you spent at <u>restaurants or stores on campus</u> in your <u>most recent full week at school</u>?</h2>
        <br>
        <p>Total money spent ($CAD) (an estimation is alright):</p>
        <input type="text" name="q4" placeholder="Type here...">
        `;
        handlerText("q4", "q4");
    });

    document.getElementById('btn-next').disabled = !(surveyData.q4 !== "" && !isNaN(surveyData.q4) && surveyData.q4 >= 0);
};

function p5() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>On a scale of 1-5, rate the following aspects of <u>restaurants or stores on campus</u>...</h2>
        <br>
        <p>Rate for each aspect from 5 (very good) to 1 (very bad):</p>
        <div class="likert-row">
            <span><strong>Food pricing</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5a" value="5"> 5</label>
                <label><input type="radio" name="q5a" value="4"> 4</label>
                <label><input type="radio" name="q5a" value="3"> 3</label>
                <label><input type="radio" name="q5a" value="2"> 2</label>
                <label><input type="radio" name="q5a" value="1"> 1</label>
                <label><input type="radio" name="q5a" value="0"> No opinion</label>
            </div>
        </div>
        <div class="likert-row">
            <span><strong>Food quality</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5b" value="5"> 5</label>
                <label><input type="radio" name="q5b" value="4"> 4</label>
                <label><input type="radio" name="q5b" value="3"> 3</label>
                <label><input type="radio" name="q5b" value="2"> 2</label>
                <label><input type="radio" name="q5b" value="1"> 1</label>
                <label><input type="radio" name="q5b" value="0"> No opinion</label>
            </div>
        </div>
        <div class="likert-row">
            <span><strong>Food choice variety</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5c" value="5"> 5</label>
                <label><input type="radio" name="q5c" value="4"> 4</label>
                <label><input type="radio" name="q5c" value="3"> 3</label>
                <label><input type="radio" name="q5c" value="2"> 2</label>
                <label><input type="radio" name="q5c" value="1"> 1</label>
                <label><input type="radio" name="q5c" value="0"> No opinion</label>
            </div>
        </div>
        <div class="likert-row">
            <span><strong>Dietary accomodations</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5d" value="5"> 5</label>
                <label><input type="radio" name="q5d" value="4"> 4</label>
                <label><input type="radio" name="q5d" value="3"> 3</label>
                <label><input type="radio" name="q5d" value="2"> 2</label>
                <label><input type="radio" name="q5d" value="1"> 1</label>
                <label><input type="radio" name="q5d" value="0"> No opinion</label>
            </div>
        </div>
        <div class="likert-row">
            <span><strong>Wait times</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5e" value="5"> 5</label>
                <label><input type="radio" name="q5e" value="4"> 4</label>
                <label><input type="radio" name="q5e" value="3"> 3</label>
                <label><input type="radio" name="q5e" value="2"> 2</label>
                <label><input type="radio" name="q5e" value="1"> 1</label>
                <label><input type="radio" name="q5e" value="0"> No opinion</label>
            </div>
        </div>
        <div class="likert-row">
            <span><strong>Hours of operation</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5f" value="5"> 5</label>
                <label><input type="radio" name="q5f" value="4"> 4</label>
                <label><input type="radio" name="q5f" value="3"> 3</label>
                <label><input type="radio" name="q5f" value="2"> 2</label>
                <label><input type="radio" name="q5f" value="1"> 1</label>
                <label><input type="radio" name="q5f" value="0"> No opinion</label>
            </div>
        </div>
        <div class="likert-row">
            <span><strong>Online ordering</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5g" value="5"> 5</label>
                <label><input type="radio" name="q5g" value="4"> 4</label>
                <label><input type="radio" name="q5g" value="3"> 3</label>
                <label><input type="radio" name="q5g" value="2"> 2</label>
                <label><input type="radio" name="q5g" value="1"> 1</label>
                <label><input type="radio" name="q5g" value="0"> No opinion</label>
            </div>
        </div>
        <div class="likert-row">
            <span><strong>Staff</strong></span>
            <div class="radio-group radio-horizontal">
                <label><input type="radio" name="q5h" value="5"> 5</label>
                <label><input type="radio" name="q5h" value="4"> 4</label>
                <label><input type="radio" name="q5h" value="3"> 3</label>
                <label><input type="radio" name="q5h" value="2"> 2</label>
                <label><input type="radio" name="q5h" value="1"> 1</label>
                <label><input type="radio" name="q5h" value="0"> No opinion</label>
            </div>
        </div>
        `;
        handlerRadio("q5a", "q5a");
        handlerRadio("q5b", "q5b");
        handlerRadio("q5c", "q5c");
        handlerRadio("q5d", "q5d");
        handlerRadio("q5e", "q5e");
        handlerRadio("q5f", "q5f");
        handlerRadio("q5g", "q5g");
        handlerRadio("q5h", "q5h");
    });

    document.getElementById('btn-next').disabled = !(surveyData.q5a && surveyData.q5b && surveyData.q5c && surveyData.q5d && surveyData.q5e && surveyData.q5f && surveyData.q5g && surveyData.q5h);
};

function p6() {
    onLoad(() => {
        document.getElementById('survey-container').innerHTML = `
        <h2>Do you have any specific concerns about <u>restaurants or stores on campus</u>?</h2>
        <br>
        <p>Specific concerns (optional):</p>
        <input type="text" name="q6" placeholder="Type here...">
        `;
        handlerText("q6", "q6");
    });
};

function pSubmit() {
    onLoad(() => {
        document.getElementById('btn-next').textContent = "Submit";
        document.getElementById('survey-container').innerHTML = `
        <h2>Contact Information</h2>
        <br>
        <p>Your contact information is needed if you want to be entered into the prize draws.</p>
        <br>
        <hr>
        <br>
        <p>Full name:</p>
        <input type="text" name="name" placeholder="Type here...">
        <br>
        <p>Student email address (ending in @my.bcit.ca):</p>
        <input type="text" name="email" placeholder="Type here...">
        <br>
        <p>Check the following:</p>
        <div class="checkbox-group">
            <label>
                <input type="checkbox" name="consent" value="receive_emails"> I consent to receiving emails from the Yuruk-Davidson Campaign (the organisers of this survey).
            </label>
        </div>
        `;
        handlerText("name", "name");
        handlerText("email", "email");
        handlerCheckbox("consent", "consent");
    });

    document.getElementById('btn-next').disabled = !(surveyData.consent.length === 1 && surveyData.name !== "" && surveyData.email.length > 11 && surveyData.email.slice(-11) === "@my.bcit.ca" && !surveyData.email.includes(" "));
};

function pEnd() {
    const params = new URLSearchParams(window.location.search);
    
    surveyData.refFrom = params.get('ref');
    surveyData.refTo = hash(surveyData.email);

    onLoad(() => {
        document.getElementById('page-counter').textContent = "Submitted!";
        document.getElementById('btn-back').disabled = true;
        document.getElementById('survey-container').innerHTML = `
        <h1>Thank You!</h1>
        <br>
        <p>Your responses have been submitted, and you have been entered into the draw for the <strong>$50.00 CAD cash prize!</strong> If you are interested in the additional draw, please read below...</p>
        <br>
        <hr>
        <br>
        <h2>Share this survey to enter the additional draw!</h2>
        <br>
        <p>Want to be entered into the additional <strong>$50.00 CAD cash prize</strong> draw? You'll receive <strong>1 additional bonus entry</strong> for <strong><u>each</u></strong> eligible* student who completes this survey using your personalised referral link below!</p>
        <br>
        <div class="copy-box">
            <input type="text" id="copy-input" readonly value="https://www.yuruk.ca/survey/?ref=${surveyData.refTo}">
            <button class="btn-alt" id="copy-btn" onclick="navigator.clipboard.writeText(document.getElementById('copy-input').value);document.getElementById('copy-btn').textContent = 'Link Copied!'">Copy Link</button>
        </div>
        <br>
        <p><small>*To be eligible, you must (1) be currently enrolled in any program or course at the British Columbia Institute of Technology, and (2) provide only truthful and accurate survey responses. All winners will be checked to ensure they are eligible.</small></p>
        `;
        surveyDataSend();
    });
};



// functional definitions

let pageActive = 7;
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
    try { docut.querySelector(`input[name="${name}"][value="${surveyData[index]}"]`).checked = true; } catch {};
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

function hash(email) {
    let hash = 0;
    const str = email.toLowerCase().trim();
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash).toString().padStart(10, '0');
};

async function surveyDataSend() {
    console.log(JSON.stringify(surveyData));
    await fetch('https://script.google.com/macros/s/AKfycbytf65dpvHm-eJSHfLXgOa4FiZbC8Qa3IvxgoVuj_NwQOZbHRvWGTaeiskMvd3L-MMS/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ data: JSON.stringify(surveyData) })
    });
};

onUpdate();