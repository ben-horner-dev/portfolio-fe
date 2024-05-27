import { UserAvatar } from "@/components/atoms/userAvatar";
import { BtnGroup } from "@/components/molecules/btnGroup";
import { Burger } from "@/components/molecules/burger";
import { LogoBtn } from "@/components/molecules/logoBtn/LogoBtn";
import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

export const CustomToolbar = () => {
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
        <BtnGroup>
          <UserAvatar />
        </BtnGroup>
      </Box>
    </Toolbar>
  );
};
