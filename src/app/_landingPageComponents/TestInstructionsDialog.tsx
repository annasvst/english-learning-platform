import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ListChecks } from "@phosphor-icons/react";

interface TestInstructionsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  action: () => void;
}

export const TestInstructionsDialog = ({
  open,
  setOpen,
  action,
}: TestInstructionsDialogProps) => {
  const handleClick = () => {
    setOpen(false);
    action();
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex items-center flex-col md:flex-row md:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <ListChecks size={32} className="text-gray-900" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-xl font-semibold text-gray-900"
                  >
                    Test Nasıl İşler?
                  </DialogTitle>
                  <div className="mt-2">
                    <ul className="text-gray-700 list-disc">
                      <li className="my-4">
                        3 Bölüm: Okuma, Dinleme ve Dilbilgisi.
                      </li>
                      <li className="my-4">
                        Bölüm İçi Testler: Her bölümde 1 veya 2 test
                        bulunabilir.
                      </li>
                      <li className="my-4">
                        Her Testte 10 Soru: Tüm soruları yanıtladıktan sonra
                        &quot;Gönder&quot; düğmesine basın.
                      </li>
                      <li className="my-4">
                        Geri Dönüş Yok: Gönder’e bastıktan sonra cevaplarınızı
                        değiştiremezsiniz.
                      </li>
                      <li className="my-4">
                        Ses Kaydı: Dinleme bölümünde bir ses kaydı duyacaksınız;
                        lütfen hoparlör veya kulaklıklarınızın çalışır durumda
                        olduğundan emin olun.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end sm:px-6">
              <button
                type="button"
                onClick={handleClick}
                className="mt-3 inline-flex w-full justify-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Anladım
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
