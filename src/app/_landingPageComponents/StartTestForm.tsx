"use client";

import { useRouter } from "next/navigation";
import { useTestAnswers } from "../test/TestAnswersProvider";
import { Button } from "../_components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "../_components/inputs/Checkbox";
import { FormError } from "../_components/inputs/FormError";

type TestSignUpFormInputs = {
  name: string;
  email: string;
  birthYear: number;
  consent: boolean;
};

export const StartTestForm = () => {
  const { dispatch } = useTestAnswers();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TestSignUpFormInputs>();

  const handleStartTest: SubmitHandler<TestSignUpFormInputs> = async (
    formData,
  ) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });

      console.log(response);

      if (response.ok) {
        console.log("User created successfully");
        dispatch({ type: "RESET_ANSWERS" });
        router.push("/test/reading");
      } else {
        console.error("Error creating user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="htmlForm" className="py-40 bg-gray-50">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-4xl font-bold text-center text-primary text-gray-700">
          İngilizce Seviyeni Öğren
        </h2>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(handleStartTest)}
          id="form"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block font-medium text-gray-800">
              Ad
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded shadow-sm"
              placeholder="John Doe"
              {...register("name", {
                required: "Lütfen adınızı girin",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Ad sadece harflerden oluşmalıdır",
                },
              })}
            />
            {errors.name && <FormError>Lütfen adınızı girin</FormError>}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-800">
              E-posta Adresi
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded shadow-sm"
              placeholder="yourname@domain.com"
              {...register("email", {
                required: "Lütfen e-posta adresinizi girin",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Geçerli bir e-posta adresi girin",
                },
              })}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>
          <div>
            <label
              htmlFor="birthYear"
              className="block font-medium text-gray-800"
            >
              Doğum yılı
            </label>
            <input
              type="number"
              id="birthYear"
              className="w-full mt-2 p-3 border rounded shadow-sm"
              placeholder="1990"
              {...register("birthYear", {
                required: "Lütfen doğum yılınızı girin",
                min: {
                  value: 1900,
                  message: "Doğum yılı 1900'den küçük olamaz",
                },
                max: {
                  value: new Date().getFullYear(),
                  message: `Doğum yılı ${new Date().getFullYear()} yılından büyük olamaz`,
                },
              })}
            />
            {errors.birthYear && (
              <FormError>{errors.birthYear.message}</FormError>
            )}
          </div>
          <div>
            <Checkbox
              id="consent"
              register={{
                ...register("consent", {
                  required: "Bu alan zorunlu",
                }),
              }}
              label="Kişisel bilgilerimin toplanması ve işlenmesine izin veriyorum."
              error={errors?.consent?.message}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" fullWidth>
              Teste Başla
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
