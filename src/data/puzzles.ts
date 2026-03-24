import { Puzzle } from '../types';

export const puzzles: Puzzle[] = [
  {
    id: 'puzzle-1',
    title: 'The Holy Trinity',
    description: 'Connect temples dedicated to the three main Hindu deities. Match each deity with their primary temples.',
    templeIds: ['angkor-wat', 'prasat-kravan', 'phnom-bakheng', 'bayon', 'ta-prohm'],
    connections: [
      { from: 'angkor-wat', to: 'prasat-kravan', reason: 'Both primarily dedicated to Vishnu' },
      { from: 'phnom-bakheng', to: 'prasat-kravan', reason: 'Both Shiva temples from early Angkor period' },
      { from: 'bayon', to: 'ta-prohm', reason: 'Both Buddhist temples built by Jayavarman VII' }
    ],
    clues: [
      {
        id: 'clue-1-1',
        text: 'The largest temple in the complex was originally built for this deity, who holds a conch, discus, lotus, and mace.',
        difficulty: 'easy',
        hint: 'This deity is the Preserver in the Hindu trinity'
      },
      {
        id: 'clue-1-2',
        text: 'These temples feature Buddhist imagery and were built by the same king who constructed Angkor Thom.',
        difficulty: 'easy',
        hint: 'This king was a Mahayana Buddhist'
      },
      {
        id: 'clue-1-3',
        text: 'The first major temple at Angkor was dedicated to this deity, who carries a trident and rides Nandi the bull.',
        difficulty: 'medium',
        hint: 'This deity is the Destroyer in the Hindu trinity'
      }
    ],
    theme: 'Deities',
    difficulty: 'easy',
    baseScore: 100
  },
  {
    id: 'puzzle-2',
    title: 'Architectural Evolution',
    description: 'Connect temples that share the same architectural style, showing the evolution of Khmer architecture.',
    templeIds: ['baphuon', 'pre-rup', 'east-mebon', 'baksei-chamkrong'],
    connections: [
      { from: 'pre-rup', to: 'east-mebon', reason: 'Both built by Rajendravarman II in Pre Rup style' },
      { from: 'pre-rup', to: 'baksei-chamkrong', reason: 'Similar pyramid structure in Pre Rup style' }
    ],
    clues: [
      {
        id: 'clue-2-1',
        text: 'These two temples were built by the same king (Rajendravarman II) in the same architectural style.',
        difficulty: 'easy',
        hint: 'Look for temples from 10th century'
      },
      {
        id: 'clue-2-2',
        text: 'This temple was the largest before Angkor Wat was built. It represents Mount Meru.',
        difficulty: 'medium',
        hint: 'Its name means "Turn the Body"'
      },
      {
        id: 'clue-2-3',
        text: 'This small pyramid temple contains the first inscription naming "Angkor Thom".',
        difficulty: 'hard',
        hint: 'Its name means "Bird that Protects the City"'
      }
    ],
    theme: 'Architecture',
    difficulty: 'easy',
    baseScore: 150
  },
  {
    id: 'puzzle-3',
    title: 'Jayavarman VII\'s Legacy',
    description: 'Connect the temples built by the great Buddhist king Jayavarman VII.',
    templeIds: ['angkor-thom', 'bayon', 'ta-prohm', 'preah-khan', 'ta-som', 'neak-pean'],
    connections: [
      { from: 'angkor-thom', to: 'bayon', reason: 'Bayon is the central temple of Angkor Thom' },
      { from: 'ta-prohm', to: 'preah-khan', reason: 'Both built for parents (mother and father respectively)' },
      { from: 'ta-som', to: 'neak-pean', reason: 'Both smaller Buddhist temples from same period' },
      { from: 'bayon', to: 'ta-prohm', reason: 'Both feature Bayon architectural style' }
    ],
    clues: [
      {
        id: 'clue-3-1',
        text: 'This king built more temples than any other. His temples are Buddhist and feature serene faces.',
        difficulty: 'easy',
        hint: 'He ruled in the late 12th century'
      },
      {
        id: 'clue-3-2',
        text: 'This temple was built for the king\'s mother and features a massive tree growing from its ruins.',
        difficulty: 'easy',
        hint: 'It was featured in a famous movie'
      },
      {
        id: 'clue-3-3',
        text: 'This temple was built for the king\'s father and once housed over 1,000 teachers.',
        difficulty: 'medium',
        hint: 'Its name means "Sacred Sword"'
      },
      {
        id: 'clue-3-4',
        text: 'This circular temple represents a mythical lake in the Himalayas with four connected pools.',
        difficulty: 'hard',
        hint: 'Its name means "Coiled Serpent"'
      }
    ],
    theme: 'Historical Period',
    difficulty: 'medium',
    baseScore: 200
  },
  {
    id: 'puzzle-4',
    title: 'The Remote Temples',
    description: 'Connect temples that are located far from the main Angkor complex.',
    templeIds: ['banteay-srei', 'kbal-spean', 'preah-vihear', 'koh-ker', 'beng-melea'],
    connections: [
      { from: 'banteay-srei', to: 'kbal-spean', reason: 'Both located north of Siem Reap, often visited together' },
      { from: 'preah-vihear', to: 'koh-ker', reason: 'Both remote temples in northern Cambodia' },
      { from: 'koh-ker', to: 'beng-melea', reason: 'Both represent unique architectural experiments' }
    ],
    clues: [
      {
        id: 'clue-4-1',
        text: 'This temple is famous for intricate pink sandstone carvings and is called the "Citadel of Women."',
        difficulty: 'easy',
        hint: 'It\'s 25km north of the main complex'
      },
      {
        id: 'clue-4-2',
        text: 'This site features a seven-tiered pyramid, unique in Khmer architecture.',
        difficulty: 'medium',
        hint: 'It was briefly the capital of the empire'
      },
      {
        id: 'clue-4-3',
        text: 'This spectacular temple sits on a clifftop with panoramic views, subject of territorial disputes.',
        difficulty: 'hard',
        hint: 'It\'s on the northern border'
      },
      {
        id: 'clue-4-4',
        text: 'This riverbed features over 1,000 linga carvings in the stone.',
        difficulty: 'medium',
        hint: 'Its name means "Head of the Bridge"'
      }
    ],
    theme: 'Geography',
    difficulty: 'medium',
    baseScore: 250
  },
  {
    id: 'puzzle-5',
    title: 'Sunrise and Sunset',
    description: 'Connect temples based on the best time to visit them for optimal lighting and atmosphere.',
    templeIds: ['angkor-wat', 'pre-rup', 'phnom-bakheng', 'phnom-krom'],
    connections: [
      { from: 'angkor-wat', to: 'phnom-bakheng', reason: 'Classic sunrise at Angkor Wat, sunset from Phnom Bakheng' },
      { from: 'pre-rup', to: 'phnom-krom', reason: 'Both excellent sunset temples with warm tones' }
    ],
    clues: [
      {
        id: 'clue-5-1',
        text: 'This is the most famous sunrise spot in Cambodia, with reflection pools in front.',
        difficulty: 'easy',
        hint: 'It\'s on the Cambodian flag'
      },
      {
        id: 'clue-5-2',
        text: 'This pyramid temple\'s name means "Turn the Body" and glows golden at sunset.',
        difficulty: 'medium',
        hint: 'It was used for cremation rituals'
      },
      {
        id: 'clue-5-3',
        text: 'This hilltop temple overlooks Tonlé Sap lake and is limited to 300 visitors at sunset.',
        difficulty: 'hard',
        hint: 'It was the first major temple at Angkor'
      },
      {
        id: 'clue-5-4',
        text: 'This lesser-known hilltop temple offers sunset views over the lake with fewer crowds.',
        difficulty: 'medium',
        hint: 'It\'s southwest of the main complex'
      }
    ],
    theme: 'Photography',
    difficulty: 'medium',
    baseScore: 250
  },
  {
    id: 'puzzle-6',
    title: 'The Stone Faces',
    description: 'Connect temples that feature the famous serene stone faces of Avalokiteshvara.',
    templeIds: ['bayon', 'angkor-thom', 'terrace-of-leper-king', 'preah-pithu'],
    connections: [
      { from: 'bayon', to: 'angkor-thom', reason: 'Bayon is the centerpiece of Angkor Thom' },
      { from: 'terrace-of-leper-king', to: 'preah-pithu', reason: 'Both within Angkor Thom with similar carvings' },
      { from: 'bayon', to: 'terrace-of-leper-king', reason: 'Both feature Jayavarman VII imagery' }
    ],
    clues: [
      {
        id: 'clue-6-1',
        text: 'This temple has 216 serene faces on 54 towers, looking in all four directions.',
        difficulty: 'easy',
        hint: 'It\'s the central temple of Angkor Thom'
      },
      {
        id: 'clue-6-2',
        text: 'This terrace is named after a statue that may depict the great king himself.',
        difficulty: 'medium',
        hint: 'The "Leper King" may have had a skin disease'
      },
      {
        id: 'clue-6-3',
        text: 'This group of small temples is less crowded but features similar Buddhist imagery.',
        difficulty: 'hard',
        hint: 'Its name means "Sacred Enclosure"'
      }
    ],
    theme: 'Art and Iconography',
    difficulty: 'medium',
    baseScore: 300
  },
  {
    id: 'puzzle-7',
    title: 'Nature Reclaimed',
    description: 'Connect temples where nature has dramatically reclaimed the ancient stones.',
    templeIds: ['ta-prohm', 'beng-melea', 'ta-som', 'banteay-kdei'],
    connections: [
      { from: 'ta-prohm', to: 'beng-melea', reason: 'Both show jungle completely reclaiming the temple' },
      { from: 'ta-prohm', to: 'ta-som', reason: 'Both feature iconic trees growing from stone' },
      { from: 'banteay-kdei', to: 'ta-som', reason: 'Similar Buddhist monastery layout' }
    ],
    clues: [
      {
        id: 'clue-7-1',
        text: 'This "Tomb Raider Temple" features massive silk-cotton trees growing from its ruins.',
        difficulty: 'easy',
        hint: 'Angelina Jolie filmed here'
      },
      {
        id: 'clue-7-2',
        text: 'This sprawling temple was left largely unrestored, showing how Angkor looked when discovered.',
        difficulty: 'medium',
        hint: 'It\'s 77km east of the main complex'
      },
      {
        id: 'clue-7-3',
        text: 'This small temple has a famous tree growing from its eastern gateway.',
        difficulty: 'medium',
        hint: 'Its name means "Grandfather Som"'
      }
    ],
    theme: 'Nature and Architecture',
    difficulty: 'easy',
    baseScore: 200
  },
  {
    id: 'puzzle-8',
    title: 'The Royal Court',
    description: 'Connect structures within Angkor Thom that served the royal court.',
    templeIds: ['terrace-of-elephants', 'terrace-of-leper-king', 'phimeanakas', 'prasat-suor-prat'],
    connections: [
      { from: 'terrace-of-elephants', to: 'terrace-of-leper-king', reason: 'Adjacent terraces used for royal ceremonies' },
      { from: 'phimeanakas', to: 'prasat-suor-prat', reason: 'Both part of royal palace complex' },
      { from: 'terrace-of-elephants', to: 'phimeanakas', reason: 'Both within royal enclosure' }
    ],
    clues: [
      {
        id: 'clue-8-1',
        text: 'This ceremonial platform features life-size elephant carvings and was used for royal audiences.',
        difficulty: 'easy',
        hint: 'The king watched ceremonies from here'
      },
      {
        id: 'clue-8-2',
        text: 'According to legend, the king had to spend each night with a nine-headed serpent spirit here.',
        difficulty: 'medium',
        hint: 'Its name means "Celestial Temple"'
      },
      {
        id: 'clue-8-3',
        text: 'These twelve small towers possibly marked zodiac signs or ceremony positions.',
        difficulty: 'hard',
        hint: 'They line the Royal Square'
      }
    ],
    theme: 'Royal Life',
    difficulty: 'hard',
    baseScore: 350
  },
  {
    id: 'puzzle-9',
    title: 'Sacred Waters',
    description: 'Connect temples associated with water - reservoirs, rivers, and sacred pools.',
    templeIds: ['east-mebon', 'neak-pean', 'kbal-spean', 'phnom-krom'],
    connections: [
      { from: 'east-mebon', to: 'neak-pean', reason: 'Both represent sacred water bodies in Hindu/Buddhist cosmology' },
      { from: 'kbal-spean', to: 'neak-pean', reason: 'Both feature sacred water with religious carvings' },
      { from: 'phnom-krom', to: 'east-mebon', reason: 'Both overlook water bodies (lake and reservoir)' }
    ],
    clues: [
      {
        id: 'clue-9-1',
        text: 'This temple was built on an artificial island in the middle of the East Baray reservoir.',
        difficulty: 'medium',
        hint: 'Its name means "Eastern Mebon"'
      },
      {
        id: 'clue-9-2',
        text: 'This circular temple represents a mythical lake in the Himalayas with four connected pools.',
        difficulty: 'hard',
        hint: 'Its name means "Coiled Serpent"'
      },
      {
        id: 'clue-9-3',
        text: 'This site features over 1,000 linga carvings on the riverbed, creating sacred water.',
        difficulty: 'medium',
        hint: 'Pilgrims still visit for blessed water'
      }
    ],
    theme: 'Sacred Geography',
    difficulty: 'hard',
    baseScore: 400
  },
  {
    id: 'puzzle-10',
    title: 'The Master Network',
    description: 'Connect all temples by their primary dedication, creating a complete religious network.',
    templeIds: ['angkor-wat', 'bayon', 'pre-rup', 'banteay-srei', 'prasat-kravan', 'ta-prohm', 'phnom-bakheng', 'thommanon'],
    connections: [
      { from: 'angkor-wat', to: 'prasat-kravan', reason: 'Both dedicated to Vishnu' },
      { from: 'angkor-wat', to: 'thommanon', reason: 'Both Vishnu temples from same period' },
      { from: 'bayon', to: 'ta-prohm', reason: 'Both Buddhist temples by Jayavarman VII' },
      { from: 'pre-rup', to: 'phnom-bakheng', reason: 'Both Shiva temples with pyramid structure' },
      { from: 'banteay-srei', to: 'phnom-bakheng', reason: 'Both primarily Shiva temples' },
      { from: 'pre-rup', to: 'banteay-srei', reason: 'Both dedicated to Shiva' }
    ],
    clues: [
      {
        id: 'clue-10-1',
        text: 'The largest religious monument in the world was originally built for this deity.',
        difficulty: 'easy',
        hint: 'He holds a conch, discus, lotus, and mace'
      },
      {
        id: 'clue-10-2',
        text: 'These temples feature Buddhist imagery and the serene faces of Avalokiteshvara.',
        difficulty: 'easy',
        hint: 'Built by Jayavarman VII'
      },
      {
        id: 'clue-10-3',
        text: 'These temples are dedicated to the Destroyer in the Hindu trinity.',
        difficulty: 'medium',
        hint: 'He carries a trident and rides Nandi'
      },
      {
        id: 'clue-10-4',
        text: 'This temple is famous for pink sandstone carvings and is dedicated to Shiva.',
        difficulty: 'medium',
        hint: 'Its name means "Citadel of Women"'
      }
    ],
    theme: 'Comprehensive Review',
    difficulty: 'hard',
    baseScore: 500
  }
];
