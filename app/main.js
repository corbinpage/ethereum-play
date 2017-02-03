import {
  default as Web3
} from 'web3'
import {
  default as contract
} from 'truffle-contract'
import MetaCoinContract from '../build/contracts/MetaCoin.json'

const TESTRPC_HOST = 'localhost'
const TESTRPC_PORT = '8545'

function component() {
  var element = document.createElement('div')
  var element2 = document.createElement('div')
  var element3 = document.createElement('div')
  var inst
  let provider = new Web3.providers.HttpProvider(`http://${TESTRPC_HOST}:${TESTRPC_PORT}`)
  let meta = contract(MetaCoinContract)
  meta.setProvider(provider)
  meta.deployed()
    .then((instance) => {
      element.innerHTML = `Metacoin address: ${instance.address}`
      inst = instance
      return instance.getBalance.call(instance.address)
    }).then((bal) => {
      element2.innerHTML = `Metacoin balance: ${bal.toNumber()}`
      element.appendChild(element2)
      return inst.getHolidays.call()
    }).then((holidays) => {
      element3.innerHTML = `Metacoin holidays: ${holidays.toString()}`
      element2.appendChild(element3)
    })
  return element
}


document.body.appendChild(component())
