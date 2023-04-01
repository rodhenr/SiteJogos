import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import SidebarMobileContainer from "./components/containers/SidebarMobileContainer";
import SidebarDesktopContainer from "./components/containers/SidebarDesktopContainer";
import AuthSidebar from "./components/AuthSidebar";
import LoggedSidebar from "./components/LoggedSidebar";

function Index() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const hasToken = useSelector((state: RootState) => state.auth.token);

  let render =
    windowWidth >= 1024 ? (
      <SidebarDesktopContainer>
        <AuthSidebar />
      </SidebarDesktopContainer>
    ) : (
      <SidebarMobileContainer>
        <AuthSidebar />
      </SidebarMobileContainer>
    );

  if (hasToken) {
    render =
      windowWidth >= 1024 ? (
        <SidebarDesktopContainer>
          <LoggedSidebar />
        </SidebarDesktopContainer>
      ) : (
        <SidebarMobileContainer>
          <LoggedSidebar />
        </SidebarMobileContainer>
      );
  }

  return render;
}

export default Index;
