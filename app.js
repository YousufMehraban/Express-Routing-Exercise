const express = require('express')

const {mean, median, mode} = require('./helper')
const MyError = require('./error')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/mean', (req, res) => {
    if (!req.query.nums) throw new MyError('Please add numbers like "nums=1,2,3,..." as qurey string', 400)

    stringNums = req.query.nums.split(',')
    nums = []
    for (let n of stringNums){
        if (isNaN(n)) {
            throw new MyError('nums must be integers!', 400)
        }
        nums.push(parseInt(n))
    }
    meanOfNums = mean(nums)
    return res.json(`<h1> Mean of "${nums}" is ${meanOfNums} </h1>`)
})


app.get('/median', (req, res)=>{
    if (!req.query.nums) throw new MyError('Please add numbers like "nums=1,2,3,..." as qurey string', 400)

    stringNums = req.query.nums.split(',')
    nums = []
    for (let n of stringNums){
        if (isNaN(n)) {
            throw new MyError('nums must be integers!', 400)
        }
        nums.push(parseInt(n))
    }
    medianOfNums = median(nums)
    return res.send(`<h1> Median of "${nums}" is ${medianOfNums} </h1>`)
})

app.get('/mode', (req, res)=> {

    if (!req.query.nums) throw new MyError('Please add numbers like "nums=1,2,3,..." as qurey string', 400)

    stringNums = req.query.nums.split(',')
    nums = []
    for (let n of stringNums){
        if (isNaN(n)) {
            throw new MyError('nums must be integers!', 400)
        }
        nums.push(parseInt(n))
    }
    modeOfNums = mode(nums)
    return res.send(`<h1> Mode of "${nums}" is ${modeOfNums} </h1>`)
})


app.listen(3000, ()=> {
    console.log('App running on port 3000')
})

