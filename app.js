// Game State Management
class GeoTrainGame {
    constructor() {
        this.currentMode = null;
        this.currentLevel = 1;
        this.currentScore = 0;
        this.currentQuestion = null;
        this.map = null;
        this.satelliteLayer = null;
        this.streetLayer = null;
        this.currentLayer = null;
        this.progress = this.loadProgress();
        this.usedItems = [];
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        
        this.initializeUI();
        this.updateProgressDisplay();
    }

    initializeUI() {
        // Game mode selection
        document.querySelectorAll('.game-mode-card button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.target.closest('.game-mode-card').dataset.mode;
                this.startGame(mode);
            });
        });

        // Back button
        document.getElementById('back-btn').addEventListener('click', () => {
            this.returnToHome();
        });

        // Next button
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Map controls
        document.getElementById('satellite-toggle').addEventListener('click', () => {
            this.toggleMapLayer();
        });

        document.getElementById('reset-view').addEventListener('click', () => {
            this.resetMapView();
        });
    }

    startGame(mode) {
        this.currentMode = mode;
        this.currentLevel = 1;
        this.currentScore = 0;
        this.usedItems = [];
        this.correctAnswers = 0;
        this.totalQuestions = 0;

        // Update UI
        document.getElementById('home-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        
        const modeTitle = mode === 'states' ? 'Which State Is This?' : 'Which City Is This?';
        document.getElementById('game-mode-title').textContent = modeTitle;
        document.getElementById('current-score').textContent = this.currentScore;

        // Initialize map
        this.initializeMap();
        
        // Start first question
        this.nextQuestion();
    }

    initializeMap() {
        if (this.map) {
            this.map.remove();
        }

        // Create map centered on India
        this.map = L.map('map').setView([20.5937, 78.9629], 5);

        // Street view layer (OpenStreetMap)
        this.streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        });

        // Satellite layer (OpenStreetMap alternative - Esri WorldImagery)
        this.satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles © Esri',
            maxZoom: 19
        });

        // Start with street layer
        this.currentLayer = this.streetLayer;
        this.streetLayer.addTo(this.map);
    }

    toggleMapLayer() {
        const btn = document.getElementById('satellite-toggle');
        
        if (this.currentLayer === this.streetLayer) {
            this.map.removeLayer(this.streetLayer);
            this.satelliteLayer.addTo(this.map);
            this.currentLayer = this.satelliteLayer;
            btn.textContent = '🗺️ Street';
        } else {
            this.map.removeLayer(this.satelliteLayer);
            this.streetLayer.addTo(this.map);
            this.currentLayer = this.streetLayer;
            btn.textContent = '📡 Satellite';
        }
    }

    resetMapView() {
        if (this.currentQuestion) {
            if (this.currentMode === 'states') {
                const bounds = this.currentQuestion.bounds;
                this.map.fitBounds(bounds);
            } else {
                this.map.setView(this.currentQuestion.coordinates, 12);
            }
        } else {
            this.map.setView([20.5937, 78.9629], 5);
        }
    }

    nextQuestion() {
        this.totalQuestions++;
        
        // Hide info section, show question section
        document.getElementById('info-section').style.display = 'none';
        document.getElementById('question-section').style.display = 'block';
        document.getElementById('feedback-section').style.display = 'none';

        // Get available items
        const allItems = this.currentMode === 'states' ? indianStates : indianCities;
        const availableItems = allItems.filter(item => !this.usedItems.includes(item.name));

        // If all items used, reset and increase level
        if (availableItems.length === 0) {
            this.currentLevel++;
            this.usedItems = [];
            document.getElementById('level-info').textContent = `Level ${this.currentLevel}`;
            return this.nextQuestion();
        }

        // Select random item
        this.currentQuestion = availableItems[Math.floor(Math.random() * availableItems.length)];
        this.usedItems.push(this.currentQuestion.name);

        // Display on map
        this.displayOnMap(this.currentQuestion);

        // Generate choices
        this.generateChoices(this.currentQuestion);

        // Update question text
        const questionText = this.currentMode === 'states' 
            ? 'Which state is highlighted on the map?' 
            : 'Which city is marked on the map?';
        document.getElementById('question-text').textContent = questionText;
    }

    displayOnMap(item) {
        // Clear existing markers and layers
        this.map.eachLayer(layer => {
            if (layer !== this.streetLayer && layer !== this.satelliteLayer) {
                this.map.removeLayer(layer);
            }
        });

        if (this.currentMode === 'states') {
            // For states, show bounds and fit to them
            const bounds = item.bounds;
            
            // Create a rectangle to highlight the state
            const rectangle = L.rectangle(bounds, {
                color: '#667eea',
                weight: 3,
                fillColor: '#667eea',
                fillOpacity: 0.3
            }).addTo(this.map);

            // Add a marker at the center
            L.marker(item.center).addTo(this.map)
                .bindPopup(`<b>State Location</b><br>Identify this state!`);

            // Fit map to bounds
            this.map.fitBounds(bounds);
        } else {
            // For cities, add a marker
            const marker = L.marker(item.coordinates).addTo(this.map)
                .bindPopup(`<b>City Location</b><br>Identify this city!`)
                .openPopup();

            // Center on the city
            this.map.setView(item.coordinates, 12);
        }
    }

    generateChoices(correctItem) {
        const allItems = this.currentMode === 'states' ? indianStates : indianCities;
        const choices = [correctItem];

        // Add 3 random wrong answers
        while (choices.length < 4) {
            const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
            if (!choices.includes(randomItem)) {
                choices.push(randomItem);
            }
        }

        // Shuffle choices
        choices.sort(() => Math.random() - 0.5);

        // Display choices
        const container = document.getElementById('choices-container');
        container.innerHTML = '';

        choices.forEach(item => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = item.name;
            button.addEventListener('click', () => this.checkAnswer(item, correctItem, button));
            container.appendChild(button);
        });
    }

    checkAnswer(selected, correct, button) {
        // Disable all buttons
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.disabled = true;
        });

        const isCorrect = selected.name === correct.name;

        if (isCorrect) {
            button.classList.add('correct');
            this.correctAnswers++;
            this.currentScore += 10 * this.currentLevel;
            this.showFeedback(true);
            
            // Update progress
            if (this.currentMode === 'states') {
                if (!this.progress.statesMastered.includes(correct.name)) {
                    this.progress.statesMastered.push(correct.name);
                }
            } else {
                if (!this.progress.citiesDiscovered.includes(correct.name)) {
                    this.progress.citiesDiscovered.push(correct.name);
                }
            }
            
            this.progress.totalScore = Math.max(this.progress.totalScore, this.currentScore);
            this.saveProgress();
        } else {
            button.classList.add('incorrect');
            // Highlight the correct answer
            document.querySelectorAll('.choice-btn').forEach(btn => {
                if (btn.textContent === correct.name) {
                    btn.classList.add('correct');
                }
            });
            this.showFeedback(false);
        }

        // Update score display
        document.getElementById('current-score').textContent = this.currentScore;

        // Show info after a delay
        setTimeout(() => {
            this.showInfo(correct);
        }, 1500);
    }

    showFeedback(isCorrect) {
        const feedbackSection = document.getElementById('feedback-section');
        const feedbackMessage = feedbackSection.querySelector('.feedback-message');
        
        feedbackSection.style.display = 'block';
        feedbackMessage.className = 'feedback-message ' + (isCorrect ? 'correct' : 'incorrect');
        feedbackMessage.textContent = isCorrect ? '✓ Correct! Well done!' : '✗ Incorrect. Try again next time!';

        setTimeout(() => {
            feedbackSection.style.display = 'none';
        }, 1500);
    }

    showInfo(item) {
        // Hide question, show info
        document.getElementById('question-section').style.display = 'none';
        document.getElementById('info-section').style.display = 'block';

        // Populate info
        document.getElementById('info-title').textContent = item.name;

        let infoHTML = `
            <div class="info-item">
                <strong>Description:</strong>
                ${item.description}
            </div>
        `;

        if (this.currentMode === 'states') {
            infoHTML += `
                <div class="info-item">
                    <strong>Capital:</strong>
                    ${item.capital}
                </div>
                <div class="info-item">
                    <strong>Population:</strong>
                    ${item.population}
                </div>
            `;
        } else {
            infoHTML += `
                <div class="info-item">
                    <strong>State:</strong>
                    ${item.state}
                </div>
                <div class="info-item">
                    <strong>Population:</strong>
                    ${item.population}
                </div>
            `;
        }

        infoHTML += `
            <div class="info-item">
                <strong>Fun Facts:</strong>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    ${item.funFacts.map(fact => `<li style="margin-bottom: 8px;">${fact}</li>`).join('')}
                </ul>
            </div>
        `;

        document.getElementById('info-content').innerHTML = infoHTML;
    }

    returnToHome() {
        document.getElementById('game-screen').classList.remove('active');
        document.getElementById('home-screen').classList.add('active');
        
        if (this.map) {
            this.map.remove();
            this.map = null;
        }

        this.updateProgressDisplay();
    }

    updateProgressDisplay() {
        document.getElementById('states-mastered').textContent = 
            `${this.progress.statesMastered.length}/${indianStates.length}`;
        document.getElementById('cities-discovered').textContent = 
            `${this.progress.citiesDiscovered.length}/${indianCities.length}`;
        document.getElementById('total-score').textContent = this.progress.totalScore;
    }

    loadProgress() {
        const saved = localStorage.getItem('geoTrainProgress');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            statesMastered: [],
            citiesDiscovered: [],
            totalScore: 0
        };
    }

    saveProgress() {
        localStorage.setItem('geoTrainProgress', JSON.stringify(this.progress));
        this.updateProgressDisplay();
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new GeoTrainGame();
});
