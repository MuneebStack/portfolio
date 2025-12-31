import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidthClass?: string;
}

const Modal = ({ open, onClose, children, maxWidthClass = 'max-w-2xl' }: ModalProps) => {
    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        if (open) {
            html.style.overflow = "hidden";
            body.style.overflow = "hidden";
        } else {
            html.style.overflow = "";
            body.style.overflow = "";
        }

        return () => {
            html.style.overflow = "";
            body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-999 flex-center overflow-auto p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <button
                onClick={onClose}
                className="fixed top-4 right-4 w-10 h-10 cursor-pointer flex-center rounded-full bg-white/20 hover:bg-white/30 transition-colors z-50"
            >
                <X className="text-white text-lg" />
            </button>

            <div className={`relative z-10 ${maxWidthClass} w-full bg-[#0b1220] rounded-xl p-8 shadow-xl overflow-auto max-h-[90vh] custom-scrollbar`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;