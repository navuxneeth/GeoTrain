// Indian States Data with comprehensive information
const indianStates = [
    {
        name: "Maharashtra",
        capital: "Mumbai",
        population: "112,374,333 (2011 Census)",
        description: "Maharashtra is the second-most populous state in India and the wealthiest. It's home to Mumbai, India's financial capital and Bollywood.",
        bounds: [[15.6, 72.6], [22.0, 80.9]],
        center: [19.7515, 75.7139],
        funFacts: [
            "Home to Bollywood, the world's largest film industry by number of films produced",
            "The Gateway of India in Mumbai is one of India's most iconic landmarks",
            "Maharashtra produces the highest number of sugar cooperatives in India"
        ]
    },
    {
        name: "Karnataka",
        capital: "Bengaluru",
        population: "61,095,297 (2011 Census)",
        description: "Karnataka is known as the Silicon Valley of India, with Bengaluru being the IT hub. It has rich cultural heritage and diverse geography.",
        bounds: [[11.5, 74.0], [18.5, 78.6]],
        center: [15.3173, 75.7139],
        funFacts: [
            "Bengaluru is called the 'Silicon Valley of India' due to its IT industry",
            "Karnataka has the highest number of UNESCO World Heritage Sites in India",
            "Mysore Palace attracts more visitors than the Taj Mahal"
        ]
    },
    {
        name: "Tamil Nadu",
        capital: "Chennai",
        population: "72,147,030 (2011 Census)",
        description: "Tamil Nadu is known for its Dravidian culture, classical music, and ancient temples. It's one of the most industrialized states in India.",
        bounds: [[8.0, 76.2], [13.5, 80.3]],
        center: [11.1271, 78.6569],
        funFacts: [
            "Home to over 33,000 ancient temples",
            "Chennai is called the 'Detroit of India' for its automobile industry",
            "Tamil is one of the oldest living languages in the world"
        ]
    },
    {
        name: "Uttar Pradesh",
        capital: "Lucknow",
        population: "199,812,341 (2011 Census)",
        description: "Uttar Pradesh is India's most populous state. It's home to the Taj Mahal and has significant historical and cultural importance.",
        bounds: [[23.9, 77.1], [30.4, 84.6]],
        center: [26.8467, 80.9462],
        funFacts: [
            "Most populous state in India, if it were a country it would be 5th most populous",
            "Home to the Taj Mahal, one of the Seven Wonders of the World",
            "Birthplace of Lord Rama and Lord Krishna according to Hindu mythology"
        ]
    },
    {
        name: "Gujarat",
        capital: "Gandhinagar",
        population: "60,439,692 (2011 Census)",
        description: "Gujarat is known for its entrepreneurial culture, textile industry, and as the birthplace of Mahatma Gandhi.",
        bounds: [[20.1, 68.2], [24.7, 74.5]],
        center: [22.2587, 71.1924],
        funFacts: [
            "Birthplace of Mahatma Gandhi, Father of the Nation",
            "Home to the Statue of Unity, the world's tallest statue",
            "Gujarat has the longest coastline among all Indian states"
        ]
    },
    {
        name: "Rajasthan",
        capital: "Jaipur",
        population: "68,548,437 (2011 Census)",
        description: "Rajasthan is India's largest state by area, known for its desert landscapes, forts, palaces, and vibrant culture.",
        bounds: [[23.0, 69.5], [30.2, 78.3]],
        center: [27.0238, 74.2179],
        funFacts: [
            "Largest state in India by area",
            "The Thar Desert covers a large portion of the state",
            "Home to magnificent forts like Amber Fort and Mehrangarh Fort"
        ]
    },
    {
        name: "West Bengal",
        capital: "Kolkata",
        population: "91,276,115 (2011 Census)",
        description: "West Bengal is known for its literary and artistic heritage. Kolkata was the capital of British India until 1911.",
        bounds: [[21.5, 85.8], [27.2, 89.9]],
        center: [22.9868, 87.8550],
        funFacts: [
            "Kolkata was the capital of British India from 1772 to 1911",
            "Home to the Sundarbans, the largest mangrove forest in the world",
            "Bengali is the second most spoken language in India"
        ]
    },
    {
        name: "Madhya Pradesh",
        capital: "Bhopal",
        population: "72,626,809 (2011 Census)",
        description: "Madhya Pradesh, meaning 'Central Province', is known for its diamond and copper reserves, and ancient monuments.",
        bounds: [[21.1, 74.0], [26.9, 82.8]],
        center: [22.9734, 78.6569],
        funFacts: [
            "Called the 'Heart of India' due to its central location",
            "Has three UNESCO World Heritage Sites including Khajuraho",
            "Largest producer of diamonds in India"
        ]
    },
    {
        name: "Telangana",
        capital: "Hyderabad",
        population: "35,193,978 (2011 Census)",
        description: "Telangana is India's youngest state (formed in 2014). Known for its IT industry and historical monuments.",
        bounds: [[15.9, 77.2], [19.9, 81.3]],
        center: [18.1124, 79.0193],
        funFacts: [
            "Newest state in India, formed on June 2, 2014",
            "Hyderabad is known as the 'City of Pearls'",
            "Major hub for pharmaceutical and biotechnology industries"
        ]
    },
    {
        name: "Bihar",
        capital: "Patna",
        population: "104,099,452 (2011 Census)",
        description: "Bihar is one of the oldest inhabited places in the world. It's the birthplace of Buddhism and Jainism.",
        bounds: [[24.2, 83.3], [27.5, 88.3]],
        center: [25.0961, 85.3131],
        funFacts: [
            "Ancient Nalanda University was the world's first residential university",
            "Birthplace of Buddhism and Jainism",
            "Patna is one of the oldest continuously inhabited cities in the world"
        ]
    },
    {
        name: "Andhra Pradesh",
        capital: "Amaravati",
        population: "49,386,799 (2011 Census)",
        description: "Andhra Pradesh is known as the 'Rice Bowl of India'. It has a long coastline and rich cultural heritage.",
        bounds: [[12.6, 76.8], [19.9, 84.8]],
        center: [15.9129, 79.7400],
        funFacts: [
            "Known as the 'Rice Bowl of India'",
            "Tirupati temple is the most visited place of worship in the world",
            "Second longest coastline in India"
        ]
    },
    {
        name: "Odisha",
        capital: "Bhubaneswar",
        population: "41,974,218 (2011 Census)",
        description: "Odisha is known for its tribal culture, beaches, and the famous Jagannath Temple in Puri.",
        bounds: [[17.8, 81.4], [22.6, 87.5]],
        center: [20.9517, 85.0985],
        funFacts: [
            "Home to the famous Jagannath Temple in Puri",
            "The word 'Juggernaut' comes from Jagannath",
            "Has rich tribal culture with over 62 tribal communities"
        ]
    },
    {
        name: "Kerala",
        capital: "Thiruvananthapuram",
        population: "33,406,061 (2011 Census)",
        description: "Kerala is known as 'God's Own Country'. Famous for its backwaters, beaches, and high literacy rate.",
        bounds: [[8.2, 74.9], [12.8, 77.4]],
        center: [10.8505, 76.2711],
        funFacts: [
            "Highest literacy rate in India (93.91%)",
            "Known as 'God's Own Country'",
            "First state in the world to achieve 100% primary education"
        ]
    },
    {
        name: "Assam",
        capital: "Dispur",
        population: "31,205,576 (2011 Census)",
        description: "Assam is known for its tea plantations, silk production, and rich biodiversity including one-horned rhinoceros.",
        bounds: [[24.1, 89.7], [28.0, 96.0]],
        center: [26.2006, 92.9376],
        funFacts: [
            "Produces over 50% of India's tea",
            "Home to the one-horned rhinoceros in Kaziranga National Park",
            "The world's largest river island, Majuli, is in Assam"
        ]
    },
    {
        name: "Punjab",
        capital: "Chandigarh",
        population: "27,743,338 (2011 Census)",
        description: "Punjab is known as the 'Land of Five Rivers' and is the breadbasket of India.",
        bounds: [[29.5, 73.9], [32.6, 76.9]],
        center: [31.1471, 75.3412],
        funFacts: [
            "Called the 'Granary of India' for its wheat production",
            "Golden Temple in Amritsar is the holiest shrine of Sikhism",
            "Highest per capita income among Indian states"
        ]
    },
    {
        name: "Haryana",
        capital: "Chandigarh",
        population: "25,351,462 (2011 Census)",
        description: "Haryana surrounds Delhi on three sides and is one of the wealthiest states in India.",
        bounds: [[27.7, 74.5], [30.9, 77.6]],
        center: [29.0588, 76.0856],
        funFacts: [
            "Surrounds the National Capital Territory of Delhi on three sides",
            "Home to Gurgaon, a major IT and financial hub",
            "Highest per capita income in India"
        ]
    },
    {
        name: "Jharkhand",
        capital: "Ranchi",
        population: "32,988,134 (2011 Census)",
        description: "Jharkhand is rich in mineral resources and has significant forest cover. Known for its waterfalls and wildlife.",
        bounds: [[21.9, 83.3], [25.3, 87.9]],
        center: [23.6102, 85.2799],
        funFacts: [
            "Richest state in mineral resources",
            "MS Dhoni, former Indian cricket captain, hails from Ranchi",
            "Home to over 40% of India's mineral wealth"
        ]
    },
    {
        name: "Chhattisgarh",
        capital: "Raipur",
        population: "25,545,198 (2011 Census)",
        description: "Chhattisgarh is known as the 'Rice Bowl of Central India'. It has rich mineral deposits and dense forests.",
        bounds: [[17.8, 80.3], [24.1, 84.4]],
        center: [21.2787, 81.8661],
        funFacts: [
            "Called the 'Rice Bowl of Central India'",
            "Has the highest forest cover among Indian states",
            "Rich in mineral resources, especially coal and iron ore"
        ]
    },
    {
        name: "Uttarakhand",
        capital: "Dehradun (Winter), Gairsain (Summer)",
        population: "10,086,292 (2011 Census)",
        description: "Uttarakhand is known for its Himalayan mountains, pilgrimage sites, and natural beauty.",
        bounds: [[28.7, 77.6], [31.4, 81.0]],
        center: [30.0668, 79.0193],
        funFacts: [
            "Home to the sources of the Ganges and Yamuna rivers",
            "Known as 'Devbhoomi' (Land of Gods)",
            "Nanda Devi is the second highest mountain in India"
        ]
    },
    {
        name: "Himachal Pradesh",
        capital: "Shimla (Summer), Dharamshala (Winter)",
        population: "6,864,602 (2011 Census)",
        description: "Himachal Pradesh is known for its hill stations, temples, and natural beauty in the Himalayas.",
        bounds: [[30.4, 75.6], [33.2, 79.0]],
        center: [31.1048, 77.1734],
        funFacts: [
            "Home to the Dalai Lama at Dharamshala",
            "Shimla was the summer capital of British India",
            "Rohtang Pass is one of the highest motorable roads in India"
        ]
    },
    {
        name: "Tripura",
        capital: "Agartala",
        population: "3,673,917 (2011 Census)",
        description: "Tripura is known for its rich tribal culture, bamboo handicrafts, and natural beauty.",
        bounds: [[22.9, 91.0], [24.5, 92.4]],
        center: [23.9408, 91.9882],
        funFacts: [
            "Second highest number of tribal people after Mizoram",
            "Famous for its bamboo handicrafts and handloom products",
            "Ujjayanta Palace is a major tourist attraction"
        ]
    },
    {
        name: "Meghalaya",
        capital: "Shillong",
        population: "2,966,889 (2011 Census)",
        description: "Meghalaya means 'Abode of Clouds'. Known for being one of the wettest places on Earth.",
        bounds: [[25.0, 89.8], [26.1, 92.8]],
        center: [25.4670, 91.3662],
        funFacts: [
            "Cherrapunji and Mawsynram receive the highest rainfall in the world",
            "Known for living root bridges made by the Khasi tribe",
            "Meghalaya means 'Abode of Clouds'"
        ]
    },
    {
        name: "Manipur",
        capital: "Imphal",
        population: "2,855,794 (2011 Census)",
        description: "Manipur is known as the 'Jewel of India'. Famous for its natural beauty and classical dance form.",
        bounds: [[23.8, 93.0], [25.7, 94.8]],
        center: [24.6637, 93.9063],
        funFacts: [
            "Called the 'Jewel of India' by Jawaharlal Nehru",
            "Birthplace of Manipuri classical dance",
            "Loktak Lake is the largest freshwater lake in Northeast India"
        ]
    },
    {
        name: "Nagaland",
        capital: "Kohima",
        population: "1,978,502 (2011 Census)",
        description: "Nagaland is known as the 'Land of Festivals'. It has rich tribal culture and biodiversity.",
        bounds: [[25.2, 93.3], [27.0, 95.2]],
        center: [26.1584, 94.5624],
        funFacts: [
            "Known as the 'Land of Festivals'",
            "Hornbill Festival is called the 'Festival of Festivals'",
            "Home to 16 major tribes with distinct cultures"
        ]
    },
    {
        name: "Goa",
        capital: "Panaji",
        population: "1,458,545 (2011 Census)",
        description: "Goa is India's smallest state, known for its beaches, Portuguese heritage, and nightlife.",
        bounds: [[14.9, 73.7], [15.8, 74.3]],
        center: [15.2993, 74.1240],
        funFacts: [
            "Smallest state in India by area",
            "Only state with over 60% of area under forest cover",
            "Cashew nuts are a major export product"
        ]
    },
    {
        name: "Arunachal Pradesh",
        capital: "Itanagar",
        population: "1,383,727 (2011 Census)",
        description: "Arunachal Pradesh is known as the 'Land of Rising Sun'. It's India's least populated state.",
        bounds: [[26.6, 91.6], [29.5, 97.4]],
        center: [28.2180, 94.7278],
        funFacts: [
            "The sun rises first in India here",
            "Known as the 'Land of Rising Sun'",
            "Home to over 26 major tribes and 100 sub-tribes"
        ]
    },
    {
        name: "Mizoram",
        capital: "Aizawl",
        population: "1,097,206 (2011 Census)",
        description: "Mizoram is known for its scenic beauty and high literacy rate. The name means 'Land of the Mizos'.",
        bounds: [[21.9, 92.2], [24.5, 93.5]],
        center: [23.1645, 92.9376],
        funFacts: [
            "Highest literacy rate in India after Kerala",
            "Mizoram means 'Land of the Mizos'",
            "Bamboo dance called Cheraw is famous here"
        ]
    },
    {
        name: "Sikkim",
        capital: "Gangtok",
        population: "610,577 (2011 Census)",
        description: "Sikkim is home to Kanchenjunga, the third highest mountain in the world. Known for its biodiversity.",
        bounds: [[27.0, 88.0], [28.1, 88.9]],
        center: [27.5330, 88.5122],
        funFacts: [
            "Least populated state in India",
            "Home to Kanchenjunga, the third highest mountain in the world",
            "First organic state in India"
        ]
    }
];

