import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  user_id: string;
  job_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_id?: string;
  status?: string;
}
