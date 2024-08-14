export function isPasswordMinLength(password) {
    // Define a regex pattern for minimum length (e.g., 8 characters)
    const regex = /^.{8,}$/;
    
    // Test if the password matches the regex pattern
    return regex.test(password);
}

export function hasUppercaseLetter(password) {
    // Define a regex pattern for at least one uppercase letter
    const regex = /[A-Z]/;
    
    // Test if the password matches the regex pattern
    return regex.test(password);
}
