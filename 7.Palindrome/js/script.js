/* Refs elements */

const refs = {
  textInput: document.getElementById("text-input"),
  checkButton: document.getElementById("check-btn"),
  outputText: document.getElementById("result"),
};

refs.checkButton.addEventListener("click", onCheckInput);

function onCheckInput() {
  const valueOfInput = refs.textInput.value.trim();
  if (!valueOfInput) {
    alert("Please input a value");
    return;
  }

  const result = isPalindrome(valueOfInput);
  showResult(valueOfInput, result);
}

function isPalindrome(value) {
  const cleanValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanValue === cleanValue.split("").reverse().join("");
}

function showResult(value, isPalindrome) {
  refs.outputText.classList.remove("hidden");
  refs.outputText.textContent = isPalindrome
    ? `${value} is a palindrome.`
    : `${value} is not a palindrome.`;
  refs.textInput.value = "";
}
