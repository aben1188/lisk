"use strict";

// Requires and node configuration
var node = require("./../variables.js");

describe("GET /loader/status/ping", function () {

    it("Should be ok", function (done) {
        node.api.get("/loader/status/ping")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                // console.log(JSON.stringify(res.body));
                node.expect(res.body).to.have.property("success").to.be.true;
                done();
            });
    });
});
