function handleContactSubmit(event) {
  // 1. Prevent default submission and page refresh/scroll
  event.preventDefault();

  const form = event.target;
  const responseMsg = document.getElementById('formResponseMsg');
  const submitBtn = document.getElementById('submitBtn');
  const originalBtnText = submitBtn.innerHTML;

  // 2. Hide previous messages
  responseMsg.className = 'form-response-msg';
  responseMsg.style.display = 'none';

  // 3. Set current submit time
  const timeInput = document.getElementById('submission-time');
  if (timeInput) {
    timeInput.value = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium'
    });
  }

  // 4. Update button text
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending...';

  const formData = new FormData(form);

  // 5. Send data via FormSubmit AJAX Service
  fetch('https://formsubmit.co/ajax/md.rakibul0779@gmail.com', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData))
  })
  .then(response => response.json())
  .then(data => {
    if (data.success === 'true' || data.success === true) {
      responseMsg.className = 'form-response-msg success';
      responseMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully.';
      form.reset();
    } else {
      responseMsg.className = 'form-response-msg error';
      responseMsg.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Submission failed. Please check activation email.';
    }
  })
  .catch(error => {
    responseMsg.className = 'form-response-msg error';
    responseMsg.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error sending message. Please try again.';
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  });
}