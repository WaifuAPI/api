import crypto from 'crypto';

// Function to generate a random hexadecimal string
function generateRandomHex(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Function to convert a timestamp to epoch and encode it to base64
function encodeTimestampToBase64(timestamp) {
  const epoch = Math.floor(timestamp / 1000); // Convert to seconds (Discord uses seconds for epoch)
  return Buffer.from(epoch.toString()).toString('base64');
}

// Function to generate a random signature between 10 to 28 characters
function generateRandomSignature(minLength, maxLength) {
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  return generateRandomHex(length).replace(/M/g, 'N').replace(/=/g, '-');
}

// Function to generate a Discord-style token (64 characters)
function generateDiscordToken(userID, secretKey) {
  const userIDBase64 = Buffer.from(userID).toString('base64').replace(/=/g, '-');
  const timestamp = Date.now();
  const timestampBase64 = encodeTimestampToBase64(timestamp).replace(/=/g, '-');
  const payload = `${userIDBase64}.${timestampBase64}`;

  // Generate HMAC for the payload using the secretKey
  const hmac = crypto
    .createHmac('sha256', secretKey)
    .update(payload)
    .digest('hex')
    .slice(0, 5);
  const signature = generateRandomSignature(4, 7);

  // Combine payload and signature to form a 64-character token
  const token = `${payload}.${hmac}${signature}`;

  return token;
}

export default function generateToken(id, key) {
  return generateDiscordToken(id, key);
}
