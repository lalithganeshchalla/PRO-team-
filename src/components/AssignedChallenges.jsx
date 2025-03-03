import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Chip, Card } from "@mui/material";

const challenges = [
  { name: "UI Design Review", status: "In Process", due: "23 Mar, 2025", priority: "High" },
  { name: "Code Assignments", status: "Pending", due: "12 Mar, 2025", priority: "Medium" },
  { name: "System Architecture", status: "Complete", due: "11 Apr, 2025", priority: "Complete" },
  { name: "API Integration", status: "In Process", due: "23 Jul, 2025", priority: "High" },
];

const getChipColor = (status) => {
  if (status === "In Process") return "primary";
  if (status === "Pending") return "warning";
  if (status === "Complete") return "success";
};

const AssignedChallenges = () => {
  return (
    <Card sx={{ padding: 2, marginTop: 2,width: 810 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Challenge</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {challenges.map((challenge, index) => (
            <TableRow key={index}>
              <TableCell>{challenge.name}</TableCell>
              <TableCell>
                <Chip label={challenge.status} color={getChipColor(challenge.status)} />
              </TableCell>
              <TableCell>{challenge.due}</TableCell>
              <TableCell>
                <Chip label={challenge.priority} color={challenge.priority === "High" ? "error" : "success"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default AssignedChallenges;
