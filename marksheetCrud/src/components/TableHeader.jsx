import React from "react";

const TableHeader = () => {
  return (
    <thead className="table-dark">
      <tr>
        <th>#</th>
        <th>Student Name</th>
        <th>Roll No</th>
        <th>Math</th>
        <th>Science</th>
        <th>S.sc</th>
        <th>English</th>
        <th>Hindi</th>
        <th>Total</th>
        <th>Percentage</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
