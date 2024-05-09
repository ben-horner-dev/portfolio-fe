import { FlashType } from "@/enums/flashEnums";

export interface AlertState {
  open: boolean;
  message: string;
  severity: FlashType;
}
