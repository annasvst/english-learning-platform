import { ReadingTest } from "modules/app/lib/models/test";
import { data } from "../../data";

const checkForDuplicateUUIDs = (passages: ReadingTest[]) => {
  const uuidSet = new Set<string>();
  const duplicateUUIDs: string[] = [];

  passages.forEach((passage) => {
    if (uuidSet.has(passage.id)) {
      duplicateUUIDs.push(passage.id);
    } else {
      uuidSet.add(passage.id);
    }

    passage.questions.forEach((question) => {
      if (uuidSet.has(question.id)) {
        duplicateUUIDs.push(question.id);
      } else {
        uuidSet.add(question.id);
      }

      question.options.forEach((option) => {
        if (uuidSet.has(option.id)) {
          duplicateUUIDs.push(option.id);
        } else {
          uuidSet.add(option.id);
        }
      });
    });
  });

  return duplicateUUIDs;
};

test("No duplicated UUIDs in readingPassages", () => {
  const duplicateUUIDs = checkForDuplicateUUIDs([
    ...data.reading.A1_A2,
    ...data.reading.B1_B2,
    ...data.reading.C1_C2,
  ]);
  expect(duplicateUUIDs).toHaveLength(0);
});
