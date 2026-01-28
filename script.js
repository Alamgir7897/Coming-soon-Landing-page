
window.addEventListener('load', function () {

  function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    function updateCountdown() {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
      } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
      }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  startCountdown();

 
  document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();

    if (email) {
      alert('Thank you for subscribing! We will notify you when we launch');
      emailInput.value = '';
    }
  });

});