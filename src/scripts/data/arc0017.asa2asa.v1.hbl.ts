const asa2asaV1 = `#pragma version 5

bytecblock 0xA0B001 {{seller}}
intcblock {{price}} {{multiplier}} {{assetSell}} {{assetBuy}} 0 1 2 3 4 5 10000

// no rekeying is allowed for anybody
gtxn 0 RekeyTo
global ZeroAddress
==
assert

global GroupSize
intc 5 // 1
==
bnz mainflow

gtxn 1 RekeyTo
global ZeroAddress
==
assert


global GroupSize
intc 6 //2
==
bnz mainflow


gtxn 2 RekeyTo
global ZeroAddress
==
assert

global GroupSize
intc 7 //3
==
bnz mainflow
gtxn 3 RekeyTo
global ZeroAddress
==
assert

global GroupSize
intc 8 //4
==
bnz mainflow

gtxn 4 RekeyTo
global ZeroAddress
==
assert

global GroupSize
intc 9 //5
==
bnz mainflow
err

mainflow:


// if sender is {{seller}}
// A) new deposit with asa1 opt in and asa2 opt in - we need to find this escrow account to show on the market
//    also requires a min algo balance - 0.1 for algo 0.1 for asa1, 0.1 for asa2 = 0.3 algo .. sender of algos may be third account
// B) more deposit - does not requires signature from escrow

// if sender is not {{seller}}
// reject

// if taker is {{seller}}
// A) lower order balance
// B) close order AssetCloseTo CloseRemainderTo to {{seller}}

// if taker (newOwner) is not {{seller}}
// A) partial order hit
//    1) send asa 2 from (newOwner) to {{seller}}
//    2) send asa from escrow to (newOwner)
// B) closout
//    1) send asa 2 from (newOwner) to {{seller}}
//    2) send asa from escrow to (newOwner)

// check senderA
// 1. send min balance
// 2. opt in asset 1
// 3. opt in asset 2
// 4. send asa1 to escrow



// taker is {{seller}}
// owner of the escrow account can do whatever he please with the assets stored there (except rekey checked above)
// first transaction is validating private key of seller - self signed

//gtxn 0 Receiver not checked on purpose// sender is verified by sending tx, he can send it to anyone.. to escrow, itself, or to other account
//global GroupSize not checked on purpose // to trash.. we not require to check the size when sender is owner.. he has full rights

// taker is {{seller}}
// owner of the escrow account can do whatever he please with the assets stored there (except rekey checked above)
// first transaction is validating private key of seller - self signed

gtxn 0 Sender
bytec_1 // {{seller}}
==
bnz Ok // taker is {{seller}}


// if taker (newOwner) is not {{seller}}
// A) partial order hit
//    1) send asa from escrow to (newOwner)
//    2) send asa 2 from (newOwner) to {{seller}}
// B) closout
//    1) send asa from escrow to (newOwner)
//    2) send asa 2 from (newOwner) to {{seller}}

global GroupSize
int 2
==
assert

// protect escrow owner so that he is not paid too less
// protect escrow executer so that he does not pay too much
// example sell 100000,000000 VoteCoin for 100,000000 USDC
// real price = 0,001 USDC/VoteCoin
// intc 1 = 1
// intc 2 = 1000

gtxn 0 AssetAmount // 50000,000000   //
intc 0 // {{price}} // 1
mulw   // 50000,000000 .. returns two ints to stack high and low
store 2 // 50000,000000
store 1
gtxn 1 AssetAmount // 50,000000
intc 1  // {{multiplier}} // 1000
mulw    // 50000,000000
store 4 // 50000,000000
store 3
load 1
load 3
==
assert
load 2
load 4
==
assert

gtxn 0 XferAsset
intc 2 // asa 1 from escrow to buyer
==
assert

gtxn 1 XferAsset
intc 3 // asa 2 from buyer to {{seller}}
==
assert

gtxn 1 AssetReceiver
bytec_1 // receiver is {{seller}}
==
assert

gtxn 0 AssetReceiver // check if buyer paid from his account
gtxn 1 Sender
==
assert

gtxn 0 TypeEnum
intc 8 // 4 // 4	axfer	AssetTransfer
==
assert

gtxn 0 Fee
intc 4 // 0
==
assert

gtxn 1 TypeEnum
intc 8 // 4 // 4	axfer	AssetTransfer
==
assert

gtxn 0 CloseRemainderTo
global ZeroAddress
==
assert

gtxn 0 AssetCloseTo
global ZeroAddress
==
assert

gtxn 1 CloseRemainderTo
global ZeroAddress
==
assert

gtxn 1 AssetCloseTo
global ZeroAddress
==
assert

gtxn 1 Fee
intc 10 // 10000
<=
bnz Ok


Fail:
err

Ok:
int 1
return`;
export default asa2asaV1;
