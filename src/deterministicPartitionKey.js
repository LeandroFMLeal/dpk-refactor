import crypto from 'crypto'

const TRIVIAL_PARTITION_KEY = 0;
const MAX_PARTITION_KEY_LENGTH = 256;

function createHash(candidate) {
  if (!candidate || candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex")
  }
  return candidate
}

function stringfyIt(candidate) {
  if (typeof candidate !== "string") {
    return JSON.stringify(candidate);
  }
  return candidate
}

export function deterministicPartitionKey(event) {
  if (!event) return TRIVIAL_PARTITION_KEY;

  const candidate = event?.partitionKey || event

  return createHash(stringfyIt(candidate))
};


