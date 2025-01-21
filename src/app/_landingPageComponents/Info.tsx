export const Info = () => {
  return (
    <section className="mx-auto w-full max-w-4xl py-40">
      <div className="text-center mb-6">
        <h2 className="text-4xl text-gray-700 font-semibold">
          What to Expect from the Test
        </h2>
        <p className="text-xl text-gray-600 my-8">
          The test is divided into three parts: Reading, Listening, and Grammar.
          Each part consists of one or two tests, with 10 questions per test.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-teal-800 mb-2">
            Reading
          </h3>
          <p className="text-gray-700 mb-4">
            You’ll be given short passages to read, followed by multiple-choice
            or short-answer questions to test your comprehension.
          </p>
          <p className="text-gray-500">
            <strong>Format:</strong> 1-2 tests, each containing 10 questions.
          </p>
        </div>

        <div className="rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-teal-800 mb-2">
            Listening
          </h3>
          <p className="text-gray-700 mb-4">
            You’ll listen to brief audio clips or conversations, then answer
            questions to check your understanding.
          </p>
          <p className="text-gray-500">
            <strong>Format:</strong> 1-2 tests, each containing 10 questions.
          </p>
        </div>

        <div className="rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-teal-800 mb-2">
            Grammar
          </h3>
          <p className="text-gray-700 mb-4">
            You’ll be tested on key grammar concepts and proper usage through
            short exercises.
          </p>
          <p className="text-gray-500">
            <strong>Format:</strong> 1-2 tests, each containing 10 questions.
          </p>
        </div>
      </div>
    </section>
  );
};
