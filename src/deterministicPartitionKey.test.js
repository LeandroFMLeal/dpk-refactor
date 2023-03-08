import { deterministicPartitionKey } from "./deterministicPartitionKey.js";

const appropriateKey = 'E55F6366FC021CDA997D88F930DC2359E887114754B9F770897A67FEBC4EC096F91B589130C29FA51D4E9B065E5D05A6892B26BE05DABADF5E8E182E0C280036'
const biggerKey = '941951375125B55E4CAFC190DA6A32EE457AAF1C4969CCCEB15D8336183722DB31E00D34968F8B21E1FCAB2BF9FD4D217D05EC1AE16D1075930DD2B35F0449778D36F4EB2F3ED389DAA5C5C8252EE8E076589A85B8C838A6A95CFC658F146F2EB8CEB547A259D8E13E07AAD7FA88F04345406091DBC1B03BD6E0577AD79517E32A86B92190BE1399152CEEE6818331466E07A136C19DEE18AF16142962F2D688AD7E0242F86B2D0B009B4777B609C5CE84B5F551FB7A38046FAE83DAA17C366D'
const objectKey = { test: 123, anotherParam: 'check' }

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(0);
  });

  it("Returns exactly the same provided partitionKey if it is a string and if it is smaller than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: appropriateKey }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toEqual(appropriateKey);
  });

  it("Returns a stringified version of partitionKey if smaller than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: objectKey }
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
  });

  it("Returns a new key if partitionKey is bigger than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: biggerKey }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).not.toEqual(biggerKey);
  });

});
