import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  injury: sample([
    'Torn ACL',
    'Broken Ankle',
    'Sprained AC Joint',
    'Broken Neck',
    'Sprained Ankle'
  ]),
  birthdate: faker.date.birthdate(),
  phone: faker.phone.number('(###) ###-####'),
  status: sample(['active', 'released']),
  name: faker.person.fullName(),
  // company: faker.company.name(),
  // isVerified: faker.datatype.boolean(),
  // status: sample(['active', 'banned']),
  // role: sample([
  //   'Leader',
  //   'Hr Manager',
  //   'UI Designer',
  //   'UX Designer',
  //   'UI/UX Designer',
  //   'Project Manager',
  //   'Backend Developer',
  //   'Full Stack Designer',
  //   'Front End Developer',
  //   'Full Stack Developer',
  // ]),
}));
