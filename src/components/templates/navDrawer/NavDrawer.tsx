import { NavDrawerListItems } from "@/components/molecules/navDrawerListItems";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setNavOpen } from "@/slices/navSlice";
import Drawer from "@mui/material/Drawer";

export function NavDrawer() {
  const open = useAppSelector((state) => state.nav.open);

  const dispatch = useAppDispatch();
  const toggleDrawer = () => {
    dispatch(setNavOpen());
  };

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        <NavDrawerListItems toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}
