import React from "react";
import { TableStyles } from "./TableStyles";
import TableControlledPagination from "./TableControlledPagination";

const ReactTableEg = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "TRIPS",
        accessor: "trips",
      },
      {
        Header: "COUNTRY",
        accessor: "airline.country",
      },
      {
        Header: "HEAD QUATERS",
        accessor: "airline.head_quaters",
      },
      {
        Header: "ESTABLISHED",
        accessor: "airline.established",
      },
    ],
    []
  );
  // We'll start our table without any data
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current;

    // Set the loading state
    setLoading(true);

    fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${pageIndex}&size=${pageSize}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (fetchId === fetchIdRef.current) {
          // skipPageResetRef.current = true;
          setData(json.data);
          setPageCount(Math.ceil(json.totalPassengers / pageSize));
          // No of pages
          setLoading(false);
        }
      });
  }, []);

  return (
    <TableStyles>
      <TableControlledPagination
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      />
    </TableStyles>
  );
};

export default ReactTableEg;