// Popular Indian Cities Data
const indianCities = [
    {
        name: "Mumbai",
        state: "Maharashtra",
        population: "12,442,373 (2011 Census)",
        description: "Mumbai is India's financial capital and home to Bollywood. It's the most populous city in India.",
        coordinates: [19.0760, 72.8777],
        funFacts: [
            "Mumbai's dabbawalas deliver over 200,000 lunch boxes daily with near-perfect accuracy",
            "Marine Drive is called the 'Queen's Necklace' when lit up at night",
            "Mumbai handles over 70% of India's maritime trade"
        ]
    },
    {
        name: "Delhi",
        state: "National Capital Territory",
        population: "11,034,555 (2011 Census)",
        description: "Delhi is India's capital and a historic city with monuments from various dynasties.",
        coordinates: [28.7041, 77.1025],
        funFacts: [
            "Delhi has been the capital of several empires over 3,000 years",
            "Red Fort hosts the Independence Day celebration every August 15",
            "Chandni Chowk is one of the oldest and busiest markets in India"
        ]
    },
    {
        name: "Bengaluru",
        state: "Karnataka",
        population: "8,443,675 (2011 Census)",
        description: "Bengaluru is India's Silicon Valley, known for its IT industry and pleasant climate.",
        coordinates: [12.9716, 77.5946],
        funFacts: [
            "Known as the 'Garden City of India' for its parks",
            "Houses the largest number of IT companies in India",
            "Bangalore Palace is inspired by England's Windsor Castle"
        ]
    },
    {
        name: "Hyderabad",
        state: "Telangana",
        population: "6,993,262 (2011 Census)",
        description: "Hyderabad is known as the 'City of Pearls' and is a major IT and pharmaceutical hub.",
        coordinates: [17.3850, 78.4867],
        funFacts: [
            "Hyderabadi biryani is world-famous",
            "Ramoji Film City is the world's largest film studio complex",
            "Charminar is the most iconic symbol of Hyderabad"
        ]
    },
    {
        name: "Ahmedabad",
        state: "Gujarat",
        population: "5,577,940 (2011 Census)",
        description: "Ahmedabad is known for its textile industry and is Gujarat's largest city.",
        coordinates: [23.0225, 72.5714],
        funFacts: [
            "First Indian city to be declared UNESCO World Heritage City",
            "Sabarmati Ashram was Mahatma Gandhi's home for 12 years",
            "Known as the 'Manchester of India' for its textile industry"
        ]
    },
    {
        name: "Chennai",
        state: "Tamil Nadu",
        population: "4,646,732 (2011 Census)",
        description: "Chennai is known for its cultural heritage, classical music, and automobile industry.",
        coordinates: [13.0827, 80.2707],
        funFacts: [
            "Marina Beach is the second longest beach in the world",
            "Called the 'Detroit of India' for its automobile industry",
            "December Music Season is the world's largest cultural event"
        ]
    },
    {
        name: "Kolkata",
        state: "West Bengal",
        population: "4,496,694 (2011 Census)",
        description: "Kolkata is known as the 'City of Joy' and was the capital of British India.",
        coordinates: [22.5726, 88.3639],
        funFacts: [
            "Howrah Bridge carries 100,000 vehicles daily without nuts and bolts",
            "Durga Puja is the biggest festival, declared as UNESCO Intangible Heritage",
            "Home to India's oldest museum and first public library"
        ]
    },
    {
        name: "Pune",
        state: "Maharashtra",
        population: "3,124,458 (2011 Census)",
        description: "Pune is known for its educational institutions and IT industry. Called the 'Oxford of the East'.",
        coordinates: [18.5204, 73.8567],
        funFacts: [
            "Called the 'Oxford of the East' for its educational institutions",
            "Second largest IT hub in India after Bengaluru",
            "Shaniwar Wada fort was the seat of Peshwa rulers"
        ]
    },
    {
        name: "Jaipur",
        state: "Rajasthan",
        population: "3,046,163 (2011 Census)",
        description: "Jaipur is known as the 'Pink City' and is famous for its palaces and forts.",
        coordinates: [26.9124, 75.7873],
        funFacts: [
            "Called the 'Pink City' due to the color of its buildings",
            "Hawa Mahal has 953 windows for royal ladies to observe street life",
            "First planned city in India, designed by Vidyadhar Bhattacharya"
        ]
    },
    {
        name: "Lucknow",
        state: "Uttar Pradesh",
        population: "2,817,105 (2011 Census)",
        description: "Lucknow is known for its Nawabi culture, cuisine, and historical monuments.",
        coordinates: [26.8467, 80.9462],
        funFacts: [
            "Known as the 'City of Nawabs'",
            "Famous for its tehzeeb (etiquette) and delicious kebabs",
            "Bara Imambara has one of the largest arched halls in the world"
        ]
    },
    {
        name: "Kochi",
        state: "Kerala",
        population: "602,046 (2011 Census)",
        description: "Kochi is a major port city known for its history as a spice trading center.",
        coordinates: [9.9312, 76.2673],
        funFacts: [
            "Known as the 'Queen of Arabian Sea'",
            "Chinese fishing nets are unique to Kochi",
            "First European township in India was established here by Portuguese"
        ]
    },
    {
        name: "Chandigarh",
        state: "Chandigarh (UT)",
        population: "960,787 (2011 Census)",
        description: "Chandigarh is a planned city designed by Le Corbusier, serving as capital of two states.",
        coordinates: [30.7333, 76.7794],
        funFacts: [
            "First planned city in India after independence",
            "Designed by famous architect Le Corbusier",
            "Capital of both Punjab and Haryana"
        ]
    },
    {
        name: "Varanasi",
        state: "Uttar Pradesh",
        population: "1,198,491 (2011 Census)",
        description: "Varanasi is one of the oldest continuously inhabited cities in the world and holiest city for Hindus.",
        coordinates: [25.3176, 82.9739],
        funFacts: [
            "One of the oldest continuously inhabited cities (over 3,000 years)",
            "Holiest city for Hindus with over 2,000 temples",
            "Mark Twain said: 'older than history, older than tradition'"
        ]
    },
    {
        name: "Agra",
        state: "Uttar Pradesh",
        population: "1,585,704 (2011 Census)",
        description: "Agra is home to the Taj Mahal, one of the Seven Wonders of the World.",
        coordinates: [27.1767, 78.0081],
        funFacts: [
            "Home to the Taj Mahal, a UNESCO World Heritage Site",
            "Agra Fort was the main residence of Mughal emperors",
            "Fatehpur Sikri near Agra was Akbar's capital"
        ]
    },
    {
        name: "Mysore",
        state: "Karnataka",
        population: "887,446 (2011 Census)",
        description: "Mysore is known for its palaces, especially the Mysore Palace, and cultural heritage.",
        coordinates: [12.2958, 76.6394],
        funFacts: [
            "Mysore Palace attracts more visitors than the Taj Mahal",
            "Known as the 'City of Palaces'",
            "Famous for Mysore Dasara celebrations and silk sarees"
        ]
    },
    {
        name: "Amritsar",
        state: "Punjab",
        population: "1,132,761 (2011 Census)",
        description: "Amritsar is home to the Golden Temple, the holiest shrine of Sikhism.",
        coordinates: [31.6340, 74.8723],
        funFacts: [
            "Golden Temple serves free meals to 100,000 people daily",
            "Jallianwala Bagh massacre site is now a memorial",
            "The only land border crossing between India and Pakistan at Wagah"
        ]
    },
    {
        name: "Guwahati",
        state: "Assam",
        population: "963,429 (2011 Census)",
        description: "Guwahati is the gateway to Northeast India and an important commercial center.",
        coordinates: [26.1445, 91.7362],
        funFacts: [
            "Gateway to Northeast India",
            "Kamakhya Temple is one of the most important Shakti Peethas",
            "Hosts the Brahmaputra river, one of the major rivers in Asia"
        ]
    },
    {
        name: "Bhubaneswar",
        state: "Odisha",
        population: "837,737 (2011 Census)",
        description: "Bhubaneswar is known as the 'Temple City' with over 700 temples.",
        coordinates: [20.2961, 85.8245],
        funFacts: [
            "Known as the 'Temple City of India' with over 700 temples",
            "Lingaraja Temple is a masterpiece of Kalinga architecture",
            "One of the first planned cities in independent India"
        ]
    },
    {
        name: "Visakhapatnam",
        state: "Andhra Pradesh",
        population: "1,730,320 (2011 Census)",
        description: "Visakhapatnam is a major port city known for its beaches and industrial importance.",
        coordinates: [17.6868, 83.2185],
        funFacts: [
            "Largest city in Andhra Pradesh",
            "Home to India's only natural harbor on the east coast",
            "Araku Valley near Vizag is a popular hill station"
        ]
    },
    {
        name: "Indore",
        state: "Madhya Pradesh",
        population: "1,960,631 (2011 Census)",
        description: "Indore is the commercial capital of Madhya Pradesh and cleanest city in India.",
        coordinates: [22.7196, 75.8577],
        funFacts: [
            "Cleanest city in India for 6 consecutive years (Swachh Survekshan)",
            "Educational hub with IIT Indore and IIM Indore",
            "Famous for its street food, especially poha and jalebi"
        ]
    },
    {
        name: "Surat",
        state: "Gujarat",
        population: "4,467,797 (2011 Census)",
        description: "Surat is known as the diamond capital of the world and is a major textile hub.",
        coordinates: [21.1702, 72.8311],
        funFacts: [
            "Processes 90% of the world's diamonds",
            "Known as the 'Diamond City of India'",
            "One of the fastest growing cities in the world"
        ]
    },
    {
        name: "Jamshedpur",
        state: "Jharkhand",
        population: "629,659 (2011 Census)",
        description: "Jamshedpur is India's first planned industrial city, founded by Jamsetji Tata.",
        coordinates: [22.8046, 86.2029],
        funFacts: [
            "First planned industrial city in India",
            "Founded by industrialist Jamsetji Tata",
            "No municipal corporation - managed by Tata Steel"
        ]
    },
    {
        name: "Patna",
        state: "Bihar",
        population: "1,684,222 (2011 Census)",
        description: "Patna is one of the oldest continuously inhabited cities in the world.",
        coordinates: [25.5941, 85.1376],
        funFacts: [
            "Over 2,500 years old",
            "Ancient name was Pataliputra, capital of Mauryan Empire",
            "Birthplace of Guru Gobind Singh, the tenth Sikh Guru"
        ]
    },
    {
        name: "Thiruvananthapuram",
        state: "Kerala",
        population: "957,730 (2011 Census)",
        description: "The capital of Kerala, known for its historic temples and beaches.",
        coordinates: [8.5241, 76.9366],
        funFacts: [
            "Padmanabhaswamy Temple has immense treasure",
            "Home to India's first IT park, Technopark",
            "Built on seven hills like Rome"
        ]
    },
    {
        name: "Nagpur",
        state: "Maharashtra",
        population: "2,405,421 (2011 Census)",
        description: "Nagpur is the geographical center of India and known for oranges.",
        coordinates: [21.1458, 79.0882],
        funFacts: [
            "Called the 'Orange City' for its orange cultivation",
            "Geographical center of India",
            "Second capital of Maharashtra (winter session)"
        ]
    },
    {
        name: "Bhopal",
        state: "Madhya Pradesh",
        population: "1,798,218 (2011 Census)",
        description: "Bhopal is the capital of Madhya Pradesh, known as the 'City of Lakes'.",
        coordinates: [23.2599, 77.4126],
        funFacts: [
            "Known as the 'City of Lakes'",
            "Has the largest mosque in India - Taj-ul-Masjid",
            "Greenest city in India with extensive forest cover"
        ]
    },
    {
        name: "Udaipur",
        state: "Rajasthan",
        population: "451,735 (2011 Census)",
        description: "Udaipur is known as the 'City of Lakes' and 'Venice of the East'.",
        coordinates: [24.5854, 73.7125],
        funFacts: [
            "Called the 'Venice of the East'",
            "City Palace is one of the largest palace complexes in Rajasthan",
            "Popular filming location for many Bollywood movies"
        ]
    },
    {
        name: "Madurai",
        state: "Tamil Nadu",
        population: "1,017,865 (2011 Census)",
        description: "Madurai is one of the oldest cities in India, known for the Meenakshi Temple.",
        coordinates: [9.9252, 78.1198],
        funFacts: [
            "Over 2,500 years old",
            "Meenakshi Temple has 14 towers (gopurams)",
            "Known as the 'Athens of the East'"
        ]
    },
    {
        name: "Shimla",
        state: "Himachal Pradesh",
        population: "169,578 (2011 Census)",
        description: "Shimla was the summer capital of British India and is a popular hill station.",
        coordinates: [31.1048, 77.1734],
        funFacts: [
            "Summer capital of British India",
            "Toy train is a UNESCO World Heritage Site",
            "Ridge and Mall Road are iconic tourist spots"
        ]
    },
    {
        name: "Rishikesh",
        state: "Uttarakhand",
        population: "102,138 (2011 Census)",
        description: "Rishikesh is known as the 'Yoga Capital of the World'.",
        coordinates: [30.0869, 78.2676],
        funFacts: [
            "Called the 'Yoga Capital of the World'",
            "The Beatles visited Maharishi Mahesh Yogi's ashram here",
            "Gateway to the Himalayas and Char Dham pilgrimage"
        ]
    }
];

