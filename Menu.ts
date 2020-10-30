/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * request for query list of holiday
 */
export interface Menu {
  /**
   * id of key
   */
  id: number;
  /**
   * menu title
   */
  title: string;
  /**
   * order position
   */
  order?: number;
  /**
   * icon image
   */
  icon: string;
  /**
   * id of parent menu
   */
  parent?: number;
  /**
   * if this menu is the smallest room
   */
  isLeaf?: boolean;
  /**
   * link of menu
   */
  href?: string;
  /**
   * code of menu
   */
  screenCode?: string;
  [k: string]: any;
}
