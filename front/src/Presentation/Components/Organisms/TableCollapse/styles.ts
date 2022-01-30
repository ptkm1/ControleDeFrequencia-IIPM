import {
  TableRow as TableRowMUI,
  Table as TableMUI,
  TableBody as TableBodyMUI,
} from "@material-ui/core";
import styled from "styled-components";

export const TableRow = styled(TableRowMUI)`
:hover {
  background: #f0efef;
  cursor: pointer;
}`;

export const TableAll = styled(TableMUI)`
`;

export const TableBody = styled(TableBodyMUI)``;

export const CollapseRow = styled(TableRowMUI)`
  width: 90vw;
  height: max-content;
  /* position: absolute; */
  tr {
    background: #e8e8e8;
  }
`