// Indian Landmarks and Monuments Data
const indianLandmarks = [
    {
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        type: "Monument",
        description: "The Taj Mahal is an ivory-white marble mausoleum, one of the Seven Wonders of the World.",
        coordinates: [27.1751, 78.0421],
        funFacts: [
            "Built by Emperor Shah Jahan for his wife Mumtaz Mahal",
            "Took 22 years to build (1632-1653)",
            "Changes color depending on the time of day",
            "UNESCO World Heritage Site since 1983"
        ]
    },
    {
        name: "Red Fort",
        location: "Delhi",
        type: "Fort",
        description: "The Red Fort served as the main residence of Mughal emperors for nearly 200 years.",
        coordinates: [28.6562, 77.2410],
        funFacts: [
            "Built by Shah Jahan in 1648",
            "India's Prime Minister gives Independence Day speech here",
            "Made of red sandstone",
            "UNESCO World Heritage Site"
        ]
    },
    {
        name: "Gateway of India",
        location: "Mumbai, Maharashtra",
        type: "Monument",
        description: "An arch-monument built to commemorate the visit of King George V and Queen Mary.",
        coordinates: [18.9220, 72.8347],
        funFacts: [
            "Built in 1924",
            "Last British troops departed from here in 1948",
            "Combines Hindu and Muslim architectural styles",
            "Most photographed monument in Mumbai"
        ]
    },
    {
        name: "Qutub Minar",
        location: "Delhi",
        type: "Tower",
        description: "A 73-meter tall minaret and UNESCO World Heritage Site.",
        coordinates: [28.5244, 77.1855],
        funFacts: [
            "Tallest brick minaret in the world",
            "Built in 1193 by Qutb-ud-din Aibak",
            "Has 379 steps to the top",
            "Made of red sandstone and marble"
        ]
    },
    {
        name: "Hawa Mahal",
        location: "Jaipur, Rajasthan",
        type: "Palace",
        description: "The Palace of Winds is a five-story palace with 953 small windows.",
        coordinates: [26.9239, 75.8267],
        funFacts: [
            "Built in 1799 by Maharaja Sawai Pratap Singh",
            "953 windows called 'jharokhas'",
            "Built so royal women could observe street life",
            "Shaped like the crown of Lord Krishna"
        ]
    },
    {
        name: "Golden Temple",
        location: "Amritsar, Punjab",
        type: "Temple",
        description: "The holiest Gurdwara of Sikhism, covered in gold.",
        coordinates: [31.6200, 74.8765],
        funFacts: [
            "Also known as Harmandir Sahib",
            "Covered with 750 kg of gold",
            "Feeds 100,000 people daily for free",
            "Foundation laid by a Muslim saint"
        ]
    },
    {
        name: "Victoria Memorial",
        location: "Kolkata, West Bengal",
        type: "Museum",
        description: "A large marble building dedicated to Queen Victoria.",
        coordinates: [22.5448, 88.3426],
        funFacts: [
            "Built between 1906 and 1921",
            "Made of white Makrana marble",
            "Houses 28,394 artifacts",
            "Set in 64 acres of gardens"
        ]
    },
    {
        name: "Charminar",
        location: "Hyderabad, Telangana",
        type: "Monument",
        description: "A mosque and monument with four grand arches.",
        coordinates: [17.3616, 78.4747],
        funFacts: [
            "Built in 1591 by Sultan Muhammad Quli Qutb Shah",
            "Name means 'Four Towers'",
            "Built to commemorate the end of a plague",
            "Symbol of Hyderabad"
        ]
    },
    {
        name: "Meenakshi Temple",
        location: "Madurai, Tamil Nadu",
        type: "Temple",
        description: "A historic Hindu temple dedicated to Goddess Meenakshi.",
        coordinates: [9.9195, 78.1193],
        funFacts: [
            "Has 14 magnificent gopurams (gateway towers)",
            "Tallest tower is 52 meters high",
            "Attracts 15,000 visitors daily",
            "Over 33,000 sculptures"
        ]
    },
    {
        name: "Ajanta Caves",
        location: "Aurangabad, Maharashtra",
        type: "Caves",
        description: "Rock-cut Buddhist cave monuments with paintings and sculptures.",
        coordinates: [20.5519, 75.7033],
        funFacts: [
            "Created between 2nd century BCE and 6th century CE",
            "30 rock-cut Buddhist cave monuments",
            "UNESCO World Heritage Site",
            "Rediscovered in 1819 by British officer"
        ]
    },
    {
        name: "Konark Sun Temple",
        location: "Konark, Odisha",
        type: "Temple",
        description: "A 13th-century temple dedicated to the Sun God Surya.",
        coordinates: [19.8876, 86.0945],
        funFacts: [
            "Built in the 13th century",
            "Designed as a giant chariot with 24 wheels",
            "UNESCO World Heritage Site",
            "Also known as the 'Black Pagoda'"
        ]
    },
    {
        name: "Mysore Palace",
        location: "Mysore, Karnataka",
        type: "Palace",
        description: "The official residence of the Wadiyar dynasty and seat of the Kingdom of Mysore.",
        coordinates: [12.3051, 76.6551],
        funFacts: [
            "Attracts more visitors than the Taj Mahal",
            "Illuminated with 97,000 light bulbs on Sundays",
            "Built in Indo-Saracenic style",
            "Completed in 1912"
        ]
    },
    {
        name: "India Gate",
        location: "Delhi",
        type: "War Memorial",
        description: "A war memorial dedicated to soldiers who died in World War I.",
        coordinates: [28.6129, 77.2295],
        funFacts: [
            "Built in 1931",
            "42 meters tall",
            "Names of 13,300 soldiers inscribed",
            "Amar Jawan Jyoti flame burns underneath"
        ]
    },
    {
        name: "Khajuraho Temples",
        location: "Khajuraho, Madhya Pradesh",
        type: "Temple Complex",
        description: "Famous for their erotic sculptures and intricate architecture.",
        coordinates: [24.8318, 79.9199],
        funFacts: [
            "Built between 950 and 1050 CE",
            "UNESCO World Heritage Site",
            "Originally 85 temples, 25 survive today",
            "Famous for erotic sculptures"
        ]
    },
    {
        name: "Hampi Monuments",
        location: "Hampi, Karnataka",
        type: "Historical Site",
        description: "Ruins of the Vijayanagara Empire, a UNESCO World Heritage Site.",
        coordinates: [15.3350, 76.4600],
        funFacts: [
            "Capital of Vijayanagara Empire",
            "UNESCO World Heritage Site",
            "Over 1,600 monuments",
            "One of the richest cities in the 16th century"
        ]
    },
    {
        name: "Statue of Unity",
        location: "Kevadia, Gujarat",
        type: "Statue",
        description: "The world's tallest statue, dedicated to Sardar Vallabhbhai Patel.",
        coordinates: [21.8380, 73.7191],
        funFacts: [
            "World's tallest statue at 182 meters",
            "Inaugurated in 2018",
            "Used 70,000 tonnes of cement and 25,000 tonnes of steel",
            "Twice as tall as the Statue of Liberty"
        ]
    },
    {
        name: "Jagannath Temple",
        location: "Puri, Odisha",
        type: "Temple",
        description: "A sacred Hindu temple dedicated to Lord Jagannath.",
        coordinates: [19.8135, 85.8312],
        funFacts: [
            "One of the four sacred Char Dham pilgrimage sites",
            "Famous annual Rath Yatra (chariot festival)",
            "The word 'Juggernaut' derives from Jagannath",
            "Flag atop temple always flaps in opposite direction to wind"
        ]
    },
    {
        name: "Elephanta Caves",
        location: "Mumbai, Maharashtra",
        type: "Caves",
        description: "Rock-cut cave temples dedicated to Lord Shiva.",
        coordinates: [18.9633, 72.9315],
        funFacts: [
            "UNESCO World Heritage Site",
            "Contains Hindu and Buddhist sculptures",
            "Famous Trimurti sculpture of Shiva",
            "Located on Elephanta Island"
        ]
    }
];

