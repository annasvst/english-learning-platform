export interface Question {
  title: string;
  options: string[];
  correctAnswer: number;
}

export interface Passage {
  passageId: string;
  passageTitle: string;
  passageText: string;
  questions: Question[];
}
export const readingPassages: Passage[] = [
  {
    passageId: 'passage-1',
    passageTitle: "Passage 1 (B1–B2)",
    passageText: `Many people today choose to spend their vacations in smaller towns rather than in large cities. They enjoy the slower pace of life and the chance to explore local traditions. In these towns, visitors often discover family-owned shops, try authentic regional cuisine, and take part in cultural festivals that have been celebrated for decades. While big cities might offer famous landmarks and modern attractions, small towns give travelers a closer look into the everyday lives of local residents. In addition, many small communities benefit from tourism revenue, which helps support local businesses and preserve cultural heritage.`,
    questions: [
      {
        title:
          "Which of the following is a main reason people choose to visit smaller towns?",
        options: [
          "They want to spend more money on luxury hotels.",
          "They prefer the slower pace and local traditions.",
          "They need to attend large-scale international events.",
          "They only want to shop at large department stores."
        ],
        // (Suggested answer: B => index 1)
        correctAnswer: 1
      },
      {
        title: "What benefit do local residents gain from tourism?",
        options: [
          "They receive free airline tickets to other countries.",
          "They rely on tourists to maintain big-city infrastructures.",
          "They earn additional revenue that supports local businesses.",
          "They need tourists to replace their existing cultural traditions."
        ],
        // (Suggested answer: C => index 2)
        correctAnswer: 2
      },
      {
        title:
          "Which statement best captures the contrast between big cities and small towns?",
        options: [
          "Big cities have fewer modern attractions than small towns.",
          "Small towns offer more expensive hotels than big cities.",
          "Big cities are known for their family-owned shops.",
          "Small towns provide an intimate look at local life, whereas big cities have famous landmarks."
        ],
        // (Suggested answer: D => index 3)
        correctAnswer: 3
      },
      {
        title:
          "Which word best describes how visitors feel in smaller towns?",
        options: ["Overwhelmed", "Rushed", "Relaxed", "Bored"],
        // (Suggested answer: C => index 2)
        correctAnswer: 2
      }
    ]
  },
  {
    passageId: 'passage-2',
    passageTitle: "Passage 2 (C1)",
    passageText: `The concept of “flow,” popularized by psychologist Mihaly Csikszentmihalyi, describes a mental state in which a person is fully immersed and engaged in an activity. During flow, individuals experience a sense of energized focus, complete involvement, and enjoyment in the process. Although frequently discussed in the context of athletes and artists, flow can manifest in any pursuit—from writing code to solving complex mathematical problems. This state is said to occur when one’s skill level perfectly meets the challenge at hand, fostering both productivity and creativity. Critics, however, argue that the flow concept oversimplifies human motivation, suggesting that it ignores external factors such as deadlines, social pressure, or the need for tangible rewards.`,
    questions: [
      {
        title:
          "According to the passage, which of the following is an example of a situation where ‘flow’ might occur?",
        options: [
          "A person daydreaming about unrelated activities at work.",
          "An athlete losing focus because of high pressure from the audience.",
          "An artist who is deeply focused and enjoying the creative process.",
          "A manager writing a to-do list and feeling stressed about deadlines."
        ],
        // (Suggested answer: C => index 2)
        correctAnswer: 2
      },
      {
        title:
          "Which statement best explains why some critics are skeptical of the flow concept?",
        options: [
          "They believe only artists and athletes can experience flow.",
          "They argue that flow fails to account for factors like deadlines or social pressure.",
          "They do not consider human motivation an important field of study.",
          "They think that Csikszentmihalyi’s work is entirely unrelated to creativity."
        ],
        // (Suggested answer: B => index 1)
        correctAnswer: 1
      },
      {
        title:
          "Why is the balance between skill level and challenge important in achieving flow?",
        options: [
          "It allows people to completely avoid making mistakes.",
          "It prevents people from seeking any type of reward.",
          "It creates an ideal state where tasks match an individual’s capabilities.",
          "It ensures immediate financial success in one’s career."
        ],
        // (Suggested answer: C => index 2)
        correctAnswer: 2
      },
      {
        title:
          "Which of the following can be inferred from the passage?",
        options: [
          "Flow is impossible to achieve in most professional settings.",
          "Flow can happen in various contexts, not just sports or art.",
          "Experiencing flow guarantees an end product of high financial value.",
          "Deadlines always enhance a person’s level of flow."
        ],
        // (Suggested answer: B => index 1)
        correctAnswer: 1
      },
      {
        title:
          "What is the passage’s overall perspective on flow?",
        options: [
          "It is universally accepted without criticism.",
          "It is primarily a scientific myth with no evidence to support it.",
          "It is a valuable concept but may overlook certain real-world factors.",
          "It is only relevant to those who work in creative industries."
        ],
        // (Suggested answer: C => index 2)
        correctAnswer: 2
      }
    ]
  }
];
