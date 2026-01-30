const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const counterDiv = document.querySelector(".counter");

const maxLength = 200;

textInput.addEventListener("input", () => {
    const currentLength = textInput.value.length;
    charCount.textContent = currentLength;

    counterDiv.classList.remove("warning", "limit");

    if (currentLength >= maxLength * 0.8 && currentLength < maxLength) {
        counterDiv.classList.add("warning");
    }

    if (currentLength === maxLength) {
        counterDiv.classList.add("limit");
    }
});
