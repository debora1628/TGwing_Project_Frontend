import React from "react";

let AccessToken = "";
let RefreshToken = "";

function getAccessToken() {
    return(
        AccessToken
    )
}

function setAccessToken(string) {
    return(
        AccessToken = string
    )
}

function getRefreshToken() {
    return(
        RefreshToken
    )
}

function setRefreshToken(string) {
    return(
        RefreshToken = string
    )
}

export { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken};