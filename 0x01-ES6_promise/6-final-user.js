import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((result, index) => {
    if (result.status === 'fulfilled') {
      return {
        status: index === 0 ? 'fulfilled' : 'fulfilled',
        value: result.value,
      };
    }
    return {
      status: 'rejected',
      value: `Error: ${result.reason.message}`,
    };
  }));
}
