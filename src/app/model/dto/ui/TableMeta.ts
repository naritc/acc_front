import { COLUMN_TYPE } from "../../../shared/constant/TableConst";

export interface TableMeta {
  columns: ColumnMeta[];
  page: PageMeta;
}

export interface ColumnMeta {
  no: number;
  title: string;
  def: string;
  type: COLUMN_TYPE;
}

export interface PageMeta {
  pageIndex: number;
  pageSize: number;
  pageOption?: number[];
}
