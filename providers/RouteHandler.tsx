"use client";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { setMobileView } from "@/redux/slices/viewportSlice";

const RouteHandler = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const viewChange = () => {
    if (window.innerWidth < 1024) {
      dispatch(setMobileView(true));
    } else {
      dispatch(setMobileView(false));
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", viewChange);
  }

  return <div>{children}</div>;
};

export default RouteHandler;
