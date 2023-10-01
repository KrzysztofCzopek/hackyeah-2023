import * as Types from "./types";

const CAT_DOG = {
  left: Types.CharacterType.Cat,
  right: Types.CharacterType.Dog,
};

export const lines: Types.Line[] = [
  {
    right: Types.CharacterType.Note,
    speaking: "right",
    environment: Types.Environment.Room,
    content: {
      text: "Najwysza pora wypełnić te dokumenty...",
      key: "notes-0",
    },
  },
  {
    right: Types.CharacterType.Note,
    speaking: "right",
    environment: Types.Environment.Room,
    content: {
      text: "Wiek?",
      key: "notes-sleep",

      answers: [
        {
          key: "18-21",
          text: "18-21",
        },
        {
          key: "21-25",
          text: "21-25",
        },
        {
          key: "25-30",
          text: "25-30",
        },
      ],
    },
  },
  {
    right: Types.CharacterType.Note,
    speaking: "right",
    environment: Types.Environment.Room,
    content: {
      text: "Miasto studiowania?",
      key: "city",

      answers: [
        {
          key: "Greater",
          text: "Greater Poland Voivodeship",
          answers: [
            {
              key: "Poznan",
              text: "Poznań",
            },
            {
              key: "Kalisz",
              text: "Kalisz",
            },
            {
              key: "Konin",
              text: "Konin",
            },
          ],
        },
        {
          text: "Masovian Voivodeship",
          key: "Masovian",
          answers: [
            {
              key: "Warsaw",
              text: "Warsaw",
            },
            {
              key: "Radom",
              text: "Lublin",
            },
            {
              key: "Plock",
              text: "Płock",
            },
          ],
        },
        {
          text: "Silesian Voivodeship",
          key: "Silesian",
          answers: [
            {
              text: "Katowice",
              key: "Katowice",
            },
            {
              text: "Gliwice",
              key: "Gliwice",
            },
            {
              text: "Sosnowiec",
              key: "Sosnowiec",
            },
            // Add more cities with universities here
          ],
        },
        {
          text: "Lesser Poland Voivodeship",
          key: "Lesser",
          answers: [
            {
              key: "Krakow",
              text: "Kraków",
            },
            {
              key: "Tarnow",
              text: "Tarnów",
            },
            {
              key: "Nowy Sącz",
              text: "Nowy Sącz",
            },
          ],
        },
      ],
    },
  },
  {
    right: Types.CharacterType.Note,
    speaking: "right",
    environment: Types.Environment.Room,
    content: {
      text: "Ale nuda, jeszcze kilka pytań...",
      key: "before-sleep",
    },
  },
  {
    right: Types.CharacterType.Note,
    speaking: "right",
    environment: Types.Environment.Room,
    content: {
      text: "...[aaahhhhh, ziew]...",
      key: "before-sleep-2",
    },
  },

  {
    content: {
      text: "...",
      key: "before-sleep-3",
    },
  },
  {
    right: Types.CharacterType.PigeonFly,
    speaking: "right",
    environment: Types.Environment.Room,
    content: {
      text: "[Gru, Gru, Gru] Obudź się!",
      key: "pigeon",
    },
  },
  {
    left: Types.CharacterType.Capibara,
    speaking: "left",
    environment: Types.Environment.Room,
    content: {
      text: "Hej, z naszym przyjacielem psem sprzeczamy się kto powinien zadbać o oświetlenie naszej imprezy. Pies zgłosił się pierwszy no wiesz, ale ja jako kot mam lepszy wzrok więc na pewno sobie lepiej z tym poradzę. Co o tym myślisz? Kto powinien się tym zająć?",
      key: "oswietlenie-glowne-pytanie",
    },
  },
  {
    right: Types.CharacterType.Dog,
    speaking: "right",
    content: {
      text: "Hał Hał, wybierz mnie!!! Jestem pies ja umiem szczekać!!",
      key: "oswietlenie-pies-odpowiedz",
    },
  },
  {
    left: Types.CharacterType.Capibara,
    right: Types.CharacterType.Dog,
    content: {
      key: "oswietlenie-capibara-odpowiedz",
      text: "Kto powinien zająć się oświetleniem?",
      answers: [
        {
          text: "Pies",
          key: "pies",
        },
        {
          text: "Kapibara",
          key: "capibara",
        },
      ],
    },
  },
  {
    right: Types.CharacterType.Boberek,
    speaking: "right",
    content: {
      key: "lol",
      text: "Empty!?",
      answers: [
        {
          text: "lol",
          key: "pies",
        },
        {
          text: "lol2",
          key: "kot",
        },
      ],
    },
  },
];
