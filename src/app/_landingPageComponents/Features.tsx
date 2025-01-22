export const Features = () => {
  return (
    <section id="features" className="py-40 bg-gray-100 dark:bg-gray-700">
        <div className="container max-w-screen-2xl mx-auto text-center">
            <h2 className="text-4xl text-gray-700 dark:text-gray-50 font-bold">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-gray-50 p-10 rounded shadow-md">
                    <h3 className="text-2xl font-semibold text-primary">Fast and Reliable</h3>
                    <p className="mt-2 text-xl">Complete the test in just 30 minutes.</p>
                </div>
                <div className="bg-gray-50 p-10 rounded shadow-md">
                    <h3 className="text-2xl font-semibold text-primary">Instant Feedback</h3>
                    <p className="mt-2 text-xl">Receive detailed results immediately after completion.</p>
                </div>
                <div className="bg-gray-50 p-10 rounded shadow-md">
                    <h3 className="text-2xl font-semibold text-primary">Expert Design</h3>
                    <p className="mt-2 text-xl">Developed by language specialists for accuracy.</p>
                </div>
            </div>
        </div>
    </section>
  );
};
