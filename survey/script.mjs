let params = new URLSearchParams(document.location.search);
let ref = params.get("ref"); // is the string "Jonathan"

window.location.href = `https://yuruk.mfbeg.com/?ref=${ref === null ? "s" : ref}`;