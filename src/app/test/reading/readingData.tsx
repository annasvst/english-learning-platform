import { ReadingTest } from "modules/app/_lib/models/test";

export const readingPassages: ReadingTest[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Passage 1 (A1)",
    text: 'I live in a house near the mountains. I have two brothers and one sister. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food! My family is very important to me. We do lots of things together. My brothers and I like to go on long walks in the mountains. My sister likes to cook with my grandmother. We all play board games together on Satudays and Sundays. I love my family very much.',
    // level: [Level.A1],
    questions: [
      {
        id: "2abb4c63-583c-4309-a85b-39f134dc91fc",
        title:
          "Her father is a...",
        options: [
          {
            id: "a0f69b42-c758-4f76-90f8-ab7dc995aff5",
            title: "Doctor"
          }, {
            id: "ed4fe410-68be-4ef2-a8ca-5ad3dd200622",
            title: "Nurse"
          }, {
            id: "98dd7a4c-ecc4-4b3d-a28f-167b3a59dd74",
            title: "Teacher"
          }, {
            id: "ba2efa94-a39b-4d75-b43f-87ca217b2e91",
            title: "Waitress"
          }
        ],
        // (Suggested answer: C => id 98dd7a4c-ecc4-4b3d-a28f-167b3a59dd74)
        correctAnswer: "98dd7a4c-ecc4-4b3d-a28f-167b3a59dd74"
      },
      {
        id: "aba0dd4c-45a7-4ba3-8ca8-44bfb3665232",
        title: "On the weekends, they...",
        options: [
           {
            id: "95b502bb-ee7b-46b0-b486-7dabbd08b2d3",
            title: "Play board games together"
          }, {
            id: "ebab5585-670c-4ad1-88ca-fa7515b57143",
            title: "Go to a movie"
          },
          {
            id: "e2162f71-923a-4df5-b2e0-df46b8c69f5d",
            title: "Clean the house"
          }, {
            id: "b5db8526-b48d-4d98-8dc5-fc22e645d0e1",
            title: "Cook pasta"
          }
        ],
        // (Suggested answer: A => id "ed4fe410-68be-4ef2-a8ca-5ad3dd200622")
        correctAnswer: "ed4fe410-68be-4ef2-a8ca-5ad3dd200622"
      },
      {
        id: "c16a0ea9-feaa-468c-a19c-17a2147330a0",
        title:
          "How old was she when her grandmother came?",
        options: [
          {
            id: "3fbbd8e8-4276-4947-b302-f434aec16fe9",
            title: "Three years old"
          }, {
            id: "6e421aa0-840c-40b7-a67b-24edfab34f64",
            title: "Just born"
          }, {
            id: "2da57a2b-7cce-4704-9e5e-c00861fe68de",
            title: "Ten years old"
          }, {
            id: "1f07cdfa-5968-4549-952e-cc7a1ea002c4",
            title: "Two years old"
          }
        ],
        // (Suggested answer: D => id "1f07cdfa-5968-4549-952e-cc7a1ea002c4")
        correctAnswer: "1f07cdfa-5968-4549-952e-cc7a1ea002c4"
      },
      {
        id: "15cec2f6-55cd-48b1-98f2-556bb1650fca",
        title:
          "Her sister is kind, but also...",
        options: [
          {
            id: "7eee238c-41fe-4d2c-98ae-873565035b5c",
            title: "Mean"
          }, {
            id: "10e69736-3971-4987-9f3d-a2554e1d7d44",
            title: "Quiet"
          }, {
            id: "c7ad34dc-3414-4cff-bcc7-f7f79832f1ca",
            title: "Nervous"
          }, {
            id: "1ee84a7a-a635-48d4-ac27-46b56402b82e",
            title: "Strong"
          }],
        // (Suggested answer: C => id c7ad34dc-3414-4cff-bcc7-f7f79832f1ca)
        correctAnswer: "c7ad34dc-3414-4cff-bcc7-f7f79832f1ca"
      }
    ]
  },
  {
    id: "5fb284d3-9868-4c10-b2f0-eea2ed83c206",
    title: "Passage 2 (A2)",
    text: 'Japan is a country with many traditions. It is known for its beautiful shrines and temples. The Japanese language is very different from English. Many people visit Japan for sightseeing and tourism. Japan is an island country surrounded by the ocean. People often take trips to see the cities and rural areas. Anime is very popular in Japan and around the world. Ramen is a famous Japanese food that many people enjoy. Traveling to Japan can be a great experience. You can visit many interesting places and try new things. The cities are very busy and many people work there. However, the countryside is more relaxing and has beautiful nature. If you are planning a trip to Japan, you should learn some basic Japanese phrases. It is also a good idea to try different kinds of Japanese food. You can visit shrines and temples to learn about Japanese culture and history.',
    // level: [Level.A2],
    questions: [
      {
        id: "917661db-96fd-4ba3-8ccc-e58e819bb8c8",
        title:
          "What is one of the reasons people visit Japan?",
        options: [
          {
            id: "e5d58ff0-abc9-4461-aa34-830bb09bb37f",
            title: "For its beautiful shrines and temples"
          },
          {
            id: "e5ef7cdd-51d2-4dc3-bb06-5c1d10682846",
            title: "To experience snow-capped mountain"
          },
          {
            id: "14978dc0-77e1-4f7b-a173-31988d43b787",
            title: "To see its famous desert landscapes"
          },
          {
            id: "b61bf348-7ccc-495f-8d8f-32e012192d25",
            title: "To visit historical World War sites"
          }
        ],
        // (Suggested answer: A => id e5d58ff0-abc9-4461-aa34-830bb09bb37f)
        correctAnswer: "e5d58ff0-abc9-4461-aa34-830bb09bb37f"
      },
      {
        id: "415149c6-c062-4b16-8b25-30c22aaad83d",
        title: "Which Japanese food is mentioned as famous and widely enjoyed?",
        options: [
          {
            id : "7d09dd0a-9c29-40ee-a245-ec4ddc3b381e",
            title: "Teriyaki"
          }, {
            id: "90ae19e9-2172-454d-9070-d0b105261c71",
            title: "Sushi"
          }, {
            id: "0f6581f3-113c-429e-97ec-046111aa4341",
            title: "Ramen"
          }, {
            id: "c944e5a2-5ddd-4917-bc0b-041d9d564a0c",
            title: "Tofu"
          }
        ],
        // (Suggested answer: C => id 0f6581f3-113c-429e-97ec-046111aa4341)
        correctAnswer: "0f6581f3-113c-429e-97ec-046111aa4341"
      },
      {
        id: "0899a9db-3eaf-4e6b-8932-4fa7c3e98581",
        title:
          "What is one of the things visitors can do in Japan?",
        options: [
          {
            id: "7b7eeddb-5237-410c-a1bb-f9bb372c05e9",
            title: "Work in local businesses"
          },
          {
            id: "f37f0508-241d-49c3-b705-5ffc2ca12eb7",
            title: "Visit famous landmarks"
          },
          {
            id: "facffc04-d082-4e59-ab56-42ec68d365c2",
            title: "Only visit beaches"
          },
          {
            id: "e4b82c09-afdd-4bbe-b054-ccacc7dd34a3",
            title: "Ignore Japanese culture"
          }
        ],
        // (Suggested answer: B => id f37f0508-241d-49c3-b705-5ffc2ca12eb7)
        correctAnswer: "f37f0508-241d-49c3-b705-5ffc2ca12eb7"
      },
      {
        id: "8dec0639-810c-4791-8a69-341d18a4ab41",
        title:
          'What is a recommended preparation step if planning a trip to Japan?',
        options: [
          {
            id: "d0ba29de-1c75-4064-9c1d-9d2094255912",
            title: "Bringing your own supply of rice",
          },
          {
            id: "6e1b0947-99a6-412d-bdd6-0c8ea75252fe",
            title: "Learning some basic German phrases",
          },
          {
            id: "89959386-9476-48a2-a85b-21e7d5ddd14c",
            title: "Booking only rural area accommodations",
          },
          {
            id: "97c644d6-d0b7-427b-871f-1c3220a82cb3",
            title: "Learning some basic Japanese phrases",
          }
        ],
        // (Suggested answer: D => id 97c644d6-d0b7-427b-871f-1c3220a82cb3)
        correctAnswer: "97c644d6-d0b7-427b-871f-1c3220a82cb3"
      }
    ]
  },
  {
    id: "9f830730-4580-4e4c-8f1a-d9bebaa71ddd",
    title: "Passage 3 (B1–B2)",
    text: `Many people today choose to spend their vacations in smaller towns rather than in large cities. They enjoy the slower pace of life and the chance to explore local traditions. In these towns, visitors often discover family-owned shops, try authentic regional cuisine, and take part in cultural festivals that have been celebrated for decades. While big cities might offer famous landmarks and modern attractions, small towns give travelers a closer look into the everyday lives of local residents. In addition, many small communities benefit from tourism revenue, which helps support local businesses and preserve cultural heritage.`,
    // level: [Level.B1, Level.B2],
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
    title: "Passage 4 (C1)",
    text: `The concept of "flow," popularized by psychologist Mihaly Csikszentmihalyi, describes a mental state in which a person is fully immersed and engaged in an activity. During flow, individuals experience a sense of energized focus, complete involvement, and enjoyment in the process. Although frequently discussed in the context of athletes and artists, flow can manifest in any pursuit—from writing code to solving complex mathematical problems. This state is said to occur when one's skill level perfectly meets the challenge at hand, fostering both productivity and creativity. Critics, however, argue that the flow concept oversimplifies human motivation, suggesting that it ignores external factors such as deadlines, social pressure, or the need for tangible rewards.`,
    // level: [Level.C1],
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
