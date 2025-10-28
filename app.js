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
        this.currentDifficulty = 'easy';
        this.hintsRemaining = 3;
        this.currentStreak = 0;
        this.timer = null;
        this.timeRemaining = 0;
        this.soundEnabled = true;
        this.levelStats = {
            correct: 0,
            total: 0,
            startTime: null
        };
        
        this.initializeUI();
        this.updateProgressDisplay();
        this.checkAchievements();
    }

    initializeUI() {
        // Game mode selection
        document.querySelectorAll('.game-mode-card button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.target.closest('.game-mode-card').dataset.mode;
                this.showDifficultyModal(mode);
            });
        });

        // Difficulty selection
        document.querySelectorAll('.difficulty-card button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const difficulty = e.target.closest('.difficulty-card').dataset.difficulty;
                this.selectDifficulty(difficulty);
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

        // Dark mode toggle
        document.getElementById('dark-mode-toggle').addEventListener('click', () => {
            this.toggleDarkMode();
        });

        // Hint button
        document.getElementById('hint-btn').addEventListener('click', () => {
            this.useHint();
        });

        // Statistics button
        document.getElementById('view-stats-btn').addEventListener('click', () => {
            this.showStatistics();
        });

        // Export progress button
        document.getElementById('export-progress-btn').addEventListener('click', () => {
            this.exportProgress();
        });

        // Reset progress button
        document.getElementById('reset-progress-btn').addEventListener('click', () => {
            this.resetProgress();
        });

        // Close stats button
        const closeStatsBtn = document.getElementById('close-stats-btn');
        if (closeStatsBtn) {
            closeStatsBtn.addEventListener('click', () => {
                this.closeStatistics();
            });
        }

        // View all achievements
        document.getElementById('view-all-achievements').addEventListener('click', () => {
            this.showAllAchievements();
        });

        // Close modals
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.modal').classList.remove('active');
            });
        });
    }

    showDifficultyModal(mode) {
        this.pendingMode = mode;
        document.getElementById('difficulty-modal').classList.add('active');
    }

    selectDifficulty(difficulty) {
        this.currentDifficulty = difficulty;
        document.getElementById('difficulty-modal').classList.remove('active');
        this.startGame(this.pendingMode);
    }

    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        const btn = document.getElementById('dark-mode-toggle');
        btn.textContent = isDark ? '☀️' : '🌙';
    }

    useHint() {
        if (this.hintsRemaining <= 0 || !this.currentQuestion) return;
        
        this.hintsRemaining--;
        document.getElementById('hints-remaining').textContent = this.hintsRemaining;
        
        // Deduct points for using hint
        const pointDeduction = 5 * difficultyLevels[this.currentDifficulty].pointsMultiplier;
        this.currentScore = Math.max(0, this.currentScore - pointDeduction);
        document.getElementById('current-score').textContent = this.currentScore;
        
        // Show hint based on mode
        let hintText = '';
        if (this.currentMode === 'states') {
            hintText = `💡 Hint: The capital is ${this.currentQuestion.capital}`;
        } else if (this.currentMode === 'cities') {
            hintText = `💡 Hint: This city is in ${this.currentQuestion.state}`;
        } else if (this.currentMode === 'landmarks') {
            hintText = `💡 Hint: Located in ${this.currentQuestion.location}`;
        } else if (this.currentMode === 'rivers') {
            hintText = `💡 Hint: Type: ${this.currentQuestion.type}`;
        }
        
        const hintDisplay = document.getElementById('hint-text');
        hintDisplay.textContent = hintText;
        hintDisplay.style.display = 'block';
        
        if (this.hintsRemaining === 0) {
            document.getElementById('hint-btn').disabled = true;
        }
    }

    startTimer() {
        const timeLimit = difficultyLevels[this.currentDifficulty].timeLimit;
        if (!timeLimit) return;
        
        this.timeRemaining = timeLimit;
        document.getElementById('timer-container').style.display = 'flex';
        document.getElementById('timer-text').textContent = timeLimit;
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            const timerText = document.getElementById('timer-text');
            const timerCircle = document.querySelector('.timer-circle');
            
            timerText.textContent = this.timeRemaining;
            
            if (this.timeRemaining <= 5) {
                timerCircle.classList.add('danger');
            } else if (this.timeRemaining <= 10) {
                timerCircle.classList.add('warning');
                timerCircle.classList.remove('danger');
            } else {
                timerCircle.classList.remove('warning', 'danger');
            }
            
            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        document.getElementById('timer-container').style.display = 'none';
    }

    timeUp() {
        this.stopTimer();
        // Auto-select wrong answer
        const choices = document.querySelectorAll('.choice-btn');
        if (choices.length > 0) {
            choices[0].click(); // This will trigger incorrect answer
        }
    }

    playSound(type) {
        if (!this.soundEnabled) return;
        const sound = document.getElementById(`${type}-sound`);
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(() => {}); // Ignore if sound fails
        }
    }

    checkAchievements() {
        const newAchievements = [];
        
        achievements.forEach(achievement => {
            const isUnlocked = achievement.condition(this.progress);
            const wasUnlocked = (this.progress.achievements || []).includes(achievement.id);
            
            if (isUnlocked && !wasUnlocked) {
                newAchievements.push(achievement);
                if (!this.progress.achievements) {
                    this.progress.achievements = [];
                }
                this.progress.achievements.push(achievement.id);
            }
        });
        
        // Show notifications for new achievements
        newAchievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.showAchievementNotification(achievement);
            }, index * 3000);
        });
        
        this.updateAchievementsDisplay();
    }

    showAchievementNotification(achievement) {
        this.playSound('achievement');
        const notification = document.getElementById('achievement-notification');
        notification.querySelector('.achievement-icon-large').textContent = achievement.icon;
        notification.querySelector('.achievement-name').textContent = achievement.name;
        notification.querySelector('.achievement-desc').textContent = achievement.description;
        
        notification.style.display = 'block';
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        }, 3000);
    }

    updateAchievementsDisplay() {
        const container = document.getElementById('achievements-container');
        container.innerHTML = '';
        
        // Show first 6 achievements
        const displayAchievements = achievements.slice(0, 6);
        
        displayAchievements.forEach(achievement => {
            const isUnlocked = (this.progress.achievements || []).includes(achievement.id);
            const card = document.createElement('div');
            card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.description}</div>
            `;
            container.appendChild(card);
        });
    }

    showAllAchievements() {
        const modal = document.getElementById('achievements-modal');
        const grid = document.getElementById('all-achievements-grid');
        grid.innerHTML = '';
        
        achievements.forEach(achievement => {
            const isUnlocked = (this.progress.achievements || []).includes(achievement.id);
            const card = document.createElement('div');
            card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.description}</div>
            `;
            grid.appendChild(card);
        });
        
        modal.classList.add('active');
    }

    showStatistics() {
        document.getElementById('home-screen').classList.remove('active');
        document.getElementById('stats-screen').classList.add('active');
        
        // Populate statistics
        this.populateStatistics();
    }

    closeStatistics() {
        document.getElementById('stats-screen').classList.remove('active');
        document.getElementById('home-screen').classList.add('active');
    }

    populateStatistics() {
        const gameStatsContent = document.getElementById('game-stats-content');
        const totalQuestions = this.progress.totalQuestionsAnswered || 0;
        const totalCorrect = this.progress.totalCorrectAnswers || 0;
        const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        
        gameStatsContent.innerHTML = `
            <div class="stat-item">
                <strong>Total Questions Answered:</strong> ${totalQuestions}
            </div>
            <div class="stat-item">
                <strong>Correct Answers:</strong> ${totalCorrect}
            </div>
            <div class="stat-item">
                <strong>Accuracy:</strong> ${accuracy}%
            </div>
            <div class="stat-item">
                <strong>Highest Score:</strong> ${this.progress.totalScore}
            </div>
            <div class="stat-item">
                <strong>Max Streak:</strong> ${this.progress.maxStreak || 0}
            </div>
            <div class="stat-item">
                <strong>Timed Challenges:</strong> ${this.progress.timedChallenges || 0}
            </div>
        `;
        
        // Update achievements in stats
        const statsAchievements = document.getElementById('stats-achievements');
        const unlockedCount = (this.progress.achievements || []).length;
        statsAchievements.innerHTML = `
            <div class="stat-item">
                <strong>Unlocked:</strong> ${unlockedCount} / ${achievements.length}
            </div>
            <div class="achievements-grid">${achievements.slice(0, 4).map(a => {
                const isUnlocked = (this.progress.achievements || []).includes(a.id);
                return `
                    <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">${a.icon}</div>
                    </div>
                `;
            }).join('')}</div>
        `;
        
        // Update performance stats
        const performanceStats = document.getElementById('performance-stats');
        performanceStats.innerHTML = `
            <div class="stat-item">
                <strong>States Progress:</strong> ${this.progress.statesMastered.length} / 28
            </div>
            <div class="stat-item">
                <strong>Cities Progress:</strong> ${this.progress.citiesDiscovered.length} / ${indianCities.length}
            </div>
            <div class="stat-item">
                <strong>Landmarks Progress:</strong> ${(this.progress.landmarksLearned || []).length} / ${indianLandmarks.length}
            </div>
            <div class="stat-item">
                <strong>Rivers Progress:</strong> ${(this.progress.riversLearned || []).length} / ${indianRivers.length}
            </div>
        `;
    }

    exportProgress() {
        const data = {
            progress: this.progress,
            exportDate: new Date().toISOString(),
            version: '2.0'
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `geotrain-progress-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
            localStorage.removeItem('geoTrainProgress');
            localStorage.removeItem('darkMode');
            location.reload();
        }
    }

    startGame(mode) {
        this.currentMode = mode;
        this.currentLevel = 1;
        this.currentScore = 0;
        this.usedItems = [];
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.currentStreak = 0;
        this.hintsRemaining = difficultyLevels[this.currentDifficulty].hintsAvailable;
        this.levelStats = { correct: 0, total: 0, startTime: Date.now() };

        // Update UI
        document.getElementById('home-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        
        const modeTitles = {
            states: 'Which State Is This?',
            cities: 'Which City Is This?',
            landmarks: 'Famous Landmarks',
            rivers: 'Rivers & Geography'
        };
        document.getElementById('game-mode-title').textContent = modeTitles[mode];
        document.getElementById('current-score').textContent = this.currentScore;
        document.getElementById('streak-count').textContent = this.currentStreak;
        
        // Update difficulty badge
        const badge = document.getElementById('difficulty-badge');
        badge.textContent = difficultyLevels[this.currentDifficulty].name;
        badge.className = `badge ${this.currentDifficulty}`;
        
        // Setup hint button
        document.getElementById('hints-remaining').textContent = this.hintsRemaining;
        document.getElementById('hint-btn').style.display = this.hintsRemaining > 0 ? 'block' : 'none';
        document.getElementById('hint-btn').disabled = false;
        document.getElementById('hint-text').style.display = 'none';

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
        this.levelStats.total++;
        
        // Stop any existing timer
        this.stopTimer();
        
        // Hide info section, show question section
        document.getElementById('info-section').style.display = 'none';
        document.getElementById('question-section').style.display = 'block';
        document.getElementById('feedback-section').style.display = 'none';
        document.getElementById('hint-text').style.display = 'none';

        // Get available items based on mode
        const allItems = this.getAllItemsForMode();
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
        const questionTexts = {
            states: 'Which state is highlighted on the map?',
            cities: 'Which city is marked on the map?',
            landmarks: 'Which landmark is shown on the map?',
            rivers: 'Which river/geographical feature is shown?'
        };
        document.getElementById('question-text').textContent = questionTexts[this.currentMode];
        
        // Start timer if applicable
        this.startTimer();
    }

    getAllItemsForMode() {
        switch (this.currentMode) {
            case 'states': return indianStates;
            case 'cities': return indianCities;
            case 'landmarks': return indianLandmarks;
            case 'rivers': return indianRivers;
            default: return indianStates;
        }
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
        } else if (this.currentMode === 'cities' || this.currentMode === 'landmarks' || this.currentMode === 'rivers') {
            // For cities, landmarks, and rivers, add a marker
            const marker = L.marker(item.coordinates).addTo(this.map)
                .bindPopup(`<b>${this.currentMode === 'cities' ? 'City' : this.currentMode === 'landmarks' ? 'Landmark' : 'Location'}</b><br>Identify this location!`)
                .openPopup();

            // Center on the location
            this.map.setView(item.coordinates, this.currentMode === 'rivers' ? 6 : 12);
        }
    }

    generateChoices(correctItem) {
        const allItems = this.getAllItemsForMode();
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
        // Stop timer
        this.stopTimer();
        
        // Disable all buttons
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.disabled = true;
        });

        const isCorrect = selected.name === correct.name;

        // Update progress tracking
        if (!this.progress.totalQuestionsAnswered) this.progress.totalQuestionsAnswered = 0;
        if (!this.progress.totalCorrectAnswers) this.progress.totalCorrectAnswers = 0;
        this.progress.totalQuestionsAnswered++;

        if (isCorrect) {
            button.classList.add('correct');
            this.correctAnswers++;
            this.levelStats.correct++;
            this.progress.totalCorrectAnswers++;
            this.currentStreak++;
            
            // Update max streak
            if (!this.progress.maxStreak) this.progress.maxStreak = 0;
            if (this.currentStreak > this.progress.maxStreak) {
                this.progress.maxStreak = this.currentStreak;
            }
            
            // Calculate points
            const basePoints = 10;
            const difficultyMultiplier = difficultyLevels[this.currentDifficulty].pointsMultiplier;
            const levelMultiplier = this.currentLevel;
            const streakBonus = Math.floor(this.currentStreak / 5) * 5;
            const earnedPoints = (basePoints * difficultyMultiplier * levelMultiplier) + streakBonus;
            
            this.currentScore += earnedPoints;
            this.showFeedback(true, `+${earnedPoints} points!`);
            this.playSound('correct');
            
            // Update progress based on mode
            if (this.currentMode === 'states') {
                if (!this.progress.statesMastered.includes(correct.name)) {
                    this.progress.statesMastered.push(correct.name);
                }
            } else if (this.currentMode === 'cities') {
                if (!this.progress.citiesDiscovered.includes(correct.name)) {
                    this.progress.citiesDiscovered.push(correct.name);
                }
            } else if (this.currentMode === 'landmarks') {
                if (!this.progress.landmarksLearned) this.progress.landmarksLearned = [];
                if (!this.progress.landmarksLearned.includes(correct.name)) {
                    this.progress.landmarksLearned.push(correct.name);
                }
            } else if (this.currentMode === 'rivers') {
                if (!this.progress.riversLearned) this.progress.riversLearned = [];
                if (!this.progress.riversLearned.includes(correct.name)) {
                    this.progress.riversLearned.push(correct.name);
                }
            }
            
            this.progress.totalScore = Math.max(this.progress.totalScore, this.currentScore);
            
            // Track timed challenges
            if (difficultyLevels[this.currentDifficulty].timeLimit) {
                if (!this.progress.timedChallenges) this.progress.timedChallenges = 0;
                this.progress.timedChallenges++;
            }
            
            this.saveProgress();
            this.checkAchievements();
        } else {
            button.classList.add('incorrect');
            this.currentStreak = 0;
            this.playSound('wrong');
            
            // Highlight the correct answer
            document.querySelectorAll('.choice-btn').forEach(btn => {
                if (btn.textContent === correct.name) {
                    btn.classList.add('correct');
                }
            });
            this.showFeedback(false, 'Try again next time!');
        }

        // Update score and streak display
        document.getElementById('current-score').textContent = this.currentScore;
        document.getElementById('streak-count').textContent = this.currentStreak;

        // Show info after a delay
        setTimeout(() => {
            this.showInfo(correct);
        }, 1500);
    }

    showFeedback(isCorrect, extraMessage = '') {
        const feedbackSection = document.getElementById('feedback-section');
        const feedbackMessage = feedbackSection.querySelector('.feedback-message');
        
        feedbackSection.style.display = 'block';
        feedbackMessage.className = 'feedback-message ' + (isCorrect ? 'correct' : 'incorrect');
        const baseMessage = isCorrect ? '✓ Correct! Well done!' : '✗ Incorrect.';
        feedbackMessage.textContent = extraMessage ? `${baseMessage} ${extraMessage}` : baseMessage;

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
        } else if (this.currentMode === 'cities') {
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
        } else if (this.currentMode === 'landmarks') {
            infoHTML += `
                <div class="info-item">
                    <strong>Location:</strong>
                    ${item.location}
                </div>
                <div class="info-item">
                    <strong>Type:</strong>
                    ${item.type}
                </div>
            `;
        } else if (this.currentMode === 'rivers') {
            infoHTML += `
                <div class="info-item">
                    <strong>Type:</strong>
                    ${item.type}
                </div>
                <div class="info-item">
                    <strong>${item.type === 'River' ? 'Length' : 'Size'}:</strong>
                    ${item.length}
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
        // Stop timer if running
        this.stopTimer();
        
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
        document.getElementById('landmarks-learned').textContent = 
            `${(this.progress.landmarksLearned || []).length}/${indianLandmarks.length}`;
        document.getElementById('rivers-learned').textContent = 
            `${(this.progress.riversLearned || []).length}/${indianRivers.length}`;
        document.getElementById('total-score').textContent = this.progress.totalScore;
        document.getElementById('max-streak').textContent = this.progress.maxStreak || 0;
    }

    loadProgress() {
        const saved = localStorage.getItem('geoTrainProgress');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            statesMastered: [],
            citiesDiscovered: [],
            landmarksLearned: [],
            riversLearned: [],
            totalScore: 0,
            maxStreak: 0,
            achievements: [],
            totalQuestionsAnswered: 0,
            totalCorrectAnswers: 0,
            timedChallenges: 0,
            perfectLevels: 0
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
    
    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-toggle').textContent = '☀️';
    }
});
