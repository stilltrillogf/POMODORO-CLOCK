import React from "react";
import { createContext } from "react";

export const BreakLengthContext = createContext(null);
export const SessionLengthContext = createContext(null);
export const CurrentTypeContext = createContext(null);
export const SetCurrentTypeContext = createContext(null);
export const TimerIsRunningContext = createContext(null);
export const TimerIsPausedContext = createContext(null);
export const HandleChangeLengthContext = createContext(null);
export const HandlePlayPauseResetContext = createContext(null);

export default function Compose({ items, children }) {
  return items.reduceRight(
    (acc, [Context, props]) => (
      <Context.Provider {...props}>{acc}</Context.Provider>
    ),
    children
  );
}
