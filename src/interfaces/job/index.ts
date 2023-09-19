import { ApplicationInterface } from 'interfaces/application';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description: string;
  requirements: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  organization?: OrganizationInterface;
  _count?: {
    application?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  requirements?: string;
  organization_id?: string;
}
