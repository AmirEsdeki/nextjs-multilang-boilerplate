export namespace BaseEntity {
  export interface BaseGet {
    id: string;
  }
  export interface BasePut {
    id: string;
  }
  export interface BasePost {}

  export interface BaseFilters {
    page: number;
    size: number;
    sort: "asc" | "desc";
    sortItem: string;
  }
}
