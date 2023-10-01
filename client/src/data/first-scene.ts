import * as Types from "./types";

export const lines: Types.Line[] = [
  {
    right: Types.CharacterType.Note,
    speaking: "right",
    environment: Types.Environment.Room,
    content: {
      text: "Najwyższa pora wypełnić te dokumenty...",
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
    right: Types.CharacterType.PigeonFly,
    speaking: "right",
    environment: Types.Environment.Room,
    content: {
      text: "[Gru, Gru, Gru] Obudź się!",
      key: "pigeon",
    },
  },
  
  {
    left: Types.CharacterType.PigeonStand,
    speaking: "left",
    environment: Types.Environment.Room,
    content: {
      text: "Witaj przybyszu. Jestem Sowa (tak naprawdę to gołąb). Symbol mądrości. Chciałbym zabrać Cię w podróż po mojej krainie. Panuje w niej aktualnie lekki chaos w związku z nadchodzącym przyjęciem. Jednak mam nadzieje, że pomożesz nam się z tym uporać!",
      key: "pidgeon-wstep",
    },
  },
  {
    left: Types.CharacterType.Capibara,
    speaking: "left",
    environment: Types.Environment.Meadow,
    content: {
      text: "Pies słuchaj, to ja powinienem wieszać oświetlenie bo to ja się lepiej znam!!! Jestem bardziej zorientowany na sztukę i estetykę, więc mogę stworzyć piękne oświetlenie, które będzie wyglądać wspaniale.",
      key: "oswietlenie-1",
    },
  },
  {
    left: Types.CharacterType.Capibara,
    right: Types.CharacterType.Dog,
    environment: Types.Environment.Meadow,
    speaking: "right",
    content: {
      text: "Może i tak. Ale przecież na przyjęciu będzie wiele technicznych detali do ogarnięcia. Ja jestem bardziej zorientowany na praktyczne rozwiązania i mogę zadbać o to, żeby wszystko działało sprawnie.",
      key: "oswietlenie-2",
    },
  },
  {
    left: Types.CharacterType.Capibara,
    right: Types.CharacterType.Dog,
    environment: Types.Environment.Meadow,
    speaking: "left",
    content: {
      text: "Hmm, masz rację, piesie. Ale moja umiejętność wyrażania siebie może przynieść wyjątkową atmosferę.",
      key: "oswietlenie-3",
    },
  },
  {
    left: Types.CharacterType.Capibara,
    right: Types.CharacterType.Dog,
    environment: Types.Environment.Meadow,
    speaking: "right",
    content: {
      text: "To prawda, ale pamiętaj, że równie ważne jest zrozumienie technicznych aspektów.",
      key: "oswietlenie-4"
    },
  },
  {
    right: Types.CharacterType.PigeonFly,
    environment: Types.Environment.Meadow,
    speaking: "left",
    content: {
      text: "",
      key: "oswietlenie-5"
    },
  },
  {
    right: Types.CharacterType.PigeonStand,
    environment: Types.Environment.Meadow,
    speaking: "left",
    content: {
      text: "Może nasz gość zdecyduje kto zawiesi oświetlenie, co? ",
      key: "oswietlenie-6"
    },
  },
  {
    left: Types.CharacterType.Capibara,
    right: Types.CharacterType.Dog,
    environment: Types.Environment.Meadow,
    content: {
      key: "oswietlenie-odpowiedz",
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
    left: Types.CharacterType.PigeonStand,
    environment: Types.Environment.Meadow,
    content: {
      key: "oswietlenie-koniec",
      text: "Mądra decyzja! Może uda Ci się rozsądzić jeszcze jeden spór?",
    },
  },
  {
    left: Types.CharacterType.Frog,
    environment: Types.Environment.Meadow,
    speaking: "left",
    content: {
      key: "aktywnosc-1",
      text: "Deklamacja starożynych poematów nie jest opcjonalna! Musimy wnieść trochę kultury w to przyjęcie.",
    },
  },
  {
    left: Types.CharacterType.Frog,
    right: Types.CharacterType.Boberek,
    environment: Types.Environment.Meadow,
    speaking: "right",
    content: {
      key: "aktywnosc-2",
      text: "Wszyscy przecież zanudzą się. Na śmierć. Ale za to pokaz fajerwerków. Emocje, kolory. Rozrywka!",
    },
  },
  {
    left: Types.CharacterType.Frog,
    right: Types.CharacterType.Boberek,
    environment: Types.Environment.Meadow,
    content: {
      key: "aktywnosc-odpowiedz",
      text: "Jak uświetnimy tę okazję?",
      answers: [
        {
          text: "Pokaz fajerwerków na pewno dostarczy wszystkim dużo wrażeń!",
          key: "boberek",
        },
        {
          text: "Uwielbiam poezję! To prawdziwa gratka",
          key: "zabka",
        },
      ],
    },
  },
  {
    left: Types.CharacterType.PigeonStand,
    environment: Types.Environment.Meadow,
    speaking: "left",
    content: {
      key: "oswietlenie-koniec",
      text: "Wszystko rozwiązane! Teraz w końcu możemy zacząć naszą imprezę!",
    },
  },
  {
    environment: Types.Environment.Party,
    content: {
      key: "party",
      text: "A teraz zabawa!!!",
    },
  },
];
