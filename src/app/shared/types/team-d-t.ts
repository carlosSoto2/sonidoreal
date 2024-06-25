export interface ITeamDT {
  id: number;
  img: string;
  name: string;
  title: string;
  mail?: string;
  social_links: {
      link: string;
      icon: string;
      name: string;
  }[];
  page: string;
  sm_desc?: string;
  phone?: string;
}
