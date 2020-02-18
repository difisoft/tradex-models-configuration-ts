/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {ScopeResponse} from "./ScopeResponse";

/**
 * request for query list of holiday
 */
export type PostAdminScopeResponse = ScopeResponse;
/**
 * base request for all other
 */
export type ForwardData = ForwardConnection | ForwardService;
/**
 * base request for all other
 */
export type ForwardConnection = ForwardCommon & {
  type?: "SERVICE_STRING_MAPPING" | "SERVICE_FUNCTION_MAPPING";
  uri_mapping?: {
    [k: string]: any;
  };
  [k: string]: any;
};
/**
 * base request for all other
 */
export type ForwardService = ForwardCommon & {
  service?: string;
  uri?: string;
  [k: string]: any;
};
