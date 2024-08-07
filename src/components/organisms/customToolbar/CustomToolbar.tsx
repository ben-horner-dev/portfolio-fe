import { ShoppingCart } from "@/components/atoms/shoppingCart";
import { UserAvatar } from "@/components/atoms/userAvatar";
import { BtnGroup } from "@/components/molecules/btnGroup";
import { Burger } from "@/components/molecules/burger";
import { LogoBtn } from "@/components/molecules/logoBtn/LogoBtn";
import { SocialBtns } from "@/components/molecules/socialBtns";
import { NavBarIconsEnums } from "@/enums/navBarIconEnums";
import { useAppSelector } from "@/hooks";
import { Stack, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

export const CustomToolbar = () => {
  const icon = useAppSelector((state) => state.navBarIcons.icon);
  const btnGroupMap = {
    [NavBarIconsEnums.USER]: <UserAvatar />,
    [NavBarIconsEnums.SHOPPING_CART]: <ShoppingCart />,
    [NavBarIconsEnums.SOCIAL]: <SocialBtns />,
  };

  return (
    <Toolbar data-testid="custom-toolbar">
      <Box className="md:block hidden">
        <LogoBtn />
      </Box>
      <Burger />
      <Box className="flex-grow" />
      <Box className="md:hidden block">
        <Stack direction={"row"}>
          {icon !== null && btnGroupMap[icon]}
          <LogoBtn />
        </Stack>
      </Box>
      <Box className="md:block hidden">
        <BtnGroup>{icon !== null && btnGroupMap[icon]}</BtnGroup>
      </Box>
    </Toolbar>
  );
};
