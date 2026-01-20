export interface IMenuData {
  id: number;
  hasDropdown?: boolean;
  title: string;
  link: string;
  submenus?: {
    title: string;
    link: string;
  }[];
  megaMenu?: boolean;
  mega_menus?: {
    title: string;
    link: string;
    submenus: {
        title: string;
        link: string;
    }[];
  }[]
  pages?: boolean;
}
