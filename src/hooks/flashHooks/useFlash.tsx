import { FlashType } from "@/enums/flashEnums";
import { useAppDispatch } from "@/hooks/stateHooks";
import { setAlert } from "@/slices/alertSlice";

export const useFlash = () => {
  const dispatch = useAppDispatch();

  const showAlert = (message: string, severity: FlashType) => {
    dispatch(
      setAlert({
        message,
        severity,
        open: true,
      }),
    );
  };

  return showAlert;
};
