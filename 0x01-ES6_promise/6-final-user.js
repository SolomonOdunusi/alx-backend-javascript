export default function handleProfileSignup(firstName, lastName, fileName) {
	return Promise.all([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName),
	]).then((results) => {
		return results.map((result, index) => ({
			status: index === 0 ? "user created" : "photo uploaded",
			value: result,
		}));
	});
}
