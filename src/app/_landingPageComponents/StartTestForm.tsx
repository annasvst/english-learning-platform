import { redirect } from "next/navigation";
import { useTestAnswers } from "../test/TestAnswersProvider";
import Form from 'next/form';

export const StartTestForm = () => {
    const { dispatch } = useTestAnswers();

    const handleStartTest = (formData: FormData) => {
        const fullName = formData.get("fullname");
        const email = formData.get("email");

        console.log("Full Name:", fullName);
        console.log("Email:", email);

        dispatch({ type: "RESET_ANSWERS" });
        redirect("/test/reading");
    };

    return (
        <section id="htmlForm" className="py-40 bg-gray-50">
            <div className="container mx-auto max-w-lg">
                <h2 className="text-4xl font-bold text-center text-primary gray-700">Get Your Results</h2>
                <p className="mt-4 text-center gray-700 text-xl">Provide your details to start the test and receive results.</p>
                <Form className="mt-8 space-y-6" action={handleStartTest}>
                    <div>
                        <label htmlFor="fullname" className="block font-medium gray-800">Full Name</label>
                        <input type="text" id="fullname" name="fullname" className="w-full mt-2 p-3 border rounded-lg shadow-sm" placeholder="Enter your full name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium gray-800">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full mt-2 p-3 border rounded-lg shadow-sm" placeholder="Enter your email address" required />
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="checkbox" id="consent" name="consent" className="htmlForm-checkbox text-primary" required />
                            <span className="ml-2 text-sm gray-700">I consent to the collection and processing of my personal information.</span>
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-teal-800 text-gray-50 font-bold py-3 p-10 rounded-lg shadow-md hover:bg-teal-700">Start Test</button>
                </Form>
            </div>
        </section>
    );
};
