let feedback = []
let globalId = 0
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "A dubious friend may be an enemy in camouflage.",
            "A faithful friend is a strong defense.",
            "A feather in the hand is better than a bird in the air.",
            "A fresh start will put you on your way.",
            "A friend asks only for your time not your money.",
            "A friend is a present you give yourself."
        ]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    addFeedback: (req, res) => {
        let {rating, comment} = req.body
        let individualFeedback = {
            id: globalId,
            rating: +rating,
            comment: comment
        }
        feedback.push(individualFeedback)
        res.status(200).send(feedback)
        globalId++
    },
    changeComment: (req, res) => {
        let {id} = req.params
        let changedComment = req.body.comment
        let indexOfComment = feedback.findIndex(el => +el.id === +id)
        if (indexOfComment === -1){
            res.status(400).send("Not a valid id")
        } else{
            feedback[indexOfComment].comment = changedComment
            res.status(200).send(feedback)
        }
    },
    getFeedback: (req, res) => {
        res.status(200).send(feedback)
    },
    deleteComment: (req,res) => {
        let {id} = req.params
        let indexOfComment = feedback.findIndex(el => +el.id === +id)
        if (indexOfComment === -1){
            res.status(400).send("Not a valid id")
        } else{
            feedback.splice(indexOfComment, 1)
            res.status(200).send(feedback)
        }
    }


}