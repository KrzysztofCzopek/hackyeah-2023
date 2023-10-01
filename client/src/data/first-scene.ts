import * as Types from "./types";

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
          key: "city;Greater",
          text: "Greater Poland Voivodeship",
          answers: [
            {
              key: "52.409538;16.931992",
              text: "Poznań",
            },
            {
              key: "51.76109;18.09102",
              text: "Kalisz",
            },
            {
              key: "52.22338;18.25121",
              text: "Konin",
            },
          ],
        },
        {
          text: "Masovian Voivodeship",
          key: "city;Masovian",
          answers: [
            {
              key: "52.22977;21.01178",
              text: "Warsaw",
            },
            {
              key: "51.25;22.56667",
              text: "Lublin",
            },
            {
              key: "52.54682;19.70638",
              text: "Płock",
            },
          ],
        },
        {
          text: "Silesian Voivodeship",
          key: "city;Silesian",
          answers: [
            {
              key: "50.25841;19.02754",
              text: "Katowice",
            },
            {
              key: "50.29761;18.67658",
              text: "Gliwice",
            },
            {
              key: "50.28682;19.10385",
              text: "Sosnowiec",
            },
            // Add more cities with universities here
          ],
        },
        {
          text: "Lesser Poland Voivodeship",
          key: "city;Lesser",
          answers: [
            {
              key: "50.06143;19.93658",
              text: "Kraków",
            },
            {
              key: "50.01381;20.98698",
              text: "Tarnów",
            },
            {
              key: "49.62177;20.69705",
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
