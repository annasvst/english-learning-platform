export interface Option {
  id: string;
  title: string;
}

export interface Question {
  id: string;
  title: string;
  options: Option[];
  correctAnswer: string;
}

export interface Passage {
  id: string;
  title: string;
  text: string;
  level: Level[],
  questions: Question[];
}

export enum Level {
  A1, A2, B1, B2, C1, C2
};


export const readingPassages: Passage[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Passage 1 (B1–B2)",
    text: `Many people today choose to spend their vacations in smaller towns rather than in large cities. They enjoy the slower pace of life and the chance to explore local traditions. In these towns, visitors often discover family-owned shops, try authentic regional cuisine, and take part in cultural festivals that have been celebrated for decades. While big cities might offer famous landmarks and modern attractions, small towns give travelers a closer look into the everyday lives of local residents. In addition, many small communities benefit from tourism revenue, which helps support local businesses and preserve cultural heritage.`,
    level: [Level.B1, Level.B2],
    questions: [
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        title: "Which of the following is a main reason people choose to visit smaller towns?",
        options: [
          {
            id: "550e8400-e29b-41d4-a716-446655440002",
            title: "They want to spend more money on luxury hotels"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440003",
            title: "They prefer the slower pace and local traditions"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440004",
            title: "They need to attend large-scale international events"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440005",
            title: "They only want to shop at large department stores"
          }
        ],
        correctAnswer: "550e8400-e29b-41d4-a716-446655440003"
      },
      {
        id: "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454",
        title: "What benefit do local residents gain from tourism?",
        options: [
          {
            id: "b0e7b05c-6d2a-4fd9-b318-24a30d41a61d",
            title: "They receive free airline tickets to other countries"
          },
          {
            id: "c1f8d754-8d52-4c25-8f5c-b726e2e52001",
            title: "They rely on tourists to maintain big-city infrastructures"
          },
          {
            id: "d2e9f865-9e63-5d36-9g6d-c837f3f63112",
            title: "They earn additional revenue that supports local businesses"
          },
          {
            id: "e3f0g976-0f74-6e47-0h7e-d948g4g74223",
            title: "They need tourists to replace their existing cultural traditions"
          }
        ],
        correctAnswer: "d2e9f865-9e63-5d36-9g6d-c837f3f63112"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440017",
        title: "Which statement best captures the contrast between big cities and small towns?",
        options: [
          {
            id: "550e8400-e29b-41d4-a716-446655440018",
            title: "Big cities have fewer modern attractions than small towns"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440019",
            title: "Small towns offer more expensive hotels than big cities"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440020",
            title: "Big cities are known for their family-owned shops"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440021",
            title: "Small towns provide an intimate look at local life, whereas big cities have famous landmarks"
          }
        ],
        correctAnswer: "550e8400-e29b-41d4-a716-446655440021"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440022",
        title: "Which word best describes how visitors feel in smaller towns?",
        options: [
          {
            id: "550e8400-e29b-41d4-a716-446655440023",
            title: "Overwhelmed"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440024",
            title: "Rushed"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440025",
            title: "Relaxed"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440026",
            title: "Bored"
          }
        ],
        correctAnswer: "550e8400-e29b-41d4-a716-446655440025"
      }
    ]
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440011",
    title: "Passage 2 (C1)",
    text: `The concept of "flow," popularized by psychologist Mihaly Csikszentmihalyi, describes a mental state in which a person is fully immersed and engaged in an activity. During flow, individuals experience a sense of energized focus, complete involvement, and enjoyment in the process. Although frequently discussed in the context of athletes and artists, flow can manifest in any pursuit—from writing code to solving complex mathematical problems. This state is said to occur when one's skill level perfectly meets the challenge at hand, fostering both productivity and creativity. Critics, however, argue that the flow concept oversimplifies human motivation, suggesting that it ignores external factors such as deadlines, social pressure, or the need for tangible rewards.`,
    level: [Level.C1],
    questions: [
      {
        id: "2a137e9b-f157-4086-a700-4077e3bae502",
        title: "According to the passage, which of the following is an example of a situation where 'flow' might occur?",
        options: [
          {
            id: "de168f00-6c98-4308-8284-e9ab58931787",
            title: "A person daydreaming about unrelated activities at work"
          },
          {
            id: "efedf9e4-e628-491e-8836-d17949581c6d",
            title: "An athlete losing focus because of high pressure from the audience"
          },
          {
            id: "cd27004a-f57e-4f61-807b-e01abfbe058d",
            title: "An artist who is deeply focused and enjoying the creative process"
          },
          {
            id: "572e9f4c-e9de-4341-9c91-fd5a9049e769",
            title: "A manager writing a to-do list and feeling stressed about deadlines"
          }
        ],
        correctAnswer: "cd27004a-f57e-4f61-807b-e01abfbe058d"
      },
      {
        id: "59761c59-57e4-4709-a728-06a715083cda",
        title: "Which statement best explains why some critics are skeptical of the flow concept?",
        options: [
          {
            id: "59761c60-57e4-4709-a728-06a715083cda",
            title: "They believe only artists and athletes can experience flow"
          },
          {
            id: "4792faca-fb9b-430e-ac2a-259ce45d4998",
            title: "They argue that flow fails to account for factors like deadlines or social pressure"
          },
          {
            id: "63f89bd0-55d6-4305-a6bd-228ccbb27813",
            title: "They do not consider human motivation an important field of study"
          },
          {
            id: "a1697314-5c98-448a-844f-67d4be5fb46e",
            title: "They think that Csikszentmihalyi's work is entirely unrelated to creativity"
          }
        ],
        correctAnswer: "4792faca-fb9b-430e-ac2a-259ce45d4998"
      },
      {
        id: "35f7c6c2-baf3-4051-8962-fd8566847f87",
        title: "Why is the balance between skill level and challenge important in achieving flow?",
        options: [
          {
            id: "c06375f6-be9e-4219-ae0f-88a18f76cf6b",
            title: "It allows people to completely avoid making mistakes"
          },
          {
            id: "997e6a6c-997d-4f5c-9f5a-6cb13576c047",
            title: "It prevents people from seeking any type of reward"
          },
          {
            id: "e2f502e1-0d7f-454f-81f2-28d2f724f8e5",
            title: "It creates an ideal state where tasks match an individual's capabilities"
          },
          {
            id: "104d4db5-7885-43b4-9993-faf02a038660",
            title: "It ensures immediate financial success in one's career"
          }
        ],
        correctAnswer: "e2f502e1-0d7f-454f-81f2-28d2f724f8e5"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440027",
        title: "Which of the following can be inferred from the passage?",
        options: [
          {
            id: "550e8400-e29b-41d4-a716-446655440028",
            title: "Flow is impossible to achieve in most professional settings"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440029",
            title: "Flow can happen in various contexts, not just sports or art"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440030",
            title: "Experiencing flow guarantees an end product of high financial value"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440031",
            title: "Deadlines always enhance a person's level of flow"
          }
        ],
        correctAnswer: "550e8400-e29b-41d4-a716-446655440029"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440032",
        title: "What is the passage's overall perspective on flow?",
        options: [
          {
            id: "550e8400-e29b-41d4-a716-446655440033",
            title: "It is universally accepted without criticism"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440034",
            title: "It is primarily a scientific myth with no evidence to support it"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440035",
            title: "It is a valuable concept but may overlook certain real-world factors"
          },
          {
            id: "550e8400-e29b-41d4-a716-446655440036",
            title: "It is only relevant to those who work in creative industries"
          }
        ],
        correctAnswer: "550e8400-e29b-41d4-a716-446655440035"
      }
    ]
  }
];
