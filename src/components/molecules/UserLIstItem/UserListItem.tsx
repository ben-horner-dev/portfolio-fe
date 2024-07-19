import { UserListText } from "@/components/atoms/userListText";
import { useAppSelector } from "@/hooks";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

interface UserListItemProps {
  user: string;
}

export const UserListItem = ({ user }: UserListItemProps) => {
  const userData = useAppSelector((state) => state.socialNetwork.userData);

  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={user} src={`socialNetwork/${user}.jpg`} />
        </ListItemAvatar>
        <ListItemText
          primary={<UserListText user={user} />}
          secondary={`Last Activity: ${
            userData.filter((newUser) => newUser.name === user)[0].active
          } hours ago`}
        />
      </ListItem>
    </List>
  );
};
