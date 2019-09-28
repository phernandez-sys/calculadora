console.log('server')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Result = require('./models')

const url = "mongodb+srv://pablohz:pablo123@cluster0-fvxln.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url, {}, (error) => {
  if(error){
    console.log(error)
  }else{
    console.log("Base de datos conectada")
  }
} )

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())
/*app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result
		switch (req.params.selectedOperator) {
			case "+":
				result = firstValue + secondValue
				break;
			case "-":
				result = firstValue - secondValue
				break;
			case "*":
				result = firstValue * secondValue
				break;
			case "/":
				result = firstValue / secondValue
				break;
			default:
				break;
		}
		res.send({result})
})*/

app.get('/suma/:firstValue/:secondValue', function (req, res) {

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result = firstValue + secondValue
  const newResult = new Result({ value: result})
  newResult.save((error, result) =>{
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
		res.send({result})
})

app.get('/resta/:firstValue/:secondValue', function (req, res) {

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result = firstValue - secondValue
  const newResult = new Result({ value: result})
  newResult.save((error, result) =>{
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
		res.send({result})
})

app.get('/division/:firstValue/:secondValue', function (req, res) {

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result = firstValue / secondValue
  const newResult = new Result({ value: result})
  newResult.save((error, result) =>{
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
		res.send({result})
})

app.get('/multi/:firstValue/:secondValue', function (req, res) {

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result = firstValue * secondValue
  const newResult = new Result({ value: result})
  newResult.save((error, result) =>{
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
  })
		res.send({result})
})






app.listen(3000, () => {
	console.log('Server corriendo en puerto 3000')
})
