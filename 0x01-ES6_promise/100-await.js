import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error(error); // Log the error for debugging
    return {
      photo: null,
      user: null,
    };
  }
}
