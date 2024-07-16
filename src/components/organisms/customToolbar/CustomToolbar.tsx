import { ShoppingCart } from "@/components/atoms/shoppingCart/ShoppingCart";
import { UserAvatar } from "@/components/atoms/userAvatar";
import { BtnGroup } from "@/components/molecules/btnGroup";
import { Burger } from "@/components/molecules/burger";
import { LogoBtn } from "@/components/molecules/logoBtn/LogoBtn";
import { NavBarIconsEnums } from "@/enums/navBarIconEnums";
import { useAppSelector } from "@/hooks";
import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

export const CustomToolbar = () => {
  const icon = useAppSelector((state) => state.navBarIcons.icon);
  const btnGroupMap = {
    [NavBarIconsEnums.USER]: <UserAvatar />,
    [NavBarIconsEnums.SHOPPING_CART]: <ShoppingCart />,
  };

  return (
    <Toolbar data-testid="custom-toolbar">
      <Box className="md:block hidden">
        <LogoBtn />
      </Box>
      <Burger />
      <Box className="flex-grow" />
      <Box className="md:hidden block">
        <LogoBtn />
      </Box>
      <Box className="md:block hidden">
        <BtnGroup>{icon !== null && btnGroupMap[icon]}</BtnGroup>
      </Box>
    </Toolbar>
  );
};
