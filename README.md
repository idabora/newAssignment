- Routes
    /create {POST}
        To create a task , which takes title , description , dueDate , category from BODY.
        title is a mandatory field.
        for dueDate user will pass an number then the set function in taskModel will set the due date as ,to today + the number of days passed by user. 
        Category and dueDate is not compulsory to add.
        No default Category assignation.

    /getAll {GET}
        To get to All task present in the Database.

    /updateStatus/:id/:status {PATCH
        To update status of a task.
        need to pass _id of the document and the status in the params that you want to change.
        default status is Incomplete.
        It return status code 400 with a message if any task is already Complete and you are trying to change status with Complete again.

    /updateTask/:id {PUT}
        To update task info like title and description only.
        Should pass _id of that document.
    
    /deleteTask/:id {DELETE}
        To delete the task from nthe database.
        have to pass _id of that task/document.
        If task not found it will shows a message.

    /category {POST}
        To create category for task to put in.
        should pass the category name in body.

-Key decions
"create Categories from /category like shopping , work , health , personal , other  and then pass its _id in category field while creating any task"
"i choose to make ,Seprate Model for Category functionalty"
"an extra route to make your categories"
"Errors and Validation in backend are handled perfectly"
"Validation like the mandatory Fields and the data should not be empty spaces are keeping in mind to not make issue"
    