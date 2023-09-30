import * as Types from "./types";

export const lines: Types.Line[] = [
  {
    speaking: "left",
    left: {
      type: Types.CharacterType.Cat,
      mood: Types.Mood.Happy,
    },
    right: {
      type: Types.CharacterType.Dog,
      mood: Types.Mood.Sad,
    },
    environment: Types.Environment.Room,
    content: {
      text: "Hej, z naszym przyjacielem psem sprzeczamy się kto powinien zadbać o oświetlenie naszej imprezy. Pies zgłosił się pierwszy no wiesz, ale ja jako kot mam lepszy wzrok więc na pewno sobie lepiej z tym poradzę. Co o tym myślisz? Kto powinien się tym zająć?",
      key: "oswietlenie-glowne-pytanie",
    },
    speaking: "right",
    content: {
      text: "Hał Hał, wybierz mnie!!! Jestem pies ja umiem szczekac!!",
      key: "oswietlenie-pies-odpowiedz",
    },
    content{
      answers: [
        {
          text: "Pies",
          key: "pies"
        },
        {
          text: "Kot",
          key: "kot"
        }
      ]
    }
  }
];
