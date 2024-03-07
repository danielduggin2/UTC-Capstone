import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
    "Squats",
    "Lunges",
    "Plank",
    "Burpees",
    "Pull-ups",
    "Jumping Jacks",
    "Mountain Climbers",
    "Deadlifts",
    "Bench Press",
    "Russian Twists",
    "Tricep Dips",
    "Leg Raises",
    "Bicep Curls",
    "Shoulder Press",
    "Calf Raises",
    "Jump Squats",
    "High Knees",
];

// Define an array of video URLs
const videoUrls = [
  "https://www.youtube.com/watch?v=aclHkVaku9U",
  "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
  "https://www.youtube.com/watch?v=ynUw0YsrmSg",
  "https://www.youtube.com/watch?v=dZgVxmf6jkA",
  "https://www.youtube.com/watch?v=X3cNM52QbQI",
  "https://www.youtube.com/watch?v=iSSAk4XCsRA",
  "https://www.youtube.com/watch?v=cnyTQDSE884",
  "https://www.youtube.com/watch?v=IiGk8g3e41w",
  "https://www.youtube.com/watch?v=676GkswmHRY",
  "https://www.youtube.com/watch?v=j6y881X_--U",
  "https://www.youtube.com/watch?v=zWuigRKvb-0",
  "https://www.youtube.com/watch?v=l4kQd9eWclE",
  "https://www.youtube.com/watch?v=T9J0FMLIp8A",
  "https://www.youtube.com/watch?v=kGooAJM3294",
  "https://www.youtube.com/watch?v=pkqa08atdgM",
  "https://www.youtube.com/watch?v=QQWsscOgGkU",
  "https://www.youtube.com/watch?v=oDdkytliOqE"

];

export const posts = [...Array(16)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.number.int(1000),
  comment: faker.number.int(1000),
  share: faker.number.int(1000),
  favorite: faker.number.int(1000),
  videoUrl: videoUrls[index + 1]
}));
