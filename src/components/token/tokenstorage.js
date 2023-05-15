import React from "react"

let AccessToken = "";
let RefreshToken = "";

function getAccessToken() {
    return(
        AccessToken
    )
}
function setAccessToken(string) {
    AccessToken = string
    console.log(AccessToken)
}
function getRefreshToken() {
    return(
        RefreshToken
    )
}
function setRefreshToken(string) {
    RefreshToken = string
    console.log(RefreshToken)
}

export {getAccessToken, setAccessToken, getRefreshToken, setRefreshToken};