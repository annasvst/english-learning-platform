import { GrammarTest, ListeningTest, ReadingTest } from "../_lib/models/test";

export interface Data {
  reading: {
    A1_A2: ReadingTest[];
    B1_B2: ReadingTest[];
    C1_C2: ReadingTest[];
  };
  listening: {
    A1_A2: ListeningTest[];
    B1_B2: ListeningTest[];
    C1_C2: ListeningTest[];
  };
  grammar: {
    A1_A2: GrammarTest[];
    B1_B2: GrammarTest[];
    C1_C2: GrammarTest[];
  };
}

export const data: Data = {
  reading: {
    A1_A2: [
      {
        id: "uuid-a1-a2-test",
        title: "A1–A2 Reading Passage",
        text: `My name is Lucy, and I am fifteen years old. I live in a small town with my parents and my younger brother, Ben. Every morning, I walk to school with my best friend, Emma. We usually start classes at eight o’clock. My favorite subject is art because I love painting pictures. After school, I often help my mother cook dinner. On weekends, my family and I go to the park or visit my grandparents, who live nearby. My grandfather tells funny stories, and my grandmother bakes delicious cakes. I also enjoy reading books and watching movies with my brother. We especially like animated films. Next year, we plan to travel to the seaside for a family holiday. I’m very excited because I have never seen the ocean before!`,
        questions: [
          {
            id: "uuid-a1-q1",
            title: "How old is Lucy?",
            options: [
              { id: "uuid-a1-q1-optA", title: "Twelve years old" },
              { id: "uuid-a1-q1-optB", title: "Fifteen years old" },
              { id: "uuid-a1-q1-optC", title: "Seventeen years old" },
              { id: "uuid-a1-q1-optD", title: "Ten years old" },
            ],
            correctAnswer: "uuid-a1-q1-optB",
          },
          {
            id: "uuid-a1-q2",
            title: "Who does Lucy walk to school with?",
            options: [
              { id: "uuid-a1-q2-optA", title: "Her brother Ben" },
              { id: "uuid-a1-q2-optB", title: "Her grandfather" },
              { id: "uuid-a1-q2-optC", title: "Her friend Emma" },
              { id: "uuid-a1-q2-optD", title: "She walks alone" },
            ],
            correctAnswer: "uuid-a1-q2-optC",
          },
          {
            id: "uuid-a1-q3",
            title: "What time do her classes usually start?",
            options: [
              { id: "uuid-a1-q3-optA", title: "Seven o’clock" },
              { id: "uuid-a1-q3-optB", title: "Eight o’clock" },
              { id: "uuid-a1-q3-optC", title: "Nine o’clock" },
              { id: "uuid-a1-q3-optD", title: "Ten o’clock" },
            ],
            correctAnswer: "uuid-a1-q3-optB",
          },
          {
            id: "uuid-a1-q4",
            title: "Which subject does Lucy like the most?",
            options: [
              { id: "uuid-a1-q4-optA", title: "Mathematics" },
              { id: "uuid-a1-q4-optB", title: "Science" },
              { id: "uuid-a1-q4-optC", title: "Art" },
              { id: "uuid-a1-q4-optD", title: "History" },
            ],
            correctAnswer: "uuid-a1-q4-optC",
          },
          {
            id: "uuid-a1-q5",
            title: "What does she often do after school?",
            options: [
              { id: "uuid-a1-q5-optA", title: "Helps her mother cook dinner" },
              { id: "uuid-a1-q5-optB", title: "Plays football with Ben" },
              {
                id: "uuid-a1-q5-optC",
                title: "Takes care of her grandparents",
              },
              { id: "uuid-a1-q5-optD", title: "Goes shopping in the city" },
            ],
            correctAnswer: "uuid-a1-q5-optA",
          },
          {
            id: "uuid-a1-q6",
            title: "Where do Lucy and her family go on weekends?",
            options: [
              { id: "uuid-a1-q6-optA", title: "To a movie theater" },
              {
                id: "uuid-a1-q6-optB",
                title: "To the park or visit her grandparents",
              },
              { id: "uuid-a1-q6-optC", title: "To a swimming pool" },
              { id: "uuid-a1-q6-optD", title: "Nowhere, they stay at home" },
            ],
            correctAnswer: "uuid-a1-q6-optB",
          },
          {
            id: "uuid-a1-q7",
            title: "Who bakes delicious cakes?",
            options: [
              { id: "uuid-a1-q7-optA", title: "Her friend Emma" },
              { id: "uuid-a1-q7-optB", title: "Her grandfather" },
              { id: "uuid-a1-q7-optC", title: "Her grandmother" },
              { id: "uuid-a1-q7-optD", title: "Her mother" },
            ],
            correctAnswer: "uuid-a1-q7-optC",
          },
          {
            id: "uuid-a1-q8",
            title:
              "What kind of movies does Lucy enjoy watching with her brother?",
            options: [
              { id: "uuid-a1-q8-optA", title: "Horror films" },
              { id: "uuid-a1-q8-optB", title: "Action films" },
              { id: "uuid-a1-q8-optC", title: "Animated films" },
              { id: "uuid-a1-q8-optD", title: "Documentaries" },
            ],
            correctAnswer: "uuid-a1-q8-optC",
          },
          {
            id: "uuid-a1-q9",
            title: "What is Lucy excited about next year?",
            options: [
              { id: "uuid-a1-q9-optA", title: "Moving to a new house" },
              { id: "uuid-a1-q9-optB", title: "Going to a different school" },
              {
                id: "uuid-a1-q9-optC",
                title: "Traveling to the seaside for a holiday",
              },
              {
                id: "uuid-a1-q9-optD",
                title: "Celebrating her birthday at home",
              },
            ],
            correctAnswer: "uuid-a1-q9-optC",
          },
          {
            id: "uuid-a1-q10",
            title: "Why is she excited about seeing the ocean?",
            options: [
              { id: "uuid-a1-q10-optA", title: "She has never seen it before" },
              {
                id: "uuid-a1-q10-optB",
                title: "She wants to study marine biology",
              },
              {
                id: "uuid-a1-q10-optC",
                title: "She plans to build a house on the beach",
              },
              {
                id: "uuid-a1-q10-optD",
                title: "She prefers the ocean to the mountains",
              },
            ],
            correctAnswer: "uuid-a1-q10-optA",
          },
        ],
      },
    ],
    B1_B2: [
      {
        id: "uuid-b1-b2-test",
        title: "B1–B2 Reading Passage",
        text: `Last summer, I spent a month volunteering at a wildlife reserve in South Africa. My primary responsibility was to observe and record the behavior of various animals, such as zebras, giraffes, and even a few elusive leopards. Each morning, I’d wake up before sunrise and accompany the reserve staff on an early drive across the savannah to monitor the herds. Although the work could be physically demanding—especially under the hot sun—it was incredibly rewarding. In my free time, I helped prepare meals for the team and attended workshops on conservation methods. One highlight of my stay was learning how to identify individual animals by their unique markings. Another unforgettable experience was hearing lions roar at night, reminding me of nature’s power. By the end of the month, I realized how crucial it is to protect these ecosystems, not just for tourists’ enjoyment, but for the future of our planet.`,
        questions: [
          {
            id: "uuid-b1-q1",
            title: "Where did the author volunteer last summer?",
            options: [
              {
                id: "uuid-b1-q1-optA",
                title: "At a mountain resort in Canada",
              },
              {
                id: "uuid-b1-q1-optB",
                title: "On a wildlife reserve in South Africa",
              },
              { id: "uuid-b1-q1-optC", title: "In a small town in Europe" },
              { id: "uuid-b1-q1-optD", title: "At a local zoo in Australia" },
            ],
            correctAnswer: "uuid-b1-q1-optB",
          },
          {
            id: "uuid-b1-q2",
            title: "What was the primary task during the volunteer work?",
            options: [
              { id: "uuid-b1-q2-optA", title: "Planting trees in a forest" },
              {
                id: "uuid-b1-q2-optB",
                title: "Observing and recording animal behavior",
              },
              {
                id: "uuid-b1-q2-optC",
                title: "Guiding tourist tours around the reserve",
              },
              { id: "uuid-b1-q2-optD", title: "Building fences for the park" },
            ],
            correctAnswer: "uuid-b1-q2-optB",
          },
          {
            id: "uuid-b1-q3",
            title: "Which animals are mentioned as part of the observation?",
            options: [
              { id: "uuid-b1-q3-optA", title: "Horses and wolves" },
              {
                id: "uuid-b1-q3-optB",
                title: "Zebras, giraffes, and leopards",
              },
              { id: "uuid-b1-q3-optC", title: "Elephants and rhinoceroses" },
              { id: "uuid-b1-q3-optD", title: "Penguins and seals" },
            ],
            correctAnswer: "uuid-b1-q3-optB",
          },
          {
            id: "uuid-b1-q4",
            title: "What time of day did the reserve staff usually start work?",
            options: [
              { id: "uuid-b1-q4-optA", title: "Late at night" },
              { id: "uuid-b1-q4-optB", title: "Around noon" },
              { id: "uuid-b1-q4-optC", title: "Before sunrise" },
              { id: "uuid-b1-q4-optD", title: "During lunch hours" },
            ],
            correctAnswer: "uuid-b1-q4-optC",
          },
          {
            id: "uuid-b1-q5",
            title: "How did the author describe the work conditions?",
            options: [
              { id: "uuid-b1-q5-optA", title: "Incredibly easy and carefree" },
              {
                id: "uuid-b1-q5-optB",
                title: "Very social with lots of parties",
              },
              {
                id: "uuid-b1-q5-optC",
                title: "Physically demanding under the hot sun",
              },
              { id: "uuid-b1-q5-optD", title: "Boring and repetitive" },
            ],
            correctAnswer: "uuid-b1-q5-optC",
          },
          {
            id: "uuid-b1-q6",
            title: "What extra activity did the author do in their free time?",
            options: [
              {
                id: "uuid-b1-q6-optA",
                title: "Conducted city tours for visitors",
              },
              {
                id: "uuid-b1-q6-optB",
                title: "Participated in cooking and conservation workshops",
              },
              {
                id: "uuid-b1-q6-optC",
                title: "Played sports with local communities",
              },
              {
                id: "uuid-b1-q6-optD",
                title: "Organized nighttime safaris for tourists",
              },
            ],
            correctAnswer: "uuid-b1-q6-optB",
          },
          {
            id: "uuid-b1-q7",
            title: "How did the author learn to identify individual animals?",
            options: [
              {
                id: "uuid-b1-q7-optA",
                title: "By their footprints on the ground",
              },
              {
                id: "uuid-b1-q7-optB",
                title: "By listening to their distinct calls",
              },
              {
                id: "uuid-b1-q7-optC",
                title: "By comparing them on social media photos",
              },
              { id: "uuid-b1-q7-optD", title: "By noticing unique markings" },
            ],
            correctAnswer: "uuid-b1-q7-optD",
          },
          {
            id: "uuid-b1-q8",
            title: "Which unforgettable experience did the author mention?",
            options: [
              {
                id: "uuid-b1-q8-optA",
                title: "Swimming in a lake with hippos",
              },
              { id: "uuid-b1-q8-optB", title: "Hearing lions roar at night" },
              {
                id: "uuid-b1-q8-optC",
                title: "Hiking to the top of a mountain",
              },
              {
                id: "uuid-b1-q8-optD",
                title: "Tracking elephants through the forest",
              },
            ],
            correctAnswer: "uuid-b1-q8-optB",
          },
          {
            id: "uuid-b1-q9",
            title:
              "Why does the author believe it’s crucial to protect these ecosystems?",
            options: [
              {
                id: "uuid-b1-q9-optA",
                title: "They provide cheap land for farming",
              },
              {
                id: "uuid-b1-q9-optB",
                title: "They are important for the future of the planet",
              },
              {
                id: "uuid-b1-q9-optC",
                title: "They make local transportation easier",
              },
              {
                id: "uuid-b1-q9-optD",
                title: "They prevent climate change entirely",
              },
            ],
            correctAnswer: "uuid-b1-q9-optB",
          },
          {
            id: "uuid-b1-q10",
            title:
              "What realization did the author have by the end of the trip?",
            options: [
              {
                id: "uuid-b1-q10-optA",
                title:
                  "That wildlife reserves should be turned into amusement parks",
              },
              {
                id: "uuid-b1-q10-optB",
                title: "That animals thrive only in zoos",
              },
              {
                id: "uuid-b1-q10-optC",
                title: "That protecting wildlife habitats is essential",
              },
              {
                id: "uuid-b1-q10-optD",
                title: "That volunteering is not beneficial to conservation",
              },
            ],
            correctAnswer: "uuid-b1-q10-optC",
          },
        ],
      },
    ],
    C1_C2: [
      {
        id: "uuid-c1-c2-test",
        title: "C1–C2 Reading Passage",
        text: `In recent years, the concept of remote work has reshaped traditional employment structures. Advocates argue that allowing employees to work from home can enhance productivity, reduce commuting emissions, and improve overall work-life balance. Critics, however, claim that an overreliance on virtual communication tools fosters isolation and blurs the boundaries between professional and personal spheres. There is also the question of how remote work affects local economies: if fewer people commute, businesses that depend on commuter traffic—such as cafes and retail shops—may experience decreased revenue. Nonetheless, major corporations are experimenting with hybrid models that combine remote and in-office days. As technology continues to evolve, further research is needed to determine how best to balance flexibility with the necessity of interpersonal collaboration. Ultimately, the debate highlights the complexity of modern labor dynamics in a globalized, digitized world.`,
        questions: [
          {
            id: "uuid-c1-q1",
            title:
              "According to advocates, which is NOT a potential benefit of remote work?",
            options: [
              { id: "uuid-c1-q1-optA", title: "Enhanced productivity" },
              { id: "uuid-c1-q1-optB", title: "Reduced commuting emissions" },
              { id: "uuid-c1-q1-optC", title: "Improved work-life balance" },
              {
                id: "uuid-c1-q1-optD",
                title: "Increased dependence on commuter services",
              },
            ],
            correctAnswer: "uuid-c1-q1-optD",
          },
          {
            id: "uuid-c1-q2",
            title:
              "Why do some critics believe remote work could be problematic?",
            options: [
              {
                id: "uuid-c1-q2-optA",
                title: "They think it will reduce productivity significantly",
              },
              {
                id: "uuid-c1-q2-optB",
                title: "They argue virtual communication leads to isolation",
              },
              {
                id: "uuid-c1-q2-optC",
                title: "They find commuting highly enjoyable",
              },
              {
                id: "uuid-c1-q2-optD",
                title: "They believe technology is never reliable",
              },
            ],
            correctAnswer: "uuid-c1-q2-optB",
          },
          {
            id: "uuid-c1-q3",
            title: "Which businesses might suffer if commuting decreases?",
            options: [
              {
                id: "uuid-c1-q3-optA",
                title: "Online retailers selling digital services",
              },
              { id: "uuid-c1-q3-optB", title: "Global e-commerce companies" },
              {
                id: "uuid-c1-q3-optC",
                title: "Cafes and shops relying on daily foot traffic",
              },
              {
                id: "uuid-c1-q3-optD",
                title: "Software corporations with no physical offices",
              },
            ],
            correctAnswer: "uuid-c1-q3-optC",
          },
          {
            id: "uuid-c1-q4",
            title:
              "What is one approach major corporations are currently testing?",
            options: [
              { id: "uuid-c1-q4-optA", title: "A total ban on remote work" },
              {
                id: "uuid-c1-q4-optB",
                title: "Hybrid models combining remote and office days",
              },
              {
                id: "uuid-c1-q4-optC",
                title: "Compulsory relocation of employees to urban centers",
              },
              {
                id: "uuid-c1-q4-optD",
                title: "Completely eliminating face-to-face interactions",
              },
            ],
            correctAnswer: "uuid-c1-q4-optB",
          },
          {
            id: "uuid-c1-q5",
            title:
              "Which issue is raised concerning the boundary between professional and personal life?",
            options: [
              {
                id: "uuid-c1-q5-optA",
                title: "Remote workers have no personal life",
              },
              {
                id: "uuid-c1-q5-optB",
                title: "It becomes clearer when working from home",
              },
              {
                id: "uuid-c1-q5-optC",
                title: "The lines can become blurred with remote work",
              },
              {
                id: "uuid-c1-q5-optD",
                title:
                  "Personal and professional life remain entirely separate",
              },
            ],
            correctAnswer: "uuid-c1-q5-optC",
          },
          {
            id: "uuid-c1-q6",
            title: "What do critics say about ‘virtual communication tools’?",
            options: [
              {
                id: "uuid-c1-q6-optA",
                title: "They are cheaper than office equipment",
              },
              {
                id: "uuid-c1-q6-optB",
                title: "They guarantee perfect social interactions",
              },
              {
                id: "uuid-c1-q6-optC",
                title: "They might foster a sense of isolation",
              },
              {
                id: "uuid-c1-q6-optD",
                title: "They are irrelevant in modern offices",
              },
            ],
            correctAnswer: "uuid-c1-q6-optC",
          },
          {
            id: "uuid-c1-q7",
            title: "Why is further research deemed necessary?",
            options: [
              {
                id: "uuid-c1-q7-optA",
                title: "To ban working from home entirely",
              },
              {
                id: "uuid-c1-q7-optB",
                title:
                  "To determine how best to balance flexibility and collaboration",
              },
              {
                id: "uuid-c1-q7-optC",
                title: "To replace employees with artificial intelligence",
              },
              {
                id: "uuid-c1-q7-optD",
                title: "To eliminate technology from the workplace",
              },
            ],
            correctAnswer: "uuid-c1-q7-optB",
          },
          {
            id: "uuid-c1-q8",
            title:
              "Which broader economic concern does the passage mention regarding remote work?",
            options: [
              {
                id: "uuid-c1-q8-optA",
                title:
                  "A potential decline in local businesses dependent on commuters",
              },
              {
                id: "uuid-c1-q8-optB",
                title: "An overabundance of public transportation",
              },
              {
                id: "uuid-c1-q8-optC",
                title: "Lower taxes for large corporations",
              },
              {
                id: "uuid-c1-q8-optD",
                title: "A guaranteed increase in downtown real estate",
              },
            ],
            correctAnswer: "uuid-c1-q8-optA",
          },
          {
            id: "uuid-c1-q9",
            title: "What does the debate around remote work illustrate?",
            options: [
              {
                id: "uuid-c1-q9-optA",
                title:
                  "That globalization has stopped affecting labor dynamics",
              },
              {
                id: "uuid-c1-q9-optB",
                title:
                  "The complexity of modern labor dynamics in a digitized world",
              },
              {
                id: "uuid-c1-q9-optC",
                title: "The irrelevance of technology in daily life",
              },
              {
                id: "uuid-c1-q9-optD",
                title: "The uniformity of working conditions worldwide",
              },
            ],
            correctAnswer: "uuid-c1-q9-optB",
          },
          {
            id: "uuid-c1-q10",
            title: "What is the ultimate challenge highlighted by the passage?",
            options: [
              {
                id: "uuid-c1-q10-optA",
                title: "Encouraging all employees to move closer to offices",
              },
              {
                id: "uuid-c1-q10-optB",
                title:
                  "Finding a middle ground between flexible work and necessary collaboration",
              },
              {
                id: "uuid-c1-q10-optC",
                title:
                  "Replacing traditional offices with fully virtual ones immediately",
              },
              {
                id: "uuid-c1-q10-optD",
                title: "Creating a single global policy on remote work",
              },
            ],
            correctAnswer: "uuid-c1-q10-optB",
          },
        ],
      },
    ],
  },
  listening: {
    A1_A2: [],
    B1_B2: [],
    C1_C2: [],
  },
  grammar: {
    A1_A2: [
      {
        id: "uuid-a1-a2-test-1",
        title: "A1–A2 Grammar Test",
        text: "Fill in the correct word",
        questions: [
          {
            id: "uuid-a1-q1-1",
            title: "He ___ playing the piano.",
            options: [
              { id: "uuid-a1-q1-optA", title: "are" },
              { id: "uuid-a1-q1-optB", title: "does" },
              { id: "uuid-a1-q1-optC", title: "is" },
              { id: "uuid-a1-q1-optD", title: "has" },
            ],
            correctAnswer: "uuid-a1-q1-optC",
          },
          {
            id: "uuid-a1-q2-1",
            title: "Tonight’s dinner is ___ than last night’s.",
            options: [
              { id: "uuid-a1-q2-optA", title: "more good" },
              { id: "uuid-a1-q2-optB", title: "gooder" },
              { id: "uuid-a1-q2-optC", title: "better" },
              { id: "uuid-a1-q2-optD", title: "more better" },
            ],
            correctAnswer: "uuid-a1-q2-optC",
          },
          {
            id: "uuid-a1-q3-1",
            title: "The elephant is ___ land animal in the world.",
            options: [
              { id: "uuid-a1-q3-optA", title: "the bigger" },
              { id: "uuid-a1-q3-optB", title: "the most big" },
              { id: "uuid-a1-q3-optC", title: "biggest" },
              { id: "uuid-a1-q3-optD", title: "the biggest" },
            ],
            correctAnswer: "uuid-a1-q3-optD",
          },
          {
            id: "uuid-a1-q4-1",
            title: "I ___ to classical music.",
            options: [
              { id: "uuid-a1-q4-optA", title: "never to listen" },
              { id: "uuid-a1-q4-optB", title: "listen never" },
              { id: "uuid-a1-q4-optC", title: "never listen" },
              { id: "uuid-a1-q4-optD", title: "don’t never listen" },
            ],
            correctAnswer: "uuid-a1-q4-optC",
          },
          {
            id: "uuid-a1-q5-1",
            title: "‘Was Debussy from France?’ ‘Yes, ___.’",
            options: [
              { id: "uuid-a1-q5-optA", title: "he were" },
              { id: "uuid-a1-q5-optB", title: "was" },
              { id: "uuid-a1-q5-optC", title: "there were" },
              { id: "uuid-a1-q5-optD", title: "he was" },
            ],
            correctAnswer: "uuid-a1-q5-optD",
          },
          {
            id: "uuid-a1-q6-1",
            title: "It ___ when they went out.",
            options: [
              { id: "uuid-a1-q6-optA", title: "has rained" },
              { id: "uuid-a1-q6-optB", title: "was raining" },
              { id: "uuid-a1-q6-optC", title: "is raining" },
              { id: "uuid-a1-q6-optD", title: "was to rain" },
            ],
            correctAnswer: "uuid-a1-q6-optB",
          },
          {
            id: "uuid-a1-q7-1",
            title: "Richard isn’t very good ___.",
            options: [
              { id: "uuid-a1-q7-optA", title: "to dance" },
              { id: "uuid-a1-q7-optB", title: "at dancing" },
              { id: "uuid-a1-q7-optC", title: "dancing" },
              { id: "uuid-a1-q7-optD", title: "dance" },
            ],
            correctAnswer: "uuid-a1-q7-optB",
          },
          {
            id: "uuid-a1-q8-1",
            title: "___ my best friend since 1999.",
            options: [
              { id: "uuid-a1-q8-optA", title: "I’ve known" },
              { id: "uuid-a1-q8-optB", title: "I knew" },
              { id: "uuid-a1-q8-optC", title: "I’m knowing" },
              { id: "uuid-a1-q8-optD", title: "I know" },
            ],
            correctAnswer: "uuid-a1-q8-optA",
          },
          {
            id: "uuid-a1-q9-1",
            title: "Pam ___ eat cheese, but she does now.",
            options: [
              { id: "uuid-a1-q9-optA", title: "didn’t used to" },
              { id: "uuid-a1-q9-optB", title: "did use to" },
              { id: "uuid-a1-q9-optC", title: "didn’t use to" },
              { id: "uuid-a1-q9-optD", title: "wasn’t to" },
            ],
            correctAnswer: "uuid-a1-q9-optC",
          },
          {
            id: "uuid-a1-q10-1",
            title: "My parents ___ to stay with us next week.",
            options: [
              { id: "uuid-a1-q10-optA", title: "comes" },
              { id: "uuid-a1-q10-optB", title: "coming" },
              { id: "uuid-a1-q10-optC", title: "is coming" },
              { id: "uuid-a1-q10-optD", title: "are coming" },
            ],
            correctAnswer: "uuid-a1-q10-optD",
          },
        ],
      },
    ],
    B1_B2: [
      {
        id: "uuid-b1-b2-test",
        title: "B1–B2 Grammar Test",
        text: "Fill in the correct word",
        questions: [
          {
            id: "uuid-b1-q1",
            title: "Garry ………… his friends to the party yet.",
            options: [
              { id: "uuid-b1-q1-optA", title: "haven’t invite" },
              { id: "uuid-b1-q1-optB", title: "hasn’t invite" },
              { id: "uuid-b1-q1-optC", title: "didn’t invite" },
              { id: "uuid-b1-q1-optD", title: "hasn’t invited" },
            ],
            correctAnswer: "uuid-b1-q1-optD",
          },
          {
            id: "uuid-b1-q2",
            title: "When they came to the house, they …………. already prepared the dinner.",
            options: [
              { id: "uuid-b1-q2-optA", title: "has" },
              { id: "uuid-b1-q2-optB", title: "have" },
              { id: "uuid-b1-q2-optC", title: "did" },
              { id: "uuid-b1-q2-optD", title: "had" },
            ],
            correctAnswer: "uuid-b1-q2-optD",
          },
          {
            id: "uuid-b1-q3",
            title: "He cannot come to the school. Because he has broken his arm while ………. a tree.",
            options: [
              { id: "uuid-b1-q3-optA", title: "to climb" },
              { id: "uuid-b1-q3-optB", title: "climbing" },
              { id: "uuid-b1-q3-optC", title: "to be climbing" },
              { id: "uuid-b1-q3-optD", title: "climb" },
            ],
            correctAnswer: "uuid-b1-q3-optB",
          },
          {
            id: "uuid-b1-q4",
            title: "The coffee is ……… hot to drink.",
            options: [
              { id: "uuid-b1-q4-optA", title: "enough" },
              { id: "uuid-b1-q4-optB", title: "so" },
              { id: "uuid-b1-q4-optC", title: "such" },
              { id: "uuid-b1-q4-optD", title: "too" },
            ],
            correctAnswer: "uuid-b1-q4-optD",
          },
          {
            id: "uuid-b1-q5",
            title: "If you try ………… a proper job, you need to form a CV.",
            options: [
              { id: "uuid-b1-q5-optA", title: "to finding" },
              { id: "uuid-b1-q5-optB", title: "finding" },
              { id: "uuid-b1-q5-optC", title: "find" },
              { id: "uuid-b1-q5-optD", title: "to find" },
            ],
            correctAnswer: "uuid-b1-q5-optD",
          },
          {
            id: "uuid-b1-q6",
            title: "I …………… to find my purse all day. Have you seen it?",
            options: [
              { id: "uuid-b1-q6-optA", title: "have been trying" },
              { id: "uuid-b1-q6-optB", title: "had tried" },
              { id: "uuid-b1-q6-optC", title: "had been trying" },
              { id: "uuid-b1-q6-optD", title: "am trying" },
            ],
            correctAnswer: "uuid-b1-q6-optA",
          },
          {
            id: "uuid-b1-q7",
            title: "This is a very cool skirt. I wish there …… a suitable size of it.",
            options: [
              { id: "uuid-b1-q7-optA", title: "was" },
              { id: "uuid-b1-q7-optB", title: "is" },
              { id: "uuid-b1-q7-optC", title: "are" },
              { id: "uuid-b1-q7-optD", title: "does" },
            ],
            correctAnswer: "uuid-b1-q7-optA",
          },
          {
            id: "uuid-b1-q8",
            title: "You may borrow my laptop __________ you promise to look after it.",
            options: [
              { id: "uuid-b1-q8-optA", title: "unless" },
              { id: "uuid-b1-q8-optB", title: "in case" },
              { id: "uuid-b1-q8-optC", title: "as long as" },
              { id: "uuid-b1-q8-optD", title: "although" },
            ],
            correctAnswer: "uuid-b1-q8-optC",
          },
          {
            id: "uuid-b1-q9",
            title: "If the taxi hadn’t stopped for us, we __________ standing in the rain.",
            options: [
              { id: "uuid-b1-q9-optA", title: "were still" },
              { id: "uuid-b1-q9-optB", title: "would still be" },
              { id: "uuid-b1-q9-optC", title: "are still" },
              { id: "uuid-b1-q9-optD", title: "will still be" },
            ],
            correctAnswer: "uuid-b1-q9-optB",
          },
          {
            id: "uuid-b1-q10",
            title: "By the end of today’s seminar I will __________ to each of you individually.",
            options: [
              { id: "uuid-b1-q10-optA", title: "speak" },
              { id: "uuid-b1-q10-optB", title: "have spoken" },
              { id: "uuid-b1-q10-optC", title: "be speaking" },
              { id: "uuid-b1-q10-optD", title: "have been speaking" },
            ],
            correctAnswer: "uuid-b1-q10-optB",
          },
        ],
      },
    ],
    C1_C2: [
      {
        id: "uuid-c1-c2-test",
        title: "C1–C2 Grammar Test",
        text: "Fill in the correct word",
        questions: [
          {
            id: "uuid-c1-q1",
            title: "For a business to be really successful, teamwork is essential and the members of the team must support ………. .",
            options: [
              { id: "uuid-c1-q1-optA", title: "one another" },
              { id: "uuid-c1-q1-optB", title: "the others" },
              { id: "uuid-c1-q1-optC", title: "the other one" },
              { id: "uuid-c1-q1-optD", title: "each of them" },
            ],
            correctAnswer: "uuid-c1-q1-optA",
          },
          {
            id: "uuid-c1-q2",
            title: "Janet is a working woman ……. everyone in the family admires.",
            options: [
              { id: "uuid-c1-q2-optA", title: "where" },
              { id: "uuid-c1-q2-optB", title: "whom" },
              { id: "uuid-c1-q2-optC", title: "which" },
              { id: "uuid-c1-q2-optD", title: "who" },
            ],
            correctAnswer: "uuid-c1-q2-optB",
          },
          {
            id: "uuid-c1-q3",
            title: "They don’t take the same classes any longer, but they still meet ………… in the canteen.",
            options: [
              { id: "uuid-c1-q3-optA", title: "in time" },
              { id: "uuid-c1-q3-optB", title: "on time" },
              { id: "uuid-c1-q3-optC", title: "from time to time" },
              { id: "uuid-c1-q3-optD", title: "at the same time" },
            ],
            correctAnswer: "uuid-c1-q3-optC",
          },
          {
            id: "uuid-c1-q4",
            title: "By the end of this year, she ……… for the company for seven years.",
            options: [
              { id: "uuid-c1-q4-optA", title: "is working" },
              { id: "uuid-c1-q4-optB", title: "will work" },
              { id: "uuid-c1-q4-optC", title: "has been working" },
              { id: "uuid-c1-q4-optD", title: "will have been working" },
            ],
            correctAnswer: "uuid-c1-q4-optD",
          },
          {
            id: "uuid-c1-q5",
            title: "The doctors are of the opinion that if the disorder ……….. a few months earlier, it ……… treated successfully.",
            options: [
              { id: "uuid-c1-q5-optA", title: "were diagnosed / would be" },
              { id: "uuid-c1-q5-optB", title: "has been diagnosed / will be" },
              { id: "uuid-c1-q5-optC", title: "were to be diagnosed / has been" },
              { id: "uuid-c1-q5-optD", title: "had been diagnosed / could have been" },
            ],
            correctAnswer: "uuid-c1-q5-optD",
          },
          {
            id: "uuid-c1-q6",
            title: "The more I get to hear her words, ……. I want to help her.",
            options: [
              { id: "uuid-c1-q6-optA", title: "most" },
              { id: "uuid-c1-q6-optB", title: "less" },
              { id: "uuid-c1-q6-optC", title: "the lesser" },
              { id: "uuid-c1-q6-optD", title: "the less" },
            ],
            correctAnswer: "uuid-c1-q6-optD",
          },
          {
            id: "uuid-c1-q7",
            title: "When I first came to Britain it took me a long time to ……… on the left.",
            options: [
              { id: "uuid-c1-q7-optA", title: "get used to drive" },
              { id: "uuid-c1-q7-optB", title: "use to driving" },
              { id: "uuid-c1-q7-optC", title: "be used to drive" },
              { id: "uuid-c1-q7-optD", title: "get used to driving" },
            ],
            correctAnswer: "uuid-c1-q7-optD",
          },
          {
            id: "uuid-c1-q8",
            title: "As he told me, the project of the house ………… by the end of the month but it wasn’t.",
            options: [
              { id: "uuid-c1-q8-optA", title: "could have been prepared" },
              { id: "uuid-c1-q8-optB", title: "is prepared" },
              { id: "uuid-c1-q8-optC", title: "was prepared" },
              { id: "uuid-c1-q8-optD", title: "would have been prepared" },
            ],
            correctAnswer: "uuid-c1-q8-optD",
          },
          {
            id: "uuid-c1-q9",
            title: "She wants to spend her summer working voluntarily for a company to improve herself, ……… is a great choice.",
            options: [
              { id: "uuid-c1-q9-optA", title: "which" },
              { id: "uuid-c1-q9-optB", title: "that" },
              { id: "uuid-c1-q9-optC", title: "when" },
              { id: "uuid-c1-q9-optD", title: "where" },
            ],
            correctAnswer: "uuid-c1-q9-optA",
          },
          {
            id: "uuid-c1-q10",
            title: "……. he should have spent all the weekend preparing for his test, he in fact just lay in bed watching videos.",
            options: [
              { id: "uuid-c1-q10-optA", title: "Whereas" },
              { id: "uuid-c1-q10-optB", title: "Despite" },
              { id: "uuid-c1-q10-optC", title: "Unlike" },
              { id: "uuid-c1-q10-optD", title: "Unless" },
            ],
            correctAnswer: "uuid-c1-q10-optA",
          },
        ],
      },
    ],
  },
};
