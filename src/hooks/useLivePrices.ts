"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export type PriceEntry = {
  bid: number;
  change: number;
  prev: number;
  dir: "up" | "down" | null;
};

export type PriceMap = Record<string, PriceEntry>;

const POLL_MS = 5000;

export function useLivePrices() {
  const [prices, setPrices] = useState<PriceMap>({});
  const [loading, setLoading] = useState(true);
  const prevRef = useRef<Record<string, number>>({});

  const poll = useCallback(async () => {
    try {
      const res = await fetch("/api/prices", { cache: "no-store" });
      if (!res.ok) return;
      const { prices: raw } = await res.json() as { prices: Record<string, { bid: number; change: number }> };

      setPrices((old) => {
        const next: PriceMap = {};
        for (const [k, v] of Object.entries(raw)) {
          const prev = prevRef.current[k] ?? old[k]?.bid ?? v.bid;
          next[k] = {
            bid: v.bid,
            change: v.change,
            prev,
            dir: v.bid > prev ? "up" : v.bid < prev ? "down" : null,
          };
          prevRef.current[k] = v.bid;
        }
        return next;
      });
      setLoading(false);
    } catch { /* network error – keep last state */ }
  }, []);

  useEffect(() => {
    poll();
    const id = setInterval(poll, POLL_MS);
    return () => clearInterval(id);
  }, [poll]);

  return { prices, loading };
}
