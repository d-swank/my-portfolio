"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  closeModalAction: () => void;
};

export default function Modal({ isOpen, closeModalAction }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModalAction}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-md bg-black/20" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-4xl relative transform rounded-2xl bg-gray-800/70 text-black p-4 sm:p-6 text-center shadow-2xl border border-indigo-400 transition-all overflow-hidden">
              {/* Close icon */}
              <button
                onClick={closeModalAction}
                className="absolute top-4 right-4 text-white hover:text-indigo-400 transition cursor-pointer"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <DialogTitle className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                My Resume
              </DialogTitle>

              {/* PDF Viewer */}
              <div className="w-full h-[60vh] sm:h-[75vh] overflow-auto border rounded-lg mb-4">
                <iframe
                  src="/Dakota_Swank_Resume.pdf"
                  className="w-full h-full"
                  title="Resume PDF Viewer"
                ></iframe>
              </div>

              {/* Download Button */}
              <a
                href="/Dakota_Swank_Resume.pdf"
                download
                className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Download Resume
              </a>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
