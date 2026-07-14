"use client";

import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import type {
  PieceDropHandlerArgs,
  SquareHandlerArgs,
} from "react-chessboard";
import { famousGames } from "@/data/resume";

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

export default function InteractiveChessBoard() {
  const [game] = useState(() => new Chess(famousGames[0].fen));
  const [gameInfo, setGameInfo] = useState(famousGames[0]);
  const [fen, setFen] = useState(game.fen());
  const [status, setStatus] = useState(() => turnLabel(game));
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);

  useEffect(() => {
    const randomGame =
      famousGames[Math.floor(Math.random() * famousGames.length)];
    game.load(randomGame.fen);
    setGameInfo(randomGame);
    setFen(game.fen());
    setStatus(turnLabel(game));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function attemptMove(from: string, to: string) {
    try {
      const move = game.move({ from, to, promotion: "q" });
      if (move === null) return false;
      setFen(game.fen());
      setStatus(turnLabel(game));
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
    game.load(gameInfo.fen);
    setFen(game.fen());
    setStatus(turnLabel(game));
    setSelectedSquare(null);
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

      <div className="w-full max-w-[420px]">
        <Chessboard
          options={{
            position: fen,
            onPieceDrop,
            onSquareClick,
            squareStyles: selectedSquare
              ? { [selectedSquare]: { backgroundColor: "#fde68a" } }
              : {},
            boardOrientation: "white",
            darkSquareStyle: { backgroundColor: "#a1a1aa" },
            lightSquareStyle: { backgroundColor: "#f4f4f5" },
          }}
        />
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
    </div>
  );
}
