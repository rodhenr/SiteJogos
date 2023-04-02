import { IPlayerCompleteInfo } from "../../userInfoApiSlice";

import FriendList from "./FriendList";
import StatisticList from "./StatisticList";

import UserInfoModal from "./UserInfoModal";
import PlayerExp from "./PlayerExp";

interface IProps {
  data: IPlayerCompleteInfo;
}

function ProfileModal({ data }: IProps) {
  return (
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
  );
}

export default ProfileModal;
