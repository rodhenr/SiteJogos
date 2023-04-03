import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useGetPlayerCompleteInfoQuery } from "../../userInfoApiSlice";
import { changeProfileModal } from "../../sidebarSlice";

import SidebarModalContainer from "../containers/SidebarModalContainer";
import ProfileModal from "./ProfileModal";

function Index() {
  const profileState = useSelector(
    (state: RootState) => state.sidebar.profileModal
  );
  const dispatch = useDispatch();
  const { data, isSuccess, isLoading, isError, refetch } =
    useGetPlayerCompleteInfoQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleClose = () => {
    dispatch(changeProfileModal(false));
  };

  return (
    <SidebarModalContainer
      closeFunction={handleClose}
      openState={profileState}
      isLoading={isLoading}
      isError={isError}
      title={""}
    >
      {isSuccess ? <ProfileModal data={data} /> : <></>}
    </SidebarModalContainer>
  );
}

export default Index;
