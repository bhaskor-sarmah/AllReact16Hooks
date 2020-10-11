import React from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { GlobalFilter } from "./Filters/GlobalFilter";

const ReactTableWithoutControllPagination = ({ columns, data, loading }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    // Get the state from the instance ,
    // globalFilter column.getSortByToggleProps()
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // Listen for changes in pagination and use the state to fetch our new data

  // React.useEffect(() => {
  // After the table has updated, always remove the flag
  //   skipPageResetRef.current = false;
  // });

  //    Login for pagination
  //   const [start, setStart] = React.useState(pageIndex - 5);
  //   const [stop, setStop] = React.useState(pageIndex + 5);
  //   let step = 1;

  //   React.useEffect(() => {
  //     let done = false;
  //     if (!done) {
  //       setStart(pageIndex - 5);
  //       setStop(pageIndex + 4);
  //     }
  //     console.log(start, "-", stop, "-", pageOptions.length);
  //   }, [pageOptions, loading]);

  let start = pageIndex - 5;
  let stop = pageIndex + 4;
  let step = 1;

  if (start < 0) {
    start = 0;
    stop = 9;
  }

  if (stop >= pageOptions.length) {
    stop = pageOptions.length - 1;
    start = pageOptions.length - 10;
  }

  if (pageOptions.length < 10) {
    start = 0;
    stop = pageOptions.length - 1;
    if (stop < 0) {
      stop = 0;
    }
  }

  return (
    <>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      {!loading && (
        <>
          <div className='pagination'>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            {Array.from(
              { length: (stop - start) / step + 1 },
              (_, key) => start + key * step
            ).map((k) => {
              return pageIndex == k ? (
                <button
                  onClick={() => gotoPage(k)}
                  style={{ backgroundColor: "lightgray" }}
                  key={k}
                >
                  {k + 1}
                </button>
              ) : (
                <button onClick={() => gotoPage(k)} key={k}>
                  {k + 1}
                </button>
              );
            })}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              | Go to page:{" "}
              <input
                type='number'
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>{" "}
            <label>
              {" "}
              Show{" "}
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>{" "}
              Rows
            </label>
          </div>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </>
      )}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " \u25B2"
                        : " \u25BC"
                      : " \u21C5"}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td colSpan='10000'>Loading...</td>
            ) : (
              <td colSpan='10000'>
                <span>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ReactTableWithoutControllPagination;
