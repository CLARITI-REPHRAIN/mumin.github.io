// Enable tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Get the rows in the leaderboard, so that we can fill in all the aggregated
// score columns
leaderboard = document.getElementById('leaderboard')
if(leaderboard){
    var rows = leaderboard.getElementsByTagName('tr')
    var tasks = ['claim', 'tweet']
    var sizes = ['small', 'medium', 'large']

    // Loop over all rows
    for (var row_idx=0; row_idx < rows.length; row_idx++){
        var row = rows[row_idx]
        var overallScore = 0

        // Loop over all the tasks
        for (var task_idx=0; task_idx < tasks.length; task_idx++){
            var task = tasks[task_idx]
            var taskScoreMean = 0

            // Loop over all the sizes
            for (var size_idx=0; size_idx < sizes.length; size_idx++){
                var size = sizes[size_idx]
                var element = row.getElementsByClassName(`${task} ${size}`)[0]
                if (element){
                    var totalTaskScore = parseFloat(element.innerHTML)
                    taskScoreMean += totalTaskScore / sizes.length
                }
            }

            // Set the task score in the row
            scoreElement = row.getElementsByClassName(`${task}-score`)[0]
            if (scoreElement){
                taskScoreMean = ('00' + taskScoreMean.toFixed(2)).slice(-5)
                scoreElement.innerHTML = `${taskScoreMean}`
            }

            // Add the task score to the overall score
            overallScore += taskScoreMean / tasks.length
        }

        // Set overall score in the row
        var scoreElement = row.getElementsByClassName('score')[0]
        if (scoreElement){
            overallScore = ('00' + overallScore.toFixed(2)).slice(-5)
            scoreElement.innerHTML = `${overallScore}`
        }
    }
}

// Sort the leaderboard by the score column
var click = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
});
if(leaderboard){
    document.getElementById('score-col').dispatchEvent(click);
}
