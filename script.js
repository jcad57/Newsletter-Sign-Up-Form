"use strict";

const appContainer = document.querySelector(".app-container");
const confirmationModal = document.getElementById("confirmation");
const submitButton = document.getElementById("submit-btn");
const dismissButton = document.getElementById("dismiss-btn");
const emailInput = document.getElementById("email-input");
const emailErrorNotice = document.querySelector(".email-error");
const confirmationMessage = document.querySelector(".confirmation-dialog");

submitButton.addEventListener("click", function () {
  if (!emailInput.reportValidity()) {
    emailErrorNotice.classList.remove("hidden");
    emailInput.classList.add("email-input-error-style");
  } else {
    emailInput.value = "";
    appContainer.classList.add("hidden");
    confirmationModal.classList.remove("hidden");
    confirmationMessage.innerHTML = `A confirmation email has been sent to
    <span class="accent-bold user-email">${emailInput.value}</span>. Please open it and
    click the button inside to confirm your subscription.`;
  }
});

dismissButton.addEventListener("click", function () {
  appContainer.classList.remove("hidden");
  confirmationModal.classList.add("hidden");
  console.log(confirmationModal);
});
