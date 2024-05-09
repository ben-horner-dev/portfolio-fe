import { FlashType } from "@/enums/flashEnums";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { closeAlert, setAlert } from "@/slices/alertSlice";

export default function About() {
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.alert);

  return (
    <>
      <button
        onClick={() => {
          dispatch(
            setAlert({
              message: "Hello",
              severity: FlashType.INFO,
              open: true,
            }),
          );
          setTimeout(() => {
            dispatch(closeAlert());
          }, 3000);
        }}
      >
        press
      </button>
      <div>{alert.severity}</div>
    </>
  );
}
