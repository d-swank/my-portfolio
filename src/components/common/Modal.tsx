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
import { motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  closeModalAction: () => void;
};

export default function Modal({ isOpen, closeModalAction }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={closeModalAction}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-md bg-black/20 dark:bg-black/40" />
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
            <DialogPanel className="w-full max-w-4xl relative transform rounded-2xl bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100 p-4 sm:p-6 text-center shadow-2xl border border-indigo-500 overflow-hidden">
              <button
                onClick={closeModalAction}
                className="absolute top-4 right-4 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-500 cursor-pointer"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <DialogTitle className="text-2xl sm:text-3xl font-bold font-mono mb-4">
                My Resume
              </DialogTitle>

              <motion.div
                className="mx-auto mb-6 w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
              />

              <div className="w-full h-[60vh] sm:h-[75vh] overflow-auto border rounded-lg border-gray-300 dark:border-gray-600 mb-4">
                <iframe
                  src="/Dakota_Swank_Resume.pdf"
                  className="w-full h-full"
                  title="Resume PDF Viewer"
                ></iframe>
              </div>

              <a
                href="/Dakota_Swank_Resume.pdf"
                download
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-sans"
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
