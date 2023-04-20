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

export const gameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNewGame: builder.mutation<IMatchID, number>({
      query: (gameID) => ({
        url: "/api/games/tictactoe/start",
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
    }),
    cpuMove: builder.mutation<IMoveReturn, IMatchID>({
      query: (data) => ({
        url: "/api/games/tictactoe/cpu/move",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useCreateNewGameMutation,
  usePlayerMoveMutation,
  useCpuMoveMutation,
} = gameApiSlice;
