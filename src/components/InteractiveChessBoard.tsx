"use client";

import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import type {
  PieceDropHandlerArgs,
  SquareHandlerArgs,
} from "react-chessboard";

export default function InteractiveChessBoard() {
  const [game] = useState(() => new Chess());
  const [fen, setFen] = useState(game.fen());
  const [status, setStatus] = useState("White to move");
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);

  function updateStatus() {
    if (game.isCheckmate()) {
      setStatus(`Checkmate — ${game.turn() === "w" ? "Black" : "White"} wins`);
    } else if (game.isDraw()) {
      setStatus("Draw");
    } else if (game.isCheck()) {
      setStatus(`${game.turn() === "w" ? "White" : "Black"} to move — Check`);
    } else {
      setStatus(`${game.turn() === "w" ? "White" : "Black"} to move`);
    }
  }

  function attemptMove(from: string, to: string) {
    try {
      const move = game.move({ from, to, promotion: "q" });
      if (move === null) return false;
      setFen(game.fen());
      updateStatus();
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
    game.reset();
    setFen(game.fen());
    setStatus("White to move");
    setSelectedSquare(null);
  }

  return (
    <div className="flex flex-col items-center">
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
