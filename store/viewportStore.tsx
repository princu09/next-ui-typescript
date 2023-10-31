import { create } from "zustand";

interface ViewportState {
  isMobileView: boolean;
  setMobileView: (isMobileView: boolean) => void;
}

const useViewportStore = create<ViewportState>((set) => ({
  isMobileView: false,
  setMobileView: (isMobileView: boolean) => {
    set({ isMobileView });
  },
}));

export default useViewportStore;
