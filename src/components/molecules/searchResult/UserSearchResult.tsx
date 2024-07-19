import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { HTMLAttributes } from "react";

interface ExtendedHTMLAttributes extends HTMLAttributes<HTMLLIElement> {
  key?: string;
}

interface UserSearchResultProps {
  props: ExtendedHTMLAttributes;
  user: string;
}
export const UserSearchResult = ({ props, user }: UserSearchResultProps) => {
  //
  const { key, ...restProps } = props;
  return (
    <Box
      component="li"
      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
      key={key}
      {...restProps}
    >
      <IconButton>
        <Avatar alt="profile_pic" src={`socialNetwork/${user}.jpg`} />
      </IconButton>
      {user}
    </Box>
  );
};
