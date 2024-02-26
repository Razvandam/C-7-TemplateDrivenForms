import { FullName } from './full-name';
import { Gender } from './gender.enum';

export interface Registration {
  id: string;
  fullName: FullName;
  email: string;
  gender: Gender;
  country: string;
}
// registration.ts