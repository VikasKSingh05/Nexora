import { create } from "zustand";

export interface Selection {
  semester: string;
  branch: string;
}

interface AppState {
  theme: "light" | "dark";
  selection: Selection;
  sidebarOpen: boolean;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
  setSelection: (selection: Partial<Selection>) => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: (typeof window !== "undefined" && localStorage.getItem("theme") === "dark") ? "dark" : "light",
  selection: {
    semester: "",
    branch: "",
  },
  sidebarOpen: false,
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
      return { theme: newTheme };
    }),
  setTheme: (theme) =>
    set((state) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
      return { theme };
    }),
  setSelection: (selection) =>
    set((state) => ({
      selection: { ...state.selection, ...selection },
    })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));