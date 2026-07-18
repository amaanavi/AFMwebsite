"use client";

import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import type {
  PieceDropHandlerArgs,
  SquareHandlerArgs,
} from "react-chessboard";
import { famousGames } from "@/data/resume";

type LastMove = { from: string; to: string } | null;

function turnLabel(game: Chess) {
  if (game.isCheckmate()) {
    return `Checkmate — ${game.turn() === "w" ? "Black" : "White"} wins`;
  }
  if (game.isDraw()) return "Draw";
  if (game.isCheck()) {
    return `${game.turn() === "w" ? "White" : "Black"} to move — Check`;
  }
  return `${game.turn() === "w" ? "White" : "Black"} to move`;
}

function MoveList({
  moves,
  currentPly,
}: {
  moves: string[];
  currentPly: number;
}) {
  const rows: { number: number; white: string; black?: string }[] = [];
  for (let i = 0; i < moves.length; i += 2) {
    rows.push({ number: i / 2 + 1, white: moves[i], black: moves[i + 1] });
  }

  return (
    <div className="max-h-[480px] w-full overflow-y-auto rounded-lg border border-zinc-200 bg-zinc-50 sm:w-48">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row) => {
            const whitePly = row.number * 2 - 1;
            const blackPly = row.number * 2;
            return (
              <tr
                key={row.number}
                className="border-b border-zinc-200 last:border-0"
              >
                <td className="w-8 py-1.5 pl-3 text-zinc-400">
                  {row.number}.
                </td>
                <td
                  className={`py-1.5 ${
                    whitePly === currentPly
                      ? "bg-zinc-200 font-semibold text-zinc-900"
                      : "text-zinc-700"
                  }`}
                >
                  {row.white}
                </td>
                <td
                  className={`py-1.5 pr-3 ${
                    blackPly === currentPly
                      ? "bg-zinc-200 font-semibold text-zinc-900"
                      : "text-zinc-700"
                  }`}
                >
                  {row.black ?? ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function InteractiveChessBoard() {
  const [game] = useState(() => new Chess());
  const [gameInfo, setGameInfo] = useState(famousGames[0]);
  const [replayPly, setReplayPly] = useState(famousGames[0].startPly);
  const [fen, setFen] = useState(game.fen());
  const [status, setStatus] = useState(() => turnLabel(game));
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [lastMove, setLastMove] = useState<LastMove>(null);

  useEffect(() => {
    const randomGame =
      famousGames[Math.floor(Math.random() * famousGames.length)];
    setGameInfo(randomGame);
    setReplayPly(randomGame.startPly);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    game.reset();
    let last: LastMove = null;
    for (let i = 0; i < replayPly; i++) {
      const result = game.move(gameInfo.moves[i]);
      if (result) last = { from: result.from, to: result.to };
    }
    setFen(game.fen());
    setStatus(turnLabel(game));
    setLastMove(last);
    setSelectedSquare(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameInfo, replayPly]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        setReplayPly((p) => Math.min(p + 1, gameInfo.moves.length));
      } else if (e.key === "ArrowLeft") {
        setReplayPly((p) => Math.max(p - 1, 0));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameInfo]);

  function attemptMove(from: string, to: string) {
    try {
      const move = game.move({ from, to, promotion: "q" });
      if (move === null) return false;
      setFen(game.fen());
      setStatus(turnLabel(game));
      setLastMove({ from: move.from, to: move.to });
      return true;
    } catch {
      return false;
    }
  }

  function onPieceDrop({ sourceSquare, targetSquare }: PieceDropHandlerArgs) {
    if (!targetSquare) return false;
    const moved = attemptMove(sourceSquare, targetSquare);
    if (moved) setSelectedSquare(null);
    return moved;
  }

  function onSquareClick({ square, piece }: SquareHandlerArgs) {
    if (selectedSquare) {
      if (selectedSquare === square) {
        setSelectedSquare(null);
        return;
      }
      const moved = attemptMove(selectedSquare, square);
      if (moved) {
        setSelectedSquare(null);
        return;
      }
      setSelectedSquare(piece ? square : null);
      return;
    }
    if (piece) setSelectedSquare(square);
  }

  function reset() {
    setReplayPly(gameInfo.startPly);
  }

  const squareStyles: Record<string, { backgroundColor: string }> = {};
  if (lastMove) {
    squareStyles[lastMove.from] = { backgroundColor: "#bae6fd" };
    squareStyles[lastMove.to] = { backgroundColor: "#bae6fd" };
  }
  if (selectedSquare) {
    squareStyles[selectedSquare] = { backgroundColor: "#fde68a" };
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-center">
        <p className="text-sm font-semibold text-zinc-900">
          {gameInfo.white} ({gameInfo.whiteRating}) vs. {gameInfo.black} (
          {gameInfo.blackRating})
        </p>
        <p className="text-xs text-zinc-500">
          {gameInfo.date} · {gameInfo.tournament}
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row">
        <div className="w-full max-w-[420px]">
          <Chessboard
            options={{
              position: fen,
              onPieceDrop,
              onSquareClick,
              squareStyles,
              boardOrientation: "white",
              darkSquareStyle: { backgroundColor: "#a1a1aa" },
              lightSquareStyle: { backgroundColor: "#f4f4f5" },
            }}
          />
        </div>

        <MoveList moves={gameInfo.moves} currentPly={replayPly} />
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm text-zinc-600">
        <span>{status}</span>
        <button
          onClick={reset}
          className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
        >
          Reset
        </button>
      </div>
      <p className="mt-2 text-xs text-zinc-400">
        Use ← → to step through the game
      </p>
    </div>
  );
}
