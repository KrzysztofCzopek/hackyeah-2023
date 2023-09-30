import * as Types from "./types";

const CAT_DOG = {
  left: {
    type: Types.CharacterType.Cat,
    mood: Types.Mood.Happy,
  },
  right: {
    type: Types.CharacterType.Dog,
    mood: Types.Mood.Sad,
  },
};

export const lines: Types.Line[] = [
  {
    left: CAT_DOG.left,
    speaking: "left",
    environment: Types.Environment.Room,
    content: {
      text: "Hej, z naszym przyjacielem psem sprzeczamy się kto powinien zadbać o oświetlenie naszej imprezy. Pies zgłosił się pierwszy no wiesz, ale ja jako kot mam lepszy wzrok więc na pewno sobie lepiej z tym poradzę. Co o tym myślisz? Kto powinien się tym zająć?",
      key: "oswietlenie-glowne-pytanie",
    },
  },
  {
    right: CAT_DOG.right,
    speaking: "right",
    content: {
      text: "Hał Hał, wybierz mnie!!! Jestem pies ja umiem szczekać!!",
      key: "oswietlenie-pies-odpowiedz",
    },
  },
  {
    ...CAT_DOG,
    content: {
      key: "oswietlenie-kot-odpowiedz",
      text: "Kto powinien zająć się oświetleniem?",
      answers: [
        {
          text: "Pies",
          key: "pies",
        },
        {
          text: "Kot",
          key: "kot",
        },
      ],
    },
  },
  {
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
  }
];
