export interface TreeItemData {
    name?: string;
    icon?: string;
    id: string;
    sum?: number;
    children?: TreeItemData[];
    AFold?: boolean;
    handle?: boolean;
  }

export interface TreeItemMenu {
    name:string;
    icon: string;
    id:string;
    children?: TreeItemMenu[];
    disabled?: boolean;
}