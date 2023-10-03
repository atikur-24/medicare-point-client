import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import * as React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAdminLabBooking } from "../../../../Features/AllLabTests/adminLabBooking";
import ConfirmDetailModal from "./ConfirmDetailModal";

const columns = [
  { id: "name", label: "Name", align: "center", minWidth: 170 },
  { id: "mobile", label: "Mobile", align: "center", minWidth: 100 },
  { id: "test_name", label: "Test Name", align: "center", minWidth: 100 },
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
];

export default function ConfirmLab() {
  let [isOpen, setIsOpen] = React.useState(false);
  let [data, setData] = React.useState({});
  let [click, setClick] = React.useState(0);

  const { allLabBooking, isLoading } = useSelector((state) => state.adminLabBooking);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAdminLabBooking());
  }, [dispatch, click]);

  const rows = allLabBooking;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const toggleOpen = React.useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleDeleteClick = (row) => {
    const id = row?._id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/deleteLabTest/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            Swal.fire("Deleted!", "Lab test deleted successfully.", "success");
            setClick(click + 1);
          }
        });
      }
    });
  };
  const handleModalClick = (row) => {
    setData(row);
    toggleOpen();
  };

  const totalSuccess = allLabBooking.filter((labBook) => labBook?.status === "success");
  const totalPending = allLabBooking.filter((labBook) => labBook?.status === "pending");

  return (
    <div className="pb-6">
      <div className="mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Total Lab Booking</div>
            <div className="stat-value">{allLabBooking?.length || 0}</div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Success</div>
            <div className="stat-value text-my-primary">{totalSuccess?.length || 0}</div>
          </div>

          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Pending</div>
            <div className="stat-value text-yellow-500">{totalPending?.length || 0}</div>
          </div>
        </div>
      </div>
      <Paper className="mt-10" sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 768 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell className="!z-10 !font-bold !font-Alexandria !bg-primary !bg-opacity-90 !text-white" key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow className="!z-10 !font-bold !font-Alexandria " hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      if (column.id === "Action") {
                        // Render the Edit button here.
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div className="flex gap-4 justify-center">
                              <button type="button" className="relative group" onClick={() => handleModalClick(row)}>
                                <TbListDetails className="text-3xl p-1 rounded-full text-[white] bg-my-primary" />
                                <span className="absolute hidden group-hover:block whitespace-nowrap ">Detail</span>
                              </button>

                              <button type="button" onClick={() => handleDeleteClick(row)} className=" bg-red-500 rounded-full bg-opacity-30 ">
                                <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
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
        <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      </Paper>
      <ConfirmDetailModal click={click} setClick={setClick} data={data} isOpen={isOpen} toggleOpen={toggleOpen} setData={setData} />
    </div>
  );
}
