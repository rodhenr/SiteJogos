import { apiSlice } from "../../app/apiSlice";

export type CellType = boolean | null;

interface IMatchID {
  matchID: number;
}

interface IPlayerMove {
  matchID: number;
  squarePosition: number;
}

export interface IMoveReturn {
  message: string | null;
  isGameOver: boolean | null;
  gameResult: string | null;
  isPlayerNext: boolean | null;
  cells: CellType[];
}

export interface INewMatch {
  gameID: number;
  url: string;
}

export interface IJokenpoReturn {
  userChoice: string;
  cpuCHoice: string;
  result: string;
}

export interface IJokenpoRequest {
  matchID: number;
  choice: string;
}

export const gameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    newMatch: builder.mutation<IMatchID, INewMatch>({
      query: ({ gameID, url }) => ({
        url,
        method: "POST",
        body: { gameID },
      }),
    }),
    playerMove: builder.mutation<IMoveReturn, IPlayerMove>({
      query: (data) => ({
        url: "/api/games/tictactoe/player/move",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: (result) => {
        if (!result?.gameResult) {
          return [];
        }
        return ["UserInfo"];
      },
    }),
    cpuMove: builder.mutation<IMoveReturn, IMatchID>({
      query: (data) => ({
        url: "/api/games/tictactoe/cpu/move",
        method: "POST",
        body: { ...data },
      }),
    }),
    jokenpoUserChoice: builder.mutation<IJokenpoReturn, IJokenpoRequest>({
      query: (data) => ({
        url: "/api/games/jokenpo/player/choice",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: (result) => {
        if (!result?.result) {
          return [];
        }

        return ["UserInfo"];
      },
    }),
  }),
});

export const {
  useNewMatchMutation,
  usePlayerMoveMutation,
  useCpuMoveMutation,
  useJokenpoUserChoiceMutation,
} = gameApiSlice;
