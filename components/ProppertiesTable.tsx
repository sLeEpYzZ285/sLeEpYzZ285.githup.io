import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const properties = {
  display: "23.8 นิ้ว",
  panelType: "IPS",
  maximumResolution: "1920×1080",
  brightness: "250 cd/m2",
  contrastRatio: "3,000 : 1",
  responseTime: "1 ms",
  refreshRate: "100 Hz",
  aspectRatio: "16:9",
  hdmi: "1 Port",
  dsubVGA: "1 Port",
  dimension: "(W x D x H) : 53.88 x 41.1 x 19.2 cm",
  weight: "3.8 kg",
  warranty: "3 Years",
};

export default function PropertiesTable() {
  return (
    <Table color="primary" shadow="none" isHeaderSticky isStriped aria-label="Product Properties Table">
      <TableHeader >
        <TableColumn>PROPERTY</TableColumn>
        <TableColumn>VALUE</TableColumn>
      </TableHeader>
      <TableBody>
        {Object.entries(properties).map(([key, value], index) => (
          <TableRow key={index}>
            <TableCell>{key}</TableCell>
            <TableCell>{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
