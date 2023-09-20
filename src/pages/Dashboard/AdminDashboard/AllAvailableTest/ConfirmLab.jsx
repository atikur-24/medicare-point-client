import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import useLabBook from "../../../../hooks/useLabBook";

const columns = [
  { id: "name", label: "Name", align: "center", minWidth: 170 },
  { id: "mobile", label: "Mobile", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "dateTime",
    label: "Date Time",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
  //   {
  //     id: "delete",
  //     label: "Delete",
  //     minWidth: 100,
  //     align: "center",
  //   },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

export default function ConfirmLab() {
  const [labBook] = useLabBook();
  const rows = labBook;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditClick = (row) => {
    // Implement the logic for editing here.
    console.log("Edit clicked for row:", row);
  };

  const handleDeleteClick = (row) => {
    // Implement the logic for deleting here.
    console.log("Delete clicked for row:", row);
  };

  return (
    <Paper className="mt-10" sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 768 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell className="!z-10 !font-bold !font-Alexandria" key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow className="!z-10 !font-bold !font-Alexandria" hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    if (column.id === "Action") {
                      // Render the Edit button here.
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <div className="flex gap-4">
                            <button type="button" onClick={() => handleEditClick(row)}>
                              Edit
                            </button>
                            <button type="button" onClick={() => handleDeleteClick(row)}>
                              Delete
                            </button>
                          </div>
                        </TableCell>
                      );
                    }

                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} className=" !font-Alexandria">
                        {column.format && typeof value === "number" ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
