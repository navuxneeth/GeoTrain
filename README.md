# NaviNation - Interactive Geography Learning Game for India

<MAIN WEBSITE DEPLOYMENT IS STILL ~~GOOFY~~ UNDERWAY>
**Master India's Geography Through Interactive Learning**

NaviNation is a comprehensive educational web application designed to help users learn about India's states, cities, landmarks, and geographical features through interactive map-based games. The application features real open-source maps with satellite and street views, making geography learning engaging and fun.

## Features

### Interactive Map-Based Learning
- **OpenStreetMap Integration**: Uses Leaflet.js with OpenStreetMap for accurate geographical data
- **Satellite View**: Toggle between street view and satellite imagery
- **Interactive Highlighting**: States are highlighted on the map for visual learning
- **Zoom & Pan Controls**: Explore different regions with smooth map navigation
- **Precise Markers**: Location markers for cities, landmarks, and geographical features

### Game Modes (4 Modes)

#### Which State Is This?
- Learn all 28 Indian states and their locations
- Discover state capitals and latest population data (2011 Census)
- Read interesting descriptions and fun facts about each state
- Interactive map highlighting for visual identification

#### Which City Is This?
- Explore 30 popular Indian cities (expanded from 20!)
- Learn about each city's significance and cultural importance
- Discover fun facts and historical information
- Precise location markers on the map

#### Famous Landmarks (NEW!)
- Identify 18 iconic Indian monuments and historical sites
- Learn about Taj Mahal, Red Fort, Golden Temple, and more
- Discover architectural styles and historical significance
- Explore India's rich cultural heritage

#### Rivers & Geography (NEW!)
- Master 10 major rivers and geographical features
- Learn about Ganges, Brahmaputra, Himalayas, and more
- Understand India's diverse geography
- Explore natural wonders and their importance

### Difficulty Levels (NEW!)
- **Easy Mode**: No time limit, 3 hints available, 1x points
- **Medium Mode**: 30-second timer, 2 hints, 2x points multiplier
- **Hard Mode**: 15-second timer, 1 hint, 3x points multiplier
- Visual difficulty badges with color coding
- Progressive challenge for all skill levels

### Timed Challenges (NEW!)
- Countdown timer for Medium and Hard modes
- Color-coded warnings (green → yellow → red)
- Auto-submit on timeout
- Track completed timed challenges

### Hint System (NEW!)
- Contextual hints based on game mode
- Limited hints per difficulty level
- Point deduction for using hints
- Strategic gameplay element

### Streak & Advanced Scoring (NEW!)
- **Streak System**: Track consecutive correct answers
- **Streak Bonuses**: Earn +5 points for every 5-streak
- **Difficulty Multipliers**: 1x/2x/3x based on difficulty
- **Level Multipliers**: Points increase with level progression
- **Max Streak Tracking**: Monitor your best performance

### Achievement System (NEW!)
Complete 12 achievements:
- **First Steps** - Master your first state
- **Geography Enthusiast** - Master 5 states
- **State Master** - Master all 28 states
- **Urban Explorer** - Discover your first city
- **City Navigator** - Discover 10 cities
- **City Expert** - Discover all cities
- **Monument Hunter** - Learn about 5 landmarks
- **River Expert** - Master all rivers and geographical features
- **High Achiever** - Score 1000 points
- **Streak Master** - Get 10 correct answers in a row
- **Speed Demon** - Complete 20 timed challenges
- **Perfectionist** - Complete a level with 100% accuracy

### Enhanced Progress Tracking
- **Persistent Progress**: Your progress is saved locally in the browser
- **Comprehensive Statistics**: Track states mastered, cities discovered, landmarks learned, rivers mastered
- **Detailed Analytics**: View accuracy, total questions, correct answers
- **Level System**: Difficulty increases as you progress through levels
- **Score System**: Earn points for correct answers with multiple multipliers
- **Maximum Streak**: Track your longest correct answer streak

### Statistics Dashboard (NEW!)
- **Detailed Statistics Screen**: View comprehensive performance metrics
- **Progress Charts**: Visual representation of your learning journey
- **Achievement Progress**: See unlocked and locked achievements
- **Performance Analysis**: Accuracy rates and improvement trends
- **Export Progress**: Download your progress as JSON

