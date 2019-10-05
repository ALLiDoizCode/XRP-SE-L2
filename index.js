const core = require('ilp-settlement-core')

const accountServices = {
    
    sendMessage: async (accountId, message) => {
        //logic
    },
    creditSettlement: (accountId, amount, settlementId) => {
        //logic
    },
    trySettlement: (accountId) => {
        //logic
    }
}

const settlementEngine =  (services) => {
    /*
        services.sendMessage(accountId, message)
        services.creditSettlement(accountId, amount, settlementId)
        services.trySettlement(accountId)
    */
    return {
        setupAccount: async (accountId) => {
            //logic
        },
        settle: async (accountId, amount) => {
            //logic
        },
        handleMessage: async (accountId, message) => {
            //logic
        },
        closeAccount: async (accountId) => {
            //logic
        },
        disconnect: async () => {
            //logic
        }
    }
}

const createEngine = async (services) => {
    // Async tasks to connect engine ...

    // Settlement engine instance ...
    return settlementEngine(services)
}

async function run() {
    const engine = await createEngine(accountServices)
    await core.startServer(createEngine)
}

run().catch(err => console.error(err))


