 // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Project details function
        function showProject(projectName) {
            alert(`You clicked on: ${projectName}\n\nIn a real portfolio, this would open a detailed view of the project with more images, descriptions, and live demo links.`);
        }

        // Contact form submission
        function sendMessage(event) {
            event.preventDefault();
            const form = event.target;
            const button = form.querySelector('button[type="submit"]');
            
            // Show success state
            button.textContent = 'Message Sent! ✓';
            button.style.backgroundColor = '#10b981';
            
            // Reset after 3 seconds
            setTimeout(() => {
                button.textContent = 'Send Message';
                button.style.backgroundColor = '';
                form.reset();
            }, 3000);
        }