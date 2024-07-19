import SearchIcon from "@mui/icons-material/Search";
import { AutocompleteRenderInputParams, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";

interface UserSearchTextFieldProps {
  params: AutocompleteRenderInputParams;
}

export const UserSearchTextField = ({ params }: UserSearchTextFieldProps) => {
  return (
    <TextField
      {...params}
      label="Search for a user"
      inputProps={{
        ...params.inputProps,
      }}
      fullWidth
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
