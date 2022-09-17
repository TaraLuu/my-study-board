// @desc Get goals
// @route GET /api/goals
const getGoals = async (req, res) => {
    res.status(200).json({message: 'Get goal'})
}

//@desc Set goals
//@route SET /api/goals
const setGoals = async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Set goal'})
}

//@desc Put goals
//@route PUT /api/goals
const updateGoals= async (req, res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
}

//@desc Delete goals
//@route DELETE /api/goals
const deleteGoals = async (req, res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})

}

module.exports = {  getGoals, setGoals, updateGoals, deleteGoals }