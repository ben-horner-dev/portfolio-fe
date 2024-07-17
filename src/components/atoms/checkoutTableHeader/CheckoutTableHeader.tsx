import { CheckoutColumns } from "@/enums/eCommerceEnums";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const CheckoutTableHeader = () => {
  return (
    <TableRow>
      <TableCell>Product</TableCell>
      {Object.values(CheckoutColumns).map((column) => (
        <TableCell key={column} align="right">
          {column}
        </TableCell>
      ))}
    </TableRow>
  );
};
