const crypto = require('crypto')

// 创建区块
class Block {
  constructor(previousHash, timestamp, data) {
    this.previousHash = previousHash /* 上一个区块的hash */
    this.timestamp = timestamp /* 区块产生时间戳 */
    this.data = data /* 区块链上存储的数据 */
    this.nonce = 5 /* 与区块头的hash值共同证明计算量（工作量） */
    this.hash =
      this.calculateHash() /* 本区块链的hash，由上述几个属性进行哈希计算而得 */
  }

  // 计算区块的哈希值
  calculateHash() {
    return crypto
      .createHash('sha256')
      .update(
        this.previousHash +
          this.timestamp +
          JSON.stringify(this.data) +
          this.nonce
      )
      .digest('hex')
  }

  // 工作量计算
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0') 
    ) {
      this.nonce++
      this.hash = this.calculateHash()
    }
  }
}

// 创建链
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 2
  }

  // 创建当前时间下的区块（创世块）
  createGenesisBlock() {
    return new Block(0, '05/07/2022', 'Genesis block', '0')
  }

  // 获得区块链上最新的区块
  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  // 将新的区块添加到链上
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock)
  }

  // 验证区块链是否被篡改。
  // 遍历每个区块的 hash 值是否正确 && 每个区块的指向 previousHash 是否正确。
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }
    }
    return true
  }
}

module.exports.Block = Block
module.exports.Blockchain = Blockchain