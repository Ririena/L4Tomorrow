import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  User,
  Avatar,
} from "@nextui-org/react";

export default function LeaderBoard() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Table
          className="max-w-[650px]"
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
                <TableCell className="flex">
                  <User src="/violetP.jpg" />
                  Tony Reichert
                </TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
