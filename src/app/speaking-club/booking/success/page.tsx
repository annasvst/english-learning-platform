export default async function SpeakingClubPaymentSuccessful() {
  // Try using light teal tones to create gradient (see test hero page).
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🎉 Ödeme Onaylandı!
          </h1>
          <p className="text-gray-600 text-lg">
            İngilizce Konuşma Kulübümüze katıldığınız için teşekkür ederiz!
            Oturum davetiyeniz birkaç dakika içinde e-posta adresinize
            gönderilecektir.
          </p>
        </div>

        <div className="bg-rose-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sırada Ne Var?
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Oturum detayları için gelen kutunuzu kontrol edin</li>
            <li>Davetiyenizde yer alan hazırlık materyallerini inceleyin.</li>
            <li>
              Oturum öncesinde tartışma konularına vereceğiniz yanıtları
              hazırlayın.
            </li>
          </ol>
        </div>

        <div className="bg-teal-50 rounded-lg p-6 mb-8">
          <p className="text-gray-600 mb-4">
            Teknik bir sorun yaşıyorsanız veya davetiyeniz ulaşmadıysa, bize{" "}
            <a
              href="mailto:hello@code2career.eu"
              className="text-teal-600 hover:text-teal-700 underline"
            >
              hello@code2career.eu
            </a>{" "}
            adresinden ulaşabilirsiniz
          </p>
          <div className="flex items-center gap-2 text-teal-700">
            <span className="text-xl">💡</span>
            <p className="font-medium">
              Önemli İpucu: Oturum sırasında daha özgüvenli hissetmek için
              söyleyeceklerinizi önceden planlayın!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
