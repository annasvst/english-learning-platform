export const thresholds = {
  B1_B2: {
    high: 0.8,// Move up to C1–C2 test.
    low: 0.5, // Move down to A1–A2 test.
    mid: {
      high: 0.6 // Above 0.6 B2, below 0.6 B1
    }
    // Mid range is 0.51 to 0.79 => stay at B1–B2.
  },
  A1_A2: {
    high: 0.8,// A2
    // 0 to 0.79 => A1
  },
  C1_C2: {
    high: 0.85,// C2
    // 0 to 0.84 => C1
  }
}