const { ObjectId } = require('mongodb')
const Task = require('../model/taskModel');
const Category = require('../model/categorySchema');

module.exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, category } = req.body;
        if (!title.trim()) {
            return res.status(400).json({
                message: "missing required data, Title is mandatory!"
            });
        }

        const task = await Task.create({ title, description, dueDate, category });
        const newT = await Task.findOne({ _id: task._id }).populate("category")
        return res.status(201).json({
            message: 'Task created successful',
            task: newT
        })

    } catch (error) {
        res.status(500).json({ message: "Failed to create todo", error: error.message });

    }
}

module.exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        if (!tasks.length) {
            return res.status(400).json({
                message: "Task list is Empty"
            });
        }

        res.status(200).json({
            message: "Success",
            Task: tasks
        })
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch all tasks", error: error.message });
    }

}

module.exports.updateTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!req.params.id && (!title.trim() || !description.trim())) {
            return res.status(400).json({
                message: "please pass id or title/description"
            })
        }

        let updateTask = {};
        if (title) updateTask.title = title;
        if (description) updateTask.description = description;

        let updatedTask = await Task.findByIdAndUpdate(req.params.id, { $set: updateTask }, { new: true });
        return res.status(200).json({ message: "updated successful", updatedTask })


    } catch (error) {
        return res.status(500).json({
            message: "Failed to update task",
            error: error.message
        });
    }
};

module.exports.deleteTask = async (req, res) => {
    try {
        let { id } = req.params;
        if (id) {
            const task = await Task.findByIdAndDelete(id);
            if (task === null) {

                return res.status(400).json({ message: "task id is invalid , task not found" });
            }

            return res.status(200).json({ Task: task });
        }

    } catch (error) {
        return res.status(400).json({
            message: "Please pass bookId",
            error: error.message
        })
    }

}

module.exports.updateStatus = async (req, res) => {
    try {
        const { status, id } = req.params;
        if (!status && !id) {
            return res.status(400).json({
                message: "please pass Status and id"
            });
        }

        const checkTask = await Task.findById(id, "taskComplete");

        if (!checkTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        if (checkTask.taskComplete === true) {
            // If the task is already completed, return a response and stop further execution
            return res.status(400).json({
                message: "Task is already completed."
            });
        }

        const task = await Task.findByIdAndUpdate(id, { $set: { taskComplete: status } }, { new: true });
        console.log(task);
        return res.status(200).json({
            message: "updation successful",
            task
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Something went wrong",
            error: error.message
        })
    }


}

module.exports.createcategory = async (req, res) => {
    const { category } = req.body;
    if (!category.trim()) {
        return res.status(400).json({ message: "please pass category" })
    }
    let cat = await Category.create({ category });
    return res.status(201).json({ message: "category made successful", category: cat });
}
