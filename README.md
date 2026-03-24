# Angkor Wat Temple Connection Puzzle

An educational puzzle game that helps tourists learn about Angkor Wat's temples before their visit. Connect temples based on historical clues, architectural features, and cultural significance.

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)

## 🎮 Features

- **10 Puzzle Levels** with progressive difficulty
- **30+ Authentic Temples** with accurate historical information
- **Educational Content** about Khmer culture and architecture
- **Ancient Map Aesthetic** with hand-drawn visual style
- **Temple Encyclopedia** for detailed learning
- **Progress Tracking** with star ratings
- **Responsive Design** for desktop, tablet, and mobile
- **Web Accessible** - no installation required

## 🏛️ Temple Data

The game includes comprehensive information for each temple:
- Name (English and Khmer)
- Historical period and century
- Dedicated deity
- Architectural style
- Location within Angkor complex
- Description and historical significance
- Best time to visit

## 🎯 Gameplay

1. **Read the Clues** - Each puzzle provides historical and architectural clues
2. **Connect Temples** - Click two temples to draw a connection based on the clues
3. **Submit Answer** - Get feedback on your connections
4. **Earn Stars** - Score points based on accuracy and hint usage

### Puzzle Themes

- The Holy Trinity (Deities)
- Architectural Evolution
- Jayavarman VII's Legacy
- The Remote Temples
- Sunrise and Sunset
- The Stone Faces
- Nature Reclaimed
- The Royal Court
- Sacred Waters
- The Master Network

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

```bash
# Clone the repository
git clone git@github.com:cubxxw/angkor-wat-game.git
cd angkor-wat-game

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

The game is deployed to GitHub Pages:

```bash
# Deploy to GitHub Pages
npm run deploy
```

Access the game at: https://cubxxw.github.io/angkor-wat-game/

## 📁 Project Structure

```
angkor-wat-game/
├── src/
│   ├── components/
│   │   ├── GameBoard.tsx       # Main game interface
│   │   ├── TempleNode.tsx      # Temple node component
│   │   ├── ConnectionLine.tsx  # Connection line renderer
│   │   ├── CluePanel.tsx       # Clue display panel
│   │   ├── LevelSelect.tsx     # Level selection screen
│   │   └── Encyclopedia.tsx    # Temple encyclopedia
│   ├── data/
│   │   ├── temples.ts          # 30+ temple definitions
│   │   └── puzzles.ts          # 10 puzzle levels
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── utils/
│   │   └── gameStorage.ts      # Save/load functionality
│   ├── styles/
│   │   └── ancient-map-theme.css  # Visual theme
│   ├── App.tsx                 # Main application component
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Design

### Color Palette

- **Parchment:** #F4E4C1 (background)
- **Antique Brown:** #8B6F47 (borders, accents)
- **Faded Gold:** #D4AF37 (highlights)
- **Weathered Green:** #6B7B5E (success, nature)
- **Ink Dark:** #3C2F2F (text)

### Typography

- **Headings:** Cormorant Garamond (serif, reminiscent of old maps)
- **Body:** Open Sans (clean, readable sans-serif)

## 🛠️ Technologies

- **React 18.2** - UI framework
- **TypeScript 5.0** - Type safety
- **Vite 5.0** - Build tool and dev server
- **SVG** - Scalable graphics for game board
- **CSS3** - Styling with ancient map theme
- **localStorage** - Game progress persistence

## 📝 Game Data

### Temples (32 Total)

Major temples include:
- Angkor Wat
- Angkor Thom
- Bayon
- Ta Prohm
- Preah Khan
- Banteay Srei
- Koh Ker
- Preah Vihear
- Beng Mealea
- And 22 more...

### Puzzle Progression

| Level | Temples | Difficulty | Base Score | Theme |
|-------|---------|------------|------------|-------|
| 1 | 5 | Easy | 100 | Deities |
| 2 | 4 | Easy | 150 | Architecture |
| 3 | 6 | Medium | 200 | Jayavarman VII |
| 4 | 5 | Medium | 250 | Remote Temples |
| 5 | 4 | Medium | 250 | Photography |
| 6 | 4 | Medium | 300 | Stone Faces |
| 7 | 4 | Easy | 200 | Nature |
| 8 | 4 | Hard | 350 | Royal Court |
| 9 | 4 | Hard | 400 | Sacred Waters |
| 10 | 8 | Hard | 500 | Master Network |

## 💾 Save System

Game progress is automatically saved to localStorage:
- Completed levels
- Best scores per level
- Star ratings (1-3 stars)
- Settings preferences

### Export/Import Save

Players can export their save data as JSON and import it on another device.

## 🎮 How to Play

1. **Select a Level** from the level select screen
2. **Read the Clues** in the clue panel
3. **Click Two Temples** to create a connection
4. **Review Connections** in the side panel
5. **Submit Your Answer** when ready
6. **Get Feedback** on correct/incorrect connections
7. **Earn Stars** based on your score

### Scoring

- **Base Score:** Varies by level difficulty
- **Hint Penalty:** -10 points per hint used
- **Unrevealed Clue Penalty:** -5 points per unrevealed clue
- **Star Rating:**
  - 3 stars: 90%+ of base score
  - 2 stars: 70-89% of base score
  - 1 star: 50-69% of base score

## 📱 Responsive Design

The game is fully responsive and works on:
- **Desktop:** 1920x1080 and above
- **Tablet:** 768x1024
- **Mobile:** 320x568 and above

Touch controls are optimized for mobile devices.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Temple data sourced from historical records and academic sources
- Built with respect for Cambodian cultural heritage
- Designed to educate and inspire visitors to Angkor Archaeological Park

## 📞 Contact

For questions or feedback, please open an issue on the GitHub repository.

---

**Enjoy exploring the magnificent temples of Angkor!** 🏛️✨
