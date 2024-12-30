import { Passage, readingPassages } from '../readingData';

const checkForDuplicateUUIDs = (passages: Passage[]) => {
  const uuidSet = new Set<string>();
  const duplicateUUIDs: string[] = [];

  passages.forEach(passage => {
    if (uuidSet.has(passage.id)) {
      duplicateUUIDs.push(passage.id);
    } else {
      uuidSet.add(passage.id);
    }

    passage.questions.forEach(question => {
      if (uuidSet.has(question.id)) {
        duplicateUUIDs.push(question.id);
      } else {
        uuidSet.add(question.id);
      }

      question.options.forEach(option => {
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

test('No duplicated UUIDs in readingPassages', () => {
  const duplicateUUIDs = checkForDuplicateUUIDs(readingPassages);
  expect(duplicateUUIDs).toHaveLength(0);
});