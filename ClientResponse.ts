/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {LoginMethodResponse} from "./LoginMethodResponse";

/**
 * request for query list of holiday
 */
export interface ClientResponse {
  /**
   * id
   */
  id: number;
  /**
   * user id that client belong to
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
   * description of client for which purpose of this client
   */
  description: string;
  /**
   * status of client. active or not. unsed yet
   */
  status: number;
  /**
   * domain of client
   */
  domain: string;
  /**
   * login methods available for client
   */
  loginMethods?: LoginMethodResponse[];
  [k: string]: any;
}
