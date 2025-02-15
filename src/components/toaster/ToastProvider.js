"use client";
import { Toaster } from "react-hot-toast";

const ToastProvider = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-left" />
      {children}
    </>
  );
};

export default ToastProvider;
