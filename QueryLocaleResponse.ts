/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * request for query list of holiday
 */
export type QueryLocaleResponse = {
  /**
   * service name
   */
  msName?: string;
  /**
   * service name
   */
  latestVersion?: string;
  /**
   * service name
   */
  lang?: string;
  /**
   * service name
   */
  files?: {
    namespace?: string;
    url?: string;
    content?: {
      [k: string]: any;
    };
    [k: string]: any;
  }[];
  [k: string]: any;
}[];
