/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "tradex-models-common";

/**
 * request for query list of holiday
 */
export type PutLoginMethodRequest = BaseRequest & {
  /**
   * id
   */
  id?: number;
  /**
   * serviceCode
   */
  serviceCode?: string;
  /**
   * grantType
   */
  grantType?: string;
  /**
   * msName
   */
  msName?: string;
  /**
   * isDefault
   */
  isDefault?: boolean;
  /**
   * msUri
   */
  msUri?: string;
  /**
   * scopeGroupIds
   */
  scopeGroupIds?: number[];
  [k: string]: any;
};
