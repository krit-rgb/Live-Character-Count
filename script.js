const textarea = document.getElementById("textInput");
const count = document.getElementById("count");
const maxLength = 150;

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    count.textContent = length;

    textarea.classList.remove("warning", "limit");

    if (length >= 120 && length < maxLength) {
        textarea.classList.add("warning");
    }

    if (length === maxLength) {
        textarea.classList.add("limit");
    }
});
