import * as Types from "./types";

export const lines: Types.Line[] = [
  {
    speaking: "left",
    left: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Happy,
    },
    right: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Sad,
    },
    environment: Types.Environment.Room,
    content: {
      text: "Are you happy? śćźół ółć",
      key: "happy",
      answers: [
        {
          text: "Yes",
          key: "yes",
          answers: [
            {
              text: "Yes Yes!!!",
              key: "yes-yes",
            },
          ],
        },
        {
          text: "No",
          key: "no",
        },
      ],
    },
  },
  {
    speaking: "right",
    left: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Happy,
    },
    right: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Sad,
    },
    environment: Types.Environment.Room,
    content: {
      text: "This is just storyline, no interaction here",
      key: "skip",
    },
  },
  {
    left: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Sad,
    },
    right: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Happy,
    },
    environment: Types.Environment.Forest,
    content: {
      text: "Vestibulum luctus lectus ex, ut interdum lacus tincidunt id. Pellentesque augue lacus, euismod sit amet semper in, suscipit nec metus. Praesent quis mauris urna?",
      key: "forest",
      answers: [
        {
          text: "Vestibulum luctus lectus ex, ut interdum lacus tincidunt id. Pellentesque augue lacus, euismod sit amet semper in, suscipit nec metus. Praesent quis mauris urna.",
          key: "yes",
        },
        {
          text: "No",
          key: "no",
        },
      ],
    },
  },
  {
    left: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Neutral,
    },
    right: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Happy,
    },
    environment: Types.Environment.Meadow,
    content: {
      text: "What's your favorite color?",
      key: "color",
      answers: [
        {
          text: "Red",
          key: "red",
        },
        {
          text: "Blue",
          key: "blue",
        },
        {
          text: "Green",
          key: "green",
        },
      ],
    },
  },
  {
    left: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Happy,
    },
    right: {
      type: Types.CharacterType.Frog,
      mood: Types.Mood.Sad,
    },
    environment: Types.Environment.Desert,
    content: {
      text: "Do you like the heat?",
      key: "heat",
      answers: [
        {
          text: "Yes",
          key: "yes",
        },
        {
          text: "No",
          key: "no",
        },
      ],
    },
  },
];

