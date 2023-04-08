import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { changeProfileModal } from "../../modalSlice";
import { useGetPlayerCompleteInfoQuery } from "../../userInfoApiSlice";

import ModalContainer from "../ModalContainer";
import UserInfoModal from "./UserInfoModal";
import PlayerExp from "./PlayerExp";
import FriendList from "./FriendList";
import StatisticList from "./StatisticList";

function ProfileModal() {
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
    <ModalContainer
      closeFunction={handleClose}
      openState={profileState}
      isLoading={isLoading}
      isError={isError}
      title={""}
      isAuth={false}
    >
      <>
        {isSuccess && (
          <>
            <UserInfoModal
              avatar={data.avatar}
              id={data.id}
              name={data.name}
              position={data.position}
            />
            <PlayerExp
              experience={data.experience}
              level={data.level}
              maxExperience={data.maxExperience}
            />
            <FriendList data={data.friends} />
            <StatisticList data={data.statistics} />
          </>
        )}
      </>
    </ModalContainer>
  );
}

export default ProfileModal;
