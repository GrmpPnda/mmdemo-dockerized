db.createUser(
        {
            user: "admin",
            pwd: "Mong0DB12345!!",
            roles: [
                {
                    role: "dbOwner",
                    db: "Demo"
                }
            ]
        }
);