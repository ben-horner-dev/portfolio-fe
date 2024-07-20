import { useRefs } from "@/contexts/refProvider";
import { BTN_ITEMS } from "@/enums/navBarIconEnums";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface NavDrawerListItemsProps {
  toggleDrawer: () => void;
}

export const NavDrawerListItems = ({
  toggleDrawer,
}: NavDrawerListItemsProps) => {
  const refs = useRefs();
  const handleClick = (text: string) => {
    const ref = (refs as any)[text.toLowerCase()].ref;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {BTN_ITEMS.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleClick(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
