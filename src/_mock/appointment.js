import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const appointments = [...Array(15)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  age: faker.datatype.number({ min: 14, max: 99 }),
  gender: sample(['Male', 'Female']),
  time: sample([
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM'
  ]),
  reason: sample([
    'Consultation',
    'Post Surgery Evaluation',
    'General',
    'Progress Evaluation'
  ]),
    // company: faker.company.name(),
}));
