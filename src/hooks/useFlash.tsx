import { FlashType } from "@/enums/flashEnums";
import { useAppDispatch } from "@/hooks/stateHooks";
import { closeAlert, setAlert } from "@/slices/alertSlice";

export const useFlash = () => {
  const ALERT_TIMEOUT = 3000;
  const dispatch = useAppDispatch();

  const showAlert = (
    message: string,
    severity: FlashType,
    timeout_coefficient: number = 1,
  ) => {
    dispatch(
      setAlert({
        message,
        severity,
        open: true,
      }),
    );

    setTimeout(() => {
      dispatch(closeAlert());
    }, ALERT_TIMEOUT * timeout_coefficient);
  };

  return showAlert;
};
