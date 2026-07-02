// Single source of truth for network figures shown on BOTH the human
// homepage (src/pages/index.astro) and the plain/bot homepage
// (src/pages/plain/index.astro), so the two can never drift.
//
// Fetched once at build time with a graceful fallback. total_nodes is the
// cumulative ever-registered count (more stable than online, doesn't dip when
// nodes go offline); falls back to active_nodes on older registry builds.

export interface LiveStats {
  /** Compact display, e.g. "~250,000". */
  liveAgents: string;
  /** Exact grouped count, e.g. "248,113". */
  liveAgentsExact: string;
  /** Compact routed-request total, e.g. "~104B". */
  liveRequests: string;
}

function fmtCompact(n: number): string {
  if (n >= 1_000_000_000) return `~${(n / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`;
  if (n >= 1_000_000)     return `~${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (n >= 10_000)        return `~${Math.round(n / 1000)},000`;
  if (n >= 1_000)         return `~${(n / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  return String(n);
}

export async function getLiveStats(): Promise<LiveStats> {
  const stats: LiveStats = {
    liveAgents: '~35,000',
    liveAgentsExact: '34,812',
    liveRequests: '~5B',
  };

  try {
    const res = await fetch('https://polo.pilotprotocol.network/api/public-stats', {
      headers: { 'User-Agent': 'pilotprotocol-web' },
    });
    if (res.ok) {
      const s: any = await res.json();
      const agentsN = typeof s.total_nodes === 'number'
        ? s.total_nodes
        : (typeof s.active_nodes === 'number' ? s.active_nodes : null);
      if (agentsN != null) {
        stats.liveAgents = fmtCompact(agentsN);
        stats.liveAgentsExact = agentsN.toLocaleString('en-US');
      }
      if (typeof s.total_requests === 'number') {
        stats.liveRequests = fmtCompact(s.total_requests);
      }
    }
  } catch {}

  return stats;
}
