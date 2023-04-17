import { apiSlice } from "../../app/apiSlice";

interface INewGame {
  matchID: number;
}

export const gameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNewGame: builder.mutation<INewGame, number>({
      query: (gameID) => ({
        url: "/api/games/tictactoe/start",
        method: "POST",
        body: { gameID },
      }),
    }),
  }),
});

export const { useCreateNewGameMutation } = gameApiSlice;
