import useViewportStore from "@/store/viewportStore";

const RouteHandler = ({ children }: { children: React.ReactNode }) => {
  const setMobileView = useViewportStore((state) => state.setMobileView);

  const viewChange = () => {
    if (window.innerWidth < 1024) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", viewChange);
  }

  return <div>{children}</div>;
};

export default RouteHandler;
