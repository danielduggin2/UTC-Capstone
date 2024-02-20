import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
"Dynamic Stretching Routine for Limber Limbs",
"Arm and Shoulder Mobility Exercises for Flexibility",
"Leg Swings: Enhancing Lower Body Flexibility",
"Upper Body Twists: Torso and Arm Mobility",
"Lunge Variations for Lower Body Strength and Flexibility",
"Calf Raises: Strengthening and Stretching the Lower Legs",
"Wrist Circles: Improving Hand and Wrist Mobility",
"Ankle Rolls: Mobility Exercises for Foot and Ankle Joints",
"Side Leg Raises: Strengthening and Stretching the Hips",
"Arm Circles: Dynamic Warm-up for Shoulder Mobility"
];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.number.int(15000),
  comment: faker.number.int(1500),
  share: faker.number.int(300),
  favorite: faker.number.int(6000),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
