module.exports = {

    sqlConnectionString: "<connection-string-for-your-sql-database-goes-here>", // Insert your connection string here.
    mongoConnectionString: "mongodb://maxis-admin:Nopass%401234@m148.maxismongo.com:27017/?authSource=admin&replicaSet=rs0&readPreference=primary&ssl=true", // This puts the resulting database in MongoDB running on your local PC.
    targetDatabaseName: "test_velocity_0_3_0_1_test_20201220", // Specify the MongoDB database where the data will end up.
    skip: [
        "processLog",
        "userTerritory",
        "userTerritoryBackup",
        "RoleMenu",
        "snapTable_dump",
        "snapTable_report",
        "SocialData",
        "PartnerContainerTypes",
        "Numbers"
    ],

    remapKeys: false // Set this to false if you want to leave table keys as they are, set to true to remap them to MongoDB ObjectId's.
};