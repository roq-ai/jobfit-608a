import { ResumeInterface } from 'interfaces/resume';
import { GetQueryInterface } from 'interfaces';

export interface TemplateInterface {
  id?: string;
  name: string;
  content: string;
  created_at?: any;
  updated_at?: any;
  resume?: ResumeInterface[];

  _count?: {
    resume?: number;
  };
}

export interface TemplateGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
}
