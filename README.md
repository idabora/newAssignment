- Routes
   - /create {POST}
       * To create a task , which takes title , description , dueDate , category from BODY.
        * title is a mandatory field.
        * for dueDate user will pass an number then the set function in taskModel will set the due date as ,to today + the number of days passed by user. 
        *Category and dueDate is not compulsory to add.
        * No default Category assignation.

    - /getAll {GET}
        * To get to All task present in the Database.

    - /updateStatus/:id/:status {PATCH
        * To update status of a task.
        * need to pass _id of the document and the status in the params that you want to change.
        * default status is Incomplete.
        * It return status code 400 with a message if any task is already Complete and you are trying to change status with Complete again.

    - /updateTask/:id {PUT}
        * To update task info like title and description only.
        * Should pass _id of that document.
    
    - /deleteTask/:id {DELETE}
        * To delete the task from nthe database.
        * have to pass _id of that task/document.
        * If task not found it will shows a message.

    - /category {POST}
        * To create category for task to put in.
        * should pass the category name in body.

# Key Decisions for Task Management Application

## 1. Category Management

- **Create Categories**: Implement categories such as "shopping", "work", "health", "personal", and "other". These categories will be managed through the `/category` endpoint.
- **Category Reference in Tasks**: When creating a task, include the `_id` of the chosen category in the `category` field.

## 2. Separate Model for Categories

- **Model Design**: Create a separate `Category` model to handle category-specific functionality, distinct from the task model.

## 3. Additional Route for Categories

- **Routes**: Introduce an extra route to manage categories. This route will facilitate the creation, retrieval, and management of categories.

## 4. Error Handling and Validation

- **Backend Validation**: Ensure robust error handling and validation on the backend.
- **Mandatory Fields**: Validate that all required fields are filled and that data does not consist solely of empty spaces.
- **Error Responses**: Provide clear and informative error messages for validation failures and other issues.

## 5. Validation Practices

- **Field Requirements**: Implement validation to enforce mandatory fields and prevent empty space issues.
- **Data Integrity**: Ensure data integrity by validating inputs and maintaining consistency during task and category creation.

## Test Cases 
 
postman - https://api.postman.com/collections/19430201-02772f07-013f-4bb7-81c7-027f13e47386?access_key=PMAT-01J7WY4VJ36V81PEDYWTB5NVHD

    
