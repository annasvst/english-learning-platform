import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 mb-8">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen ana sayfaya dönmeyi deneyin.
        </p>
        <Link 
          href="/" 
          className="text-teal-700 hover:text-teal-800 font-medium text-lg"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
} 