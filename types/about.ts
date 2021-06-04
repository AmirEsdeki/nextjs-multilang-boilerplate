import { BaseEntity } from "./base/base";

export namespace About {
  export interface GetFilters extends BaseEntity.BaseFilters {}
  export interface Get extends BaseEntity.BaseGet {}
  export interface Post extends BaseEntity.BasePost {}
  export interface Put extends Post, BaseEntity.BasePut {}
}
