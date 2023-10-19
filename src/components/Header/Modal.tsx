import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const closeModal = () => {
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-2/3 h-full flex bg-white">
        <div onClick={closeModal}>
          <div className="bg-white p-4 rounded-lg">
            {children}
            <button
              onClick={onClose}
              className="mt-4 bg-gray-300 text-white px-4 py-2 rounded-md"
            >
              ✖︎
            </button>
          </div>
        </div>
      </div>
    )
  );
};
