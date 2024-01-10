import crypto from 'crypto';

/**
 * Generates a Waifu.it-style token for user authentication.
 *
 * @function
 * @param {string} id - User ID for generating the token.
 * @param {string} key - Secret key used for token generation.
 *
 * @throws {Error} If there is an error during token generation.
 *
 * @returns {string} The generated Waifu.it-style token.
 */
const generateToken = (id, key) => {
  /**
   * Function to generate a random hexadecimal string.
   * @param {number} length - Length of the hexadecimal string.
   * @returns {string} Random hexadecimal string.
   */
  const generateRandomHex = length => {
    return crypto
      .randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
  };

  /**
   * Function to convert a timestamp to epoch and encode it to base64.
   * @param {number} timestamp - Timestamp to be encoded.
   * @returns {string} Base64-encoded timestamp.
   */
  const encodeTimestampToBase64 = timestamp => {
    const epoch = Math.floor(timestamp / 1000); // Convert to seconds (Waifu.it uses seconds for epoch)
    return Buffer.from(epoch.toString()).toString('base64');
  };

  /**
   * Function to generate a random signature between 10 to 28 characters.
   * @param {number} minLength - Minimum length of the signature.
   * @param {number} maxLength - Maximum length of the signature.
   * @returns {string} Random signature string.
   */
  const generateRandomSignature = (minLength, maxLength) => {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    return generateRandomHex(length).replace(/M/g, 'N').replace(/=/g, '-');
  };

  /**
   * Function to generate a Waifu.it-style token (64 characters).
   * @param {string} userID - User ID to be included in the token.
   * @param {string} secretKey - Secret key used for HMAC generation.
   * @returns {string} Waifu.it-style token.
   */
  const generateAPIToken = (userID, secretKey) => {
    const userIDBase64 = Buffer.from(userID).toString('base64').replace(/=/g, '-');
    const timestamp = Date.now();
    const timestampBase64 = encodeTimestampToBase64(timestamp).replace(/=/g, '-');
    const payload = `${userIDBase64}.${timestampBase64}`;

    // Generate HMAC for the payload using the secretKey
    const hmac = crypto.createHmac('sha256', secretKey).update(payload).digest('hex').slice(0, 5);
    const signature = generateRandomSignature(4, 7);

    // Combine payload and signature to form a 64-character token
    const token = `${payload}.${hmac}${signature}`;

    return token;
  };

  // Return the generated Waifu.it-style token
  return generateAPIToken(id, key);
};

export default generateToken;
