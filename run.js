const env = hre.ethers; 

let formatAddress = (addr) => {
    let address = addr.toString().toUpperCase();
    let res = `${address.slice(0, 6)}..${addr.slice(-4)}`;
    return res;
}

const main = async () => {
    const signers = await env.getSigners(); 
    const accounts = [];

    const waveContractFactory = await env.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    
    console.log(`🎷 Contract Deployed to :  ${formatAddress(signers[0].address)} 🍺 `);
    console.log(`🎷 Contract Deployed by :  ${formatAddress(signers[9].address)} 🍺 `);
    
    let tweetTx;
    tweetTx = await waveContract.tweet("Im a smart tweet ");
    await tweetTx.wait();

    let textMsg = await waveContract.getTweet();
    console.log(`works ? ${textMsg}`);

    let waveCount
    let waveTx = await waveContract.wave();
    waveCount = await waveContract.getTotalWaves();
    await waveTx.wait();

   //we simulate waves
    for (let i = 1; i <= 9 ; i++ ){
        if (i <= 5){
            waveTxn = await waveContract.connect(signers[2]).wave();
        } else { waveTxn = await waveContract.connect(signers[9]).wave() }

        await waveTx.wait();
    }

    waveCount = await waveContract.getTotalWaves();

    let newSigner = await waveContract.connect(signers[2]);
    let countWaves = await newSigner.getTotalWavesByBros();
    countWaves = countWaves.toString();

    let timeStamp = await newSigner.getDate();
    timeStamp = Number(timeStamp.toString()) * 1000;
    
    let date = new Date(timeStamp);
    let days = date.toLocaleDateString("en-US");
    let time = date.toLocaleTimeString("en-US").slice(0, -2);

    console.log(`${formatAddress(signers[2].address)} has ${countWaves} waves`);
    console.log(`da: ${days} time: ${time}`);
};

const runnerAsyncMain = async() => {
    try{
        await main();
        process.exit(0);
    }catch(error){
        console.log("ERROR: ", error);
        process.exit(1);
    }
};

runnerAsyncMain();