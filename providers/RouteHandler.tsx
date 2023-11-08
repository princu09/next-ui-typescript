import useViewportStore from "@/store/viewportStore";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
// import Cookies from "js-cookie";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const RouteHandler = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

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

  const {
    data: session,
    status,
  }: {
    data: any;
    status: string;
  } = useSession();

  // if (
  //   pathname.includes("auth") &&
  //   (status === "unauthenticated" || status === "loading")
  // ) {
  //   return children;
  // }

  // // if (status === "loading" && !pathname.includes("auth")) {
  // //   return <Preloader />;
  // // }

  // if (pathname.includes("admin") && status === "authenticated") {
  //   return children;
  // }

  // if (
  //   pathname.includes("auth") &&
  //   !pathname.includes("signOut") &&
  //   status === "authenticated"
  // ) {
  //   window.location.href = "/";
  //   return null;
  // }

  // if (status === "unauthenticated" && !pathname.includes("auth")) {
  //   window.location.href = "/auth/login";
  //   return null;
  // }

  // if (status === "authenticated" && !Cookies.get("token")) {
  //   Cookies.set("token", session?.token);
  // }

  return (
    <div>
      {pathname.includes("/auth/login") ? null : <Navbar />}
      {children}
      {pathname.includes("/auth/login") ? null : <Footer />}
    </div>
  );
};

export default RouteHandler;
