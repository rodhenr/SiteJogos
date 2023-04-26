import { apiSlice } from "../../app/apiSlice";
import { IUno } from "./uno/unoSlice";

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

export interface IUnoPlayerRequest {
  matchID: number;
  card: string;
  color: null | string;
}

export interface IUnoCPURequest {
  matchID: number;
  player: string;
}

export interface IUnoResponse extends IUno {
  matchID: number;
}

export const gameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    newMatch: builder.mutation<IMatchID, INewMatch>({
      query: ({ gameID }) => ({
        url: "/api/games/start",
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
    newUnoGame: builder.mutation<IUnoResponse, void>({
      query: () => ({
        url: "/api/games/uno/new",
        method: "POST",
        body: {},
      }),
    }),
    unoPlayerMove: builder.mutation<IUno, IUnoPlayerRequest>({
      query: (data) => ({
        url: "/api/games/uno/player/move",
        method: "POST",
        body: { ...data },
      }),
    }),
    unoCPUMove: builder.mutation<IUno, IUnoCPURequest>({
      query: (data) => ({
        url: "/api/games/uno/cpu/move",
        method: "POST",
        body: { ...data },
      }),
    }),
    unoBuyCard: builder.mutation<IUno, IUnoCPURequest>({
      query: (data) => ({
        url: "/api/games/uno/buy",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useNewMatchMutation,
  usePlayerMoveMutation,
  useCpuMoveMutation,
  useJokenpoUserChoiceMutation,
  useUnoPlayerMoveMutation,
  useUnoCPUMoveMutation,
  useUnoBuyCardMutation,
  useNewUnoGameMutation,
} = gameApiSlice;
