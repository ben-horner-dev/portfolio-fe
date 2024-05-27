import { OAuthAvatar } from "@/components/atoms/oAuthAvatar";
import { OAuthEnums } from "@/enums/oAuthEnums";
import { capitalize } from "@/utils/capitalize";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function OAuth() {
  const oAuthIcons = Object.values(OAuthEnums);

  return (
    <List id="oauth-box-list">
      {oAuthIcons.map((icon: string, index: number) => {
        return (
          <div key={`oauth-${index}`}>
            <ListItem>
              <OAuthAvatar icon={icon} />
              <ListItemText primary={capitalize(icon)} />
            </ListItem>
          </div>
        );
      })}
    </List>
  );
}
