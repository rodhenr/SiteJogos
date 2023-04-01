import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useGetPlayerRecentMatchesQuery } from "../../userInfoApiSlice";
import { changeHistoryModal } from "../../sidebarSlice";

import SidebarModalContainer from "../containers/SidebarModalContainer";
import MatchList from "./MatchList";
import HasNoData from "../HasNoData";

function MatchesModal() {
  const historyState = useSelector(
    (state: RootState) => state.sidebar.historyModal
  );
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading, isError } =
    useGetPlayerRecentMatchesQuery(0, {
      refetchOnMountOrArgChange: true,
    });

  const handleClose = () => {
    dispatch(changeHistoryModal(false));
  };

  return (
    <SidebarModalContainer
      closeFunction={handleClose}
      openState={historyState}
      isLoading={isLoading}
      isError={isError}
      title={"HISTÓRICO DE PARTIDAS"}
    >
      {isSuccess ? (
        data.length > 0 ? (
          <MatchList data={data} />
        ) : (
          <HasNoData />
        )
      ) : (
        <></>
      )}
    </SidebarModalContainer>
  );
}

export default MatchesModal;