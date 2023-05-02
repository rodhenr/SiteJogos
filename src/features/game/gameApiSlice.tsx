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
  cells: CellType[];
  gameResult: string | null;
  isGameOver: boolean | null;
  isPlayerNext: boolean | null;
  message: string | null;
}

export interface INewMatch {
  gameID: number;
}

export interface IJokenpoReturn {
  cpuChoice: string | null;
  result: string | null;
  userChoice: string | null;
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

export interface IYahtzeeResponse {
  currentDices: number[];
  isGameOver: boolean;
  gameResult: string | null;
  matchID: number;
  points: number | null;
  remainingMoves: number;
  ruleSum_all: number | null;
  ruleSum_one: number | null;
  ruleSum_two: number | null;
  ruleSum_three: number | null;
  ruleSum_four: number | null;
  ruleSum_five: number | null;
  ruleSum_six: number | null;
  ruleSame_three: number | null;
  ruleSame_four: number | null;
  rule_yahtzee: number | null;
  ruleRow_four: number | null;
  ruleRow_five: number | null;
}

interface IYahtzeeRoll {
  matchID: number;
  dices: boolean[];
}

interface IYahtzeeChooseRule {
  matchID: number;
  ruleName: string;
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
      invalidatesTags: (result) => {
        if (!result?.gameResult) {
          return [];
        }

        return ["UserInfo"];
      },
    }),
    unoCPUMove: builder.mutation<IUno, IUnoCPURequest>({
      query: (data) => ({
        url: "/api/games/uno/cpu/move",
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
    unoBuyCard: builder.mutation<IUno, IUnoCPURequest>({
      query: (data) => ({
        url: "/api/games/uno/buy",
        method: "POST",
        body: { ...data },
      }),
    }),
    unoSkipTurn: builder.mutation<IUno, IUnoCPURequest>({
      query: (data) => ({
        url: "/api/games/uno/skip",
        method: "POST",
        body: { ...data },
      }),
    }),
    newYahtzeeGame: builder.mutation<IYahtzeeResponse, void>({
      query: () => ({
        url: "/api/games/yahtzee/new",
        method: "POST",
        body: {},
      }),
    }),
    yahtzeeRoll: builder.mutation<IYahtzeeResponse, IYahtzeeRoll>({
      query: (data) => ({
        url: "/api/games/yahtzee/roll",
        method: "POST",
        body: { ...data },
      }),
    }),
    yahtzeeChooseRule: builder.mutation<IYahtzeeResponse, IYahtzeeChooseRule>({
      query: (data) => ({
        url: "/api/games/yahtzee/rule",
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
  useUnoSkipTurnMutation,
  useNewYahtzeeGameMutation,
  useYahtzeeRollMutation,
  useYahtzeeChooseRuleMutation,
} = gameApiSlice;
