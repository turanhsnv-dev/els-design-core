import type { ToasterProps } from "react-hot-toast";

export const TOASTER_OPTIONS: ToasterProps["toastOptions"] = {
  success: {
    duration: 3000,
    style: {
      background: "rgba(11, 12, 21, 0.95)",
      color: "#fff",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      borderRadius: "12px",
      padding: "16px 24px",
      minWidth: "320px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    },
    iconTheme: {
      primary: "#10b981",
      secondary: "rgba(11, 12, 21, 0.95)",
    },
  },
};

export const CV_TOAST = {
  icon: "✓",
  style: {
    background: "rgba(5, 5, 5, 0.97)",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(20px)",
    borderRadius: "10px",
    padding: "14px 20px",
    minWidth: "280px",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
  },
  iconTheme: {
    primary: "#00E5FF",
    secondary: "rgba(5, 5, 5, 0.97)",
  },
} as const;
