import React from "react";
import { TableStyles } from "./TableStyles";
import ReactTableWithoutControllPagination from "./ReactTableWithoutControllPagination";

const ReactTableEg2 = () => {
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

  React.useEffect(() => {
    // Set the loading state
    setLoading(true);
    fetch(`https://api.instantwebtools.net/v1/passenger?page=0&size=1000`)
      .then((res) => res.json())
      .then((json) => {
        // skipPageResetRef.current = true;
        setData(json.data);
        // No of pages
        setLoading(false);
      });
  }, []);

  return (
    <TableStyles>
      <ReactTableWithoutControllPagination
        columns={columns}
        data={data}
        loading={loading}
      />
    </TableStyles>
  );
};

export default ReactTableEg2;
