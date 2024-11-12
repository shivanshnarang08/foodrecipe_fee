let baseServings = 12;
        let currentServings = 12;

        function adjustServings(change) {
            currentServings = Math.max(1, currentServings + change);
            document.getElementById('servings').textContent = currentServings;
            
            // Update ingredient amounts
            const amounts = document.querySelectorAll('.amount');
            amounts.forEach(amount => {
                const baseAmount = parseFloat(amount.dataset.base);
                const newAmount = (baseAmount * currentServings / baseServings).toFixed(2);
                amount.textContent = newAmount;
            });
        }

        // Timer functionality
        let timerInterval;
        let timeLeft = 12 * 60; // 12 minutes in seconds

        function startTimer() {
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    alert('Timer finished! Your cookies are ready!');
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(timerInterval);
            timeLeft = 12 * 60;
            updateTimerDisplay();
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('timer-display').textContent = 
                `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }