import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { Warning } from "@phosphor-icons/react";

interface WarningDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const AnswersMissingDialog = ({ open, setOpen }: WarningDialogProps) => {
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
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100">
                <Warning size={32} className="text-red-600"/>
                </div>
                <div className="text-center mt-4 md:mt-0 md:ml-4 sm:text-left">
                  <div>
                    <p className="text-sm text-gray-500">
                    Testi göndermeden önce, tüm soruları cevaplamalısınız. Lütfen boş bıraktığınız soruları tamamlayıp tekrar deneyin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Kapat
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
