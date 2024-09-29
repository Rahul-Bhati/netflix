export const authentication = ({ email, password }) => {
    const verifyEmail = /^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/.test(email)
    const verifyPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!verifyEmail) {
        return 'Invalid email'
    }

    if (!verifyPassword) {
        return 'Invalid password'
    }

    return null;
}