// Major Rivers and Geographical Features
const indianRivers = [
    {
        name: "Ganges (Ganga)",
        length: "2,525 km",
        type: "River",
        description: "The holiest river in Hinduism, flowing from the Himalayas to the Bay of Bengal.",
        coordinates: [25.3176, 82.9739],
        funFacts: [
            "Longest river in India",
            "Originates from Gangotri Glacier in Uttarakhand",
            "Supports 43% of India's population",
            "Has over 140 fish species"
        ]
    },
    {
        name: "Brahmaputra",
        length: "2,900 km (in India: 916 km)",
        type: "River",
        description: "One of the major rivers of Asia, flows through Tibet, India, and Bangladesh.",
        coordinates: [26.1445, 91.7362],
        funFacts: [
            "Only Indian river referred to with masculine name",
            "Forms the world's largest delta with Ganges",
            "Home to river dolphins",
            "Called 'Yarlung Tsangpo' in Tibet"
        ]
    },
    {
        name: "Yamuna",
        length: "1,376 km",
        type: "River",
        description: "The longest tributary of the Ganges, flowing through Delhi and Agra.",
        coordinates: [25.4358, 81.8463],
        funFacts: [
            "Longest tributary of Ganges",
            "Originates from Yamunotri Glacier",
            "Flows through the cities of Delhi and Agra",
            "Taj Mahal is located on its banks"
        ]
    },
    {
        name: "Godavari",
        length: "1,465 km",
        type: "River",
        description: "The second longest river in India, known as 'Dakshin Ganga'.",
        coordinates: [16.7333, 81.6667],
        funFacts: [
            "Second longest river in India",
            "Called 'Dakshin Ganga' (Ganges of South)",
            "Flows through Maharashtra, Telangana, and Andhra Pradesh",
            "Forms one of the largest river basins"
        ]
    },
    {
        name: "Narmada",
        length: "1,312 km",
        type: "River",
        description: "The largest west-flowing river of peninsular India.",
        coordinates: [21.7000, 73.0167],
        funFacts: [
            "Largest west-flowing river in India",
            "Flows through a rift valley",
            "Mentioned in ancient texts like Ramayana",
            "Sardar Sarovar Dam is built on this river"
        ]
    },
    {
        name: "Krishna",
        length: "1,400 km",
        type: "River",
        description: "The fourth-longest river in India, flowing through Maharashtra, Karnataka, and Andhra Pradesh.",
        coordinates: [16.0000, 80.6167],
        funFacts: [
            "Fourth-longest river in India",
            "Originates near Mahabaleshwar in Maharashtra",
            "Important for irrigation in the Deccan region",
            "Meets the Bay of Bengal"
        ]
    },
    {
        name: "Western Ghats",
        length: "1,600 km mountain range",
        type: "Mountain Range",
        description: "A biodiversity hotspot and UNESCO World Heritage Site.",
        coordinates: [11.0000, 76.0000],
        funFacts: [
            "UNESCO World Heritage Site",
            "One of eight 'hottest hotspots' of biodiversity",
            "Influences Indian monsoon weather patterns",
            "Home to 325 globally threatened species"
        ]
    },
    {
        name: "Himalayan Range",
        length: "2,400 km (in India)",
        type: "Mountain Range",
        description: "The highest mountain range in the world, home to Mount Everest.",
        coordinates: [28.0000, 84.0000],
        funFacts: [
            "Highest mountain range in the world",
            "Has 10 of the world's 14 peaks above 8,000m",
            "Forms India's northern border",
            "Source of major rivers like Ganges and Brahmaputra"
        ]
    },
    {
        name: "Thar Desert",
        length: "200,000 sq km",
        type: "Desert",
        description: "The largest desert in India, located in Rajasthan.",
        coordinates: [27.0000, 71.0000],
        funFacts: [
            "Also called the Great Indian Desert",
            "Seventh largest desert in the world",
            "Most densely populated desert in the world",
            "Home to unique wildlife including Great Indian Bustard"
        ]
    },
    {
        name: "Sundarbans",
        length: "10,000 sq km",
        type: "Mangrove Forest",
        description: "The largest mangrove forest and home to the Royal Bengal Tiger.",
        coordinates: [21.9497, 89.1833],
        funFacts: [
            "Largest mangrove forest in the world",
            "UNESCO World Heritage Site",
            "Home to Royal Bengal Tigers",
            "Named after the Sundari trees"
        ]
    }
];

