export interface SharedTableColumn {
  columnDef: string;
  header: string;
  cell: Function;
  isLink?: boolean;
  link_url?: string;
  isImage?: boolean;
  image_url?: string;
  isAction?: boolean;
  actions?: {
    auditTrial?: { track: any; route: string }; // track is a property specific to item describing it unique identification key
    edit?: boolean;
    deactivate?: boolean;
    cancel?: boolean;
  };
}
