const africaQuestions = [
  {
    question: "What is the capital of Togo?",
    options: ["Accra", "Kinshasha", "Lome", "None of the above"],
    correctAnswer: 2, //"Lome",
    id: 1,
  },
  {
    question: "What is the capital of Ivory Coast?",
    options: ["Pretoria", "Abuja", "Freetown", "None of the above"],
    correctAnswer: 3, //"None of the above",
    id: 2,
  },
  {
    question: "Where is the capital of Nigeria before it was moved to Abuja?",
    options: ["Onitsha", "Calabar", "Zaria", "None of the above"],
    correctAnswer: 3, //"None of the above",
    id: 3,
  },
  {
    question: "Congo has one of the largest deposit of _____ in the world?",
    options: ["Cocoa", "Ivory", "Crude-oil", "Uranium"],
    correctAnswer: 3, //"Uranium",
    id: 4,
  },
  {
    question: "Before the discovery of crude-oil, Nigeria exports ______.",
    options: ["Groundnut", "Cocoa", "Cotton", "All of the above"],
    correctAnswer: 3, //"All of the above",
    id: 5,
  },
  {
    question:
      "The colonial masters appointed warrant chief for administrative purposes in which part of pre-colonial Nigeria?",
    options: ["East", "West", "North", "All of the above"],
    correctAnswer: 0, //"East",
    id: 6,
  },
  {
    question: "Samuel Doe was president of ______",
    options: ["Mali", "Djibouti", "Liberia", "Angola"],
    correctAnswer: 2, //"Liberia",
    id: 7,
  },
  {
    question:
      "The Sayfawa dynasty of the Kanem-Bornu ruled for more than ______ years",
    options: ["700", "800", "920", "1730"],
    correctAnswer: 1, //"800",
    id: 8,
  },
  {
    question:
      "'How Europe underdeveloped africa' is a book explaining the ways in which the Europeans undermines Africa development. It was written by ______",
    options: ["O. Cardoso", "W. Rodney", "S. Amin", "WW Rostow"],
    correctAnswer: 1, //"W. Rodney",
    id: 9,
  },
  {
    question: "Kwame Nkrumah is the first elected president of Ghana.",
    options: ["True", "False"],
    correctAnswer: 0, //"True",
    id: 10,
  },
  {
    question: "Krahn is a small ethnic group in _____.",
    options: ["Nigeria", "Uganda", "Liberia", "Rwanda"],
    correctAnswer: 2, //"Liberia",
    id: 11,
  },
  {
    question:
      "Which of the following early African leaders uphold the idea of Ujaamah?",
    options: ["T.Sankhara", "N.Azikiwe", "F.Fanon", "J.Nyerere"],
    correctAnswer: 3, //"J.Nyerere",
    id: 12,
  },
  {
    question: "Tanganyika and Zanzibar is present day ______.",
    options: ["Eritrea", "Seychelles", "Tunisia", "Tanzania"],
    correctAnswer: 3, //"Tanzania",
    id: 13,
  },
  {
    question: "_____ is referred to as Gaint of Africa",
    options: ["Ethiopia", "Egypt", "South-Africa", "Nigeria"],
    correctAnswer: 3, //"Nigeria",
    id: 14,
  },
  {
    question: "All these countries are North Africa countries except _____",
    options: ["Algeria", "Mali", "Egpyt", "Morrocco"],
    correctAnswer: 1, //"Mali",
    id: 15,
  },
  {
    question: "____ is the capital of Sierra-Leone?",
    options: ["Timbuktu", "London", "Mogadishu", "Freetown"],
    correctAnswer: 3, //"Freetown",
    id: 16,
  },
  {
    question: "AU was preceded by OAU",
    options: ["True", "False"],
    correctAnswer: 0, //"True",
    id: 17,
  },
  {
    question: "ECOMOG is the security arm of ______.",
    options: ["ECOWAS", "UN", "OPEC", "None of the above"],
    correctAnswer: 0, //"ECOWAS",
    id: 18,
  },
  {
    question:
      "______ as a body is responsible for all footballing activities in Africa.",
    options: ["FIFA", "NFF", "CAF", "None of the above"],
    correctAnswer: 2, //"CAF",
    id: 19,
  },
  {
    question: "Onitsha can be found in ______",
    options: ["Liberia", "Tunisia", "Cameroon", "Nigeria"],
    correctAnswer: 3, //"Nigeria",
    id: 20,
  },
  {
    question:
      "The last independent country in Africa gained her Independce on 9 July 2011.",
    options: ["True", "False"],
    correctAnswer: 0, //"True",
    id: 21,
  },
  {
    question:
      "Cape Verde/ Cabo Verde gained her independence from Portugal on _______.",
    options: [
      "5th July 1976",
      "5th July 1978",
      "5th July 1975",
      "28th November 1980",
    ],
    correctAnswer: 2, //"5th July 1975",
    id: 22,
  },
  {
    question: "The Nigeria civil was from _____ to _____.",
    options: ["1967-1970", "1968-1970", "1970-1973", "1965-1970"],
    correctAnswer: 0, //"1967-1970"
    id: 23,
  },
  {
    question: "Y. Musevini is the president of ______.",
    options: ["Uganda", "Eritrea", "Rwanda", "Burundi"],
    correctAnswer: 0, //"Uganda"
    id: 24,
  },
  {
    question: "Mau-Mau war took place in _____ during the colonial era.",
    options: ["Tunisia", "Madagascar", "Nigeria", "Kenya"],
    correctAnswer: 3, //"Kenya"
    id: 25,
  },
  {
    question: "Burkina-Faso is formerly referred to as _____.",
    options: ["Nyasaland", "Gold-Coast", "Upper-Volta", "South-Rhodesia"],
    correctAnswer: 0, //"Upper-volta"
    id: 26,
  },
  {
    question: "Rhodesia is present day ______ and ______.",
    options: [
      "Zambia and Zimbabwe",
      "Burkina-Faso and Comoros",
      "Madagascar and Eritrea",
      "Malawi and Zimbabwe",
    ],
    correctAnswer: 0, //"Zambia and Zimbabwe"
    id: 27,
  },
  {
    question:
      "F.Fanon was a french soldier that came back to ______ to grow independent movement.",
    options: ["Uganda", "Algeria", "Tunisia", "Morocco"],
    correctAnswer: 1, //"Algeria"
    id: 28,
  },
  {
    question:
      "Almost all independent African state are still under obligations to their colonial masters through _______.",
    options: [
      "Modernization",
      "Civilization",
      "Neo-colonialism",
      "Imperialism",
    ],
    correctAnswer: 2, //"Neo-colonialism"
    id: 29,
  },
  {
    question: "Julius Nyerere is the first president of _____.",
    options: ["Tunisia", "Tanzania", "Malawi", "Eritrea"],
    correctAnswer: 1, //"Tanzania"
    id: 30,
  },
  {
    question: "Dar-es-salam is the capital of ______.",
    options: ["Libya", "Morocco", "Tanzania", "Egypt"],
    correctAnswer: 2, //"Tanzania"
    id: 31,
  },
];

export default africaQuestions;