### Dark Mode (NEW!)
- **Toggle Dark/Light Mode**: Easy switch in the header
- **Persistent Preference**: Your choice is saved
- **Complete Styling**: All components optimized for dark mode
- **Smooth Transitions**: Elegant mode switching

### Learning Features
- **Multiple Choice Questions**: Choose from 4 options for each question
- **Instant Feedback**: Get immediate feedback on your answers
- **Detailed Information**: Learn comprehensive facts after each question
- **Population Data**: All data includes 2011 Census information
- **Fun Facts**: Discover interesting trivia about each location
- **Visual Learning**: Map-based identification enhances spatial awareness

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - it's a pure client-side application!

### Running the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/navuxneeth/NaviNation.git
   cd NaviNation
   ```

2. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

3. **Start Learning**:
   - Choose a game mode (States, Cities, Landmarks, or Rivers)
   - Select your difficulty level (Easy, Medium, or Hard)
   - Answer questions to earn points and unlock achievements
   - View detailed information after each question
   - Track your progress on the home screen

## Project Structure

```
NaviNation/
├── index.html          # Main HTML structure with enhanced UI
├── styles.css          # Styling with dark mode and animations
├── app.js             # Game logic, achievements, and features
├── data.js            # Comprehensive data (86 locations total)
├── libs/
│   └── leaflet/       # Leaflet.js mapping library
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Structure and semantics
- **CSS3**: Modern styling with gradients, animations, dark mode, and responsive design
- **JavaScript (ES6+)**: Game logic, achievements, and interactivity
- **Leaflet.js**: Open-source mapping library
- **OpenStreetMap**: Free, editable map data
- **Esri World Imagery**: Satellite view tiles
- **LocalStorage API**: Progress persistence and preferences

## Features in Detail

### Map Integration
- **Leaflet.js**: Powerful open-source JavaScript library for interactive maps
- **OpenStreetMap Tiles**: Free and open-source map tiles
- **Satellite Imagery**: High-resolution satellite views from Esri
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Markers**: Location-specific markers for all modes

### Data Coverage
- **28 States**: All Indian states with comprehensive information
- **30 Major Cities**: Popular cities across India (expanded!)
- **18 Landmarks**: Iconic monuments and historical sites
- **10 Geography Features**: Major rivers, mountains, deserts, and forests
- **86 Total Locations**: Rich educational content
- **2011 Census Data**: Latest available census population figures
- **Cultural Information**: Descriptions, capitals, and fun facts

### Progress System
- **Local Storage**: Progress saved automatically in your browser
- **Statistics Tracking**: Monitor comprehensive performance metrics
- **Achievement System**: Unlock 12 different achievements
- **Level Progression**: Advance through levels as you master locations
- **High Score**: Track your best performance across all modes
- **Export Capability**: Download your progress for backup

## Educational Value

NaviNation helps you learn:
- **Geographical Locations**: Where states, cities, landmarks, and features are located
- **State Capitals**: Capital cities of all Indian states
- **Population Data**: Demographic information from the 2011 Census
- **Cultural Facts**: Interesting trivia and historical information
- **Spatial Awareness**: Understanding India's geography through visual learning
- **Historical Context**: Learn about monuments, their builders, and significance
- **Natural Geography**: Understand rivers, mountains, deserts, and ecosystems

## What's New in Version 2.0

### Major Additions:
- 2 new game modes (Landmarks & Rivers)
- 10 additional cities (20 → 30)
- 3 difficulty levels with timers
- Hint system with strategic point deduction
- Streak tracking with bonus points
- 12-achievement system
- Detailed statistics dashboard
- Dark mode support
- Progress export functionality
- Enhanced UI/UX with animations
- 86 total locations (vs 48 previously)

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Improve documentation
- Add more geographical data
- Enhance the UI/UX
- Add new game modes

## License

This project is open source and available for educational purposes.

## Acknowledgments

- **OpenStreetMap Contributors**: For providing free map data
- **Leaflet.js Team**: For the excellent mapping library
- **Esri**: For satellite imagery tiles
- **Census of India**: For population data

## Contact

For questions, suggestions, or feedback, please open an issue on GitHub.

---

**Happy Learning!**

*Now with 4 game modes, 86 locations, achievements, difficulty levels, dark mode, and much more!*
