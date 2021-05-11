import { IGitlab } from './IGitlab';
import { IManagement } from './IManagement';
import { IValueStream } from './IValueStream';
import { IVendor } from './IVendor';

export interface IData {
  gitlab: IGitlab;
  management: IManagement;
  'value-streams': IValueStream[];
  vendors: IVendor[];
}
