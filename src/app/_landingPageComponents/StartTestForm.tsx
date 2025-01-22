'use client';

import { useRouter } from 'next/navigation'
import { useTestAnswers } from "../test/TestAnswersProvider";
import Form from 'next/form';
import { Button } from '../_components/Button';

export const StartTestForm = () => {
    const { dispatch } = useTestAnswers();
    const router = useRouter();

    const handleStartTest = async (formData: FormData) => {
        const name = formData.get("fullname");
        const email = formData.get("email");
        const consent = formData.get("consent");

        try {
            const response = await fetch('/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, consent }),
            });

            console.log(response);
        
            if (response.ok) {
              console.log('User created successfully');
              dispatch({ type: "RESET_ANSWERS" });
              router.push('/test/reading');
            } else {
              console.error('Error creating user');
            }
          } catch (error) {
            console.error('Error:', error);
          }
    };

    return (
        <section id="htmlForm" className="py-40 bg-gray-50">
            <div className="container mx-auto max-w-lg">
                <h2 className="text-4xl font-bold text-center text-primary text-gray-700">Get Your Results</h2>
                <p className="mt-4 text-center text-gray-700 text-xl">Provide your details to start the test and receive results.</p>
                <Form className="mt-8 space-y-6" action={handleStartTest} id="form">
                    <div>
                        <label htmlFor="fullname" className="block font-medium text-gray-800">Full Name</label>
                        <input type="text" id="fullname" name="fullname" className="w-full mt-2 p-3 border rounded shadow-sm" placeholder="Enter your full name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-800">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full mt-2 p-3 border rounded shadow-sm" placeholder="Enter your email address" required />
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="checkbox" id="consent" name="consent" className="htmlForm-checkbox text-primary" required />
                            <span className="ml-2 text-sm text-gray-700">I consent to the collection and processing of my personal information.</span>
                        </label>
                    </div>
                    <div className='flex justify-center'>
                      <Button type="submit" fullWidth>Start Test</Button>
                    </div>
                    
                </Form>
            </div>
        </section>
    );
};
