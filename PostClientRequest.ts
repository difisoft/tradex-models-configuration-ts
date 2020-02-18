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
export type PostClientRequest = BaseRequest & {
  /**
   * userId
   */
  userId: number;
  /**
   * clientId
   */
  clientId: string;
  /**
   * clientSecret
   */
  clientSecret: string;
  /**
   * description
   */
  description: string;
  /**
   * domain
   */
  domain: string;
  /**
   * list of login methods
   */
  loginMethodIds?: string[];
  [k: string]: any;
};
