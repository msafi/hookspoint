export type Prices = { [date: string]: number };
export type PriceMovementRecord = {
  date: string;
  price: number;
  accumulatedChange: number;
};
export type PriceMovement = PriceMovementRecord[];
