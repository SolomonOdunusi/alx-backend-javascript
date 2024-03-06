import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  try {
    Promise.all([photoPromise, userPromise])
      .then(([photoData, userData]) => {
        console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
      })
      .catch(() => {
        console.log('Signup system offline');
      });
  } catch (error) {
    console.error('Error handling profile signup:', error);
  }
}
