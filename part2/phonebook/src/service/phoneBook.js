import axios from 'axios'
import { useState } from 'react'

const baseUrl = "http://localhost:3001/persons"

const addPerson = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const getPhoneBook = (newObject) => {
    return axios.get(baseUrl, newObject)
}


const getId = (name) => {
    console.log("http://localhost:3001/persons/?name="+name+"")
    return axios.get("http://localhost:3001/persons/?name="+name+"")
}

export default {
    addPerson: addPerson,
    getPhoneBook: getPhoneBook,
    getId: getId
}