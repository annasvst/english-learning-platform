'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

    useEffect(() => {
        console.error(error)
      }, [error])
      
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Bir Şeyler Yanlış Gitti</h2>
        <p className="text-gray-600 mb-8">
          Üzgünüz, bir hata oluştu. Lütfen daha sonra tekrar deneyin.
        </p>
        <div className="flex flex-col gap-6">
          <button
            onClick={reset}
            className="text-teal-600 hover:text-teal-700 font-medium text-lg"
          >
            Tekrar Dene
          </button>
          <Link 
            href="/" 
            className="text-teal-600 hover:text-teal-700 font-medium text-lg"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
} 