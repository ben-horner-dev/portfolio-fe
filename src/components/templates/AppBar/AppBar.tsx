import { CustomToolbar } from "@/components/organisms/customToolbar";
import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./AppBar.module.css";

export const CustomAppBar = () => {
    return (
        <Box>
            <AppBar position="fixed" className={styles.appbar}>
                <CustomToolbar />
            </AppBar>
        </Box>
    );
};
