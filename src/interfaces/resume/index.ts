import { UserInterface } from 'interfaces/user';
import { TemplateInterface } from 'interfaces/template';
import { GetQueryInterface } from 'interfaces';

export interface ResumeInterface {
  id?: string;
  user_id: string;
  template_id: string;
  content: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  template?: TemplateInterface;
  _count?: {};
}

export interface ResumeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  template_id?: string;
  content?: string;
}