// Difficulty levels configuration
const difficultyLevels = {
    easy: {
        name: "Easy",
        pointsMultiplier: 1,
        timeLimit: null, // No time limit
        hintsAvailable: 3
    },
    medium: {
        name: "Medium",
        pointsMultiplier: 2,
        timeLimit: 30, // 30 seconds
        hintsAvailable: 2
    },
    hard: {
        name: "Hard",
        pointsMultiplier: 3,
        timeLimit: 15, // 15 seconds
        hintsAvailable: 1
    }
};

// Achievements system
const achievements = [
    {
        id: "first_state",
        name: "First Steps",
        description: "Master your first state",
        icon: "🎯",
        condition: (progress) => progress.statesMastered.length >= 1
    },
    {
        id: "five_states",
        name: "Geography Enthusiast",
        description: "Master 5 states",
        icon: "🌟",
        condition: (progress) => progress.statesMastered.length >= 5
    },
    {
        id: "all_states",
        name: "State Master",
        description: "Master all 28 states",
        icon: "👑",
        condition: (progress) => progress.statesMastered.length >= 28
    },
    {
        id: "first_city",
        name: "Urban Explorer",
        description: "Discover your first city",
        icon: "🏙️",
        condition: (progress) => progress.citiesDiscovered.length >= 1
    },
    {
        id: "ten_cities",
        name: "City Navigator",
        description: "Discover 10 cities",
        icon: "🗺️",
        condition: (progress) => progress.citiesDiscovered.length >= 10
    },
    {
        id: "all_cities",
        name: "City Expert",
        description: "Discover all cities",
        icon: "🏆",
        condition: (progress) => progress.citiesDiscovered.length >= 30
    },
    {
        id: "landmark_explorer",
        name: "Monument Hunter",
        description: "Learn about 5 landmarks",
        icon: "🏛️",
        condition: (progress) => (progress.landmarksLearned || []).length >= 5
    },
    {
        id: "river_expert",
        name: "River Expert",
        description: "Master all rivers and geographical features",
        icon: "💧",
        condition: (progress) => (progress.riversLearned || []).length >= 10
    },
    {
        id: "high_scorer",
        name: "High Achiever",
        description: "Score 1000 points",
        icon: "💯",
        condition: (progress) => progress.totalScore >= 1000
    },
    {
        id: "streak_master",
        name: "Streak Master",
        description: "Get 10 correct answers in a row",
        icon: "🔥",
        condition: (progress) => (progress.maxStreak || 0) >= 10
    },
    {
        id: "speed_demon",
        name: "Speed Demon",
        description: "Complete 20 timed challenges",
        icon: "⚡",
        condition: (progress) => (progress.timedChallenges || 0) >= 20
    },
    {
        id: "perfectionist",
        name: "Perfectionist",
        description: "Complete a level with 100% accuracy",
        icon: "✨",
        condition: (progress) => (progress.perfectLevels || 0) >= 1
    }
];

// Export data for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        indianStates, 
        indianCities, 
        indianLandmarks, 
        indianRivers,
        difficultyLevels,
        achievements
    };
}
