"use client";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

interface ToastTriggerProps {
  message: string;
  type: "success" | "error" | "info" | "warning" | "loading";
}
const createToast = ({ message, type }: { message: string; type: string }) => {
  switch (type) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "info":
      return toast(message, {
        duration: 4000,
        style: {
          background: "#f0f0f0",
          color: "#333",
        },
      });
    case "warning":
      return toast(message, {
        duration: 4000,
        style: {
          background: "#f0f0f0",
          color: "#333",
        },
      });
    case "loading":
      return toast.loading(message);
    default:
      return null;
  }
};

const ToastTrigger = ({ message, type }: ToastTriggerProps) => {
  useEffect(() => {
    createToast({ message, type });
  }, [message, type]);

  return null;
};

export default ToastTrigger;
