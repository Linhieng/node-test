const { Blockchain, Block } = require('./block-chain')

// 使用
let firstChain = new Blockchain()
firstChain.addBlock(new Block(0, '21/05/2022', { champion: 'Spain' }))
firstChain.addBlock(new Block(1, '22/05/2022', { champion: 'China' }))

// 检查是否有效(将会返回true)
console.log('firstChain valid? ' + firstChain.isChainValid(), firstChain.chain)

// 现在尝试操作变更数据
firstChain.chain[1].data = { champion: 'korea' }

// 再次检查是否有效 (将会返回false)
console.log('firstChain valid? ' + firstChain.isChainValid(), firstChain.chain